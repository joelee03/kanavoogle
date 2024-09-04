// Import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();
const bodyParser = require('body-parser');
const User = require('./models/userModel')

// Import API
const inquiryRoutes = require('./views/inquiry');
const userRoutes = require('./views/user');

// Import Stripe
const Stripe = require('stripe');
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

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
app.use('/api/user', userRoutes);

app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const { mode, client_reference_id } = req.body;

        let session;
        if (mode === 'subscription') {
            session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price: 'price_1PrenKRqe8PxoiRoAzsNKBjA', // Subscription product price ID
                        quantity: 1,
                    },
                ],
                mode: 'subscription',
                client_reference_id: client_reference_id,
                success_url: 'http://localhost:5173/success',
                cancel_url: 'http://localhost:5173/preview',
            });
        } else if (mode === 'payment') {
            session = await stripe.checkout.sessions.create({
                payment_method_types: ['card'],
                line_items: [
                    {
                        price: 'price_1PrvXERqe8PxoiRoTl0JPDKm', // One-time purchase product price ID
                        quantity: 1,
                    },
                ],
                mode: 'payment',
                client_reference_id: client_reference_id,
                success_url: 'http://localhost:5173/success',
                cancel_url: 'http://localhost:5173/preview',
            });
        }

        console.log('Checkout session created successfully:', session.id);

        res.status(200).json({ sessionId: session.id });
    } catch (error) {
        console.error('Error creating checkout session:', error);
        res.status(500).send({ error: error.message });
    }
});

// Webhook endpoint for Stripe to notify about payment status
app.post('/webhook', bodyParser.raw({ type: 'application/json' }), async (req, res) => {
    const sig = req.headers['stripe-signature'];
    const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
    } catch (err) {
        console.error('⚠️  Webhook signature verification failed.', err.message);
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    console.log('Received event:', event.type);

    switch (event.type) {
        case 'checkout.session.completed':
            console.log("Payment success");
            const session = event.data.object;
            const userId = session.client_reference_id;

            if (!userId) {
                console.error('User ID not found in the session.');
                return res.status(400).json({ error: 'User ID missing from session' });
            }

            try {
                // Default to one-month subscription unless identified as a lifetime subscription
                let subscriptionStartDate = new Date();
                let subscriptionEndDate = new Date();
                let subscriptionActive = true;

                // Retrieve line items from the session to determine the price ID
                const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
                
                if (!lineItems.data || lineItems.data.length === 0) {
                    throw new Error('No line items found in the session.');
                }

                const priceId = lineItems.data[0].price.id;

                // Check which subscription type was purchased
                if (priceId === 'price_1PrenKRqe8PxoiRoAzsNKBjA') {
                    // One-month subscription
                    subscriptionEndDate.setMonth(subscriptionEndDate.getMonth() + 1);
                } else if (priceId === 'price_1PrvXERqe8PxoiRoTl0JPDKm') {
                    // Lifetime subscription: No end date
                    subscriptionEndDate = null;
                } else {
                    throw new Error('Unknown subscription type');
                }

                // Update the user's subscription status in your database
                const updatedUser = await User.findByIdAndUpdate(userId, {
                    subscriptionActive: subscriptionActive,
                    subscriptionStartDate: subscriptionStartDate,
                    subscriptionEndDate: subscriptionEndDate
                }, { new: true });

                if (!updatedUser) {
                    console.error(`User ${userId} not found.`);
                    return res.status(404).json({ error: 'User not found' });
                }

                console.log(`User ${userId} subscription activated!`);
            } catch (err) {
                console.error('Error updating user subscription:', err);
                return res.status(500).json({ error: 'Failed to update user subscription' });
            }
            break;

        default:
            // Handle unexpected event types
            console.log(`Unhandled event type ${event.type}.`);
            break;
    }

    // Return a 200 response to acknowledge receipt of the event
    res.json({ received: true });
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
