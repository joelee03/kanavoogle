// Import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const admin = require('firebase-admin');
// Import API
const inquiryRoutes = require('./views/inquiry');

// Import Stripe
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

admin.initializeApp({
    credential: admin.credential.applicationDefault(), // Ensure credentials are set up properly
});

// Create Express app
const app = express();

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

// Middleware to parse Stripe's raw body for webhooks
app.use('/webhook', bodyParser.raw({ type: 'application/json' }));

// Webhook handler for Stripe events
app.post('/webhook', async (req, res) => {
  const sig = req.headers['stripe-signature'];
  let event;

  try {
    // Verify Stripe event signature
    event = stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Process checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const firebaseUid = session.client_reference_id; // Firebase UID from frontend

    console.log(`Payment completed for user: ${firebaseUid}`);

    try {
      // Update the Firestore document to grant access
      const userRef = admin.firestore().collection('users').doc(firebaseUid);
      await userRef.set(
        {
          hasAccess: true, // Grant access to the course
        },
        { merge: true } // Merge with existing data
      );

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
