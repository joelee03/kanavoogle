// Import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
// Import API
const inquiryRoutes = require('./views/inquiry');

// Import Stripe
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

var admin = require("firebase-admin");

var serviceAccount = require(process.env.PRIVATE_KEY)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


// Create Express app
const app = express();

// Use bodyParser.raw() for Stripe webhooks to preserve the request body
app.post('/webhook', express.raw({ type: 'application/json' }), async (req, res) => {
  const sig = req.headers['stripe-signature']; // Get the Stripe signature
  let event;

  try {
    // Construct the event using the raw body and signature
    event = stripe.webhooks.constructEvent(
      req.body, // Must be raw body
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Process the checkout session completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const firebaseUid = session.client_reference_id; // Firebase UID

    console.log(`Payment completed for user: ${firebaseUid}`);

    try {
      // Grant course access in Firestore
      const userRef = admin.firestore().collection('users').doc(firebaseUid);
      await userRef.set({ hasAccess: true }, { merge: true });

      console.log(`Access granted for user: ${firebaseUid}`);
      res.json({ received: true });
    } catch (error) {
      console.error('Error updating Firestore:', error);
      res.status(500).send('Error updating Firestore');
    }
  } else {
    res.status(400).end();
  }
});

// Middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // frontend URL
    credentials: true
}));

// Routes
app.use('/api/inquiry', inquiryRoutes);

app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const { mode, client_reference_id } = req.body;

        let session;
        if (mode === 'payment') {
            session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price: 'price_1QCFmvRqe8PxoiRoVTwmdWLw', // One-time purchase product price ID
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                client_reference_id: client_reference_id,
                success_url: 'http://localhost:5173/success',
                cancel_url: 'http://localhost:5173/courses/digitalskills',
            });
        }

        console.log('Checkout session created successfully:', session.id);

        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).send({ error: error.message });
    }
});


// Database connection
mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        // Listen for requests
        app.listen(process.env.PORT, () => {
            console.log('Connected to DB and listening on port', process.env.PORT);
        });
    })
    .catch((error) => {
        console.log(error);
    });
