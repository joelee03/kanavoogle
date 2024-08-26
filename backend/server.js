// Import modules
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cors = require('cors');
require('dotenv').config();

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

// Stripe Checkout Session Route for Subscription
app.post('/api/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price: 'price_1PrenKRqe8PxoiRoAzsNKBjA', 
                    quantity: 1,
                },
            ],
            mode: 'subscription', 
            success_url: 'http://localhost:5173/',
            cancel_url: 'http://localhost:5173/preview',
        });

        res.status(200).json({ id: session.id });
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


