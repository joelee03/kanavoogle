// server.js (Node.js backend example)
const express = require('express');
const Stripe = require('stripe');
const stripe = Stripe('your-stripe-secret-key'); // Use your actual secret key

const app = express();

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'HTML Course Enrollment',
          },
          unit_amount: 0, // $0 since this course is free, you can use any amount here
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.CLIENT_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.CLIENT_URL}/cancel`,
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log('Server running on port 4242'));
