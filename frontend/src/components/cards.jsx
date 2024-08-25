import React from 'react';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51PrZbhRqe8PxoiRo43fHJ5qr43hE1S6QP2LQuBzfLOKc0lkZS1tNSlyEpqirLSO1lbDrVYDSs3G5WZEMBVIqB3NE00IpwOvTZq');

const Cards = () => {
  const handleSelectPlan = async () => {
    const response = await fetch('http://localhost:5050/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const stripe = await stripePromise;
    stripe.redirectToCheckout({ sessionId: session.id });
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-5 max-w-5xl w-full ">
      <div className="flex space-x-12 justify-center">
        {/* Free Plan */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner hover:shadow-lg transition-shadow duration-300 flex-1">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Free</h3>
          <p className="text-gray-600 mb-4">Access to basic content</p>
          <div className="text-2xl font-bold text-gray-800 mb-6">0 / month</div>
          
          {/* Includes Section */}
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>🎥 Basic Video Content</li>
            <li>📄 Access to Articles</li>
            <li>💻 Basic Code Snippets</li>
            <li>🛠️ Community Support</li>
          </ul>
          
          <button className="w-full bg-webcolor text-white font-semibold py-2 px-4 rounded-lg hover:bg-aftercolor transition-colors duration-300">
            Subscribe
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner hover:shadow-lg transition-shadow duration-300 flex-1">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Premium Plan
          </h3>
          <p className="text-gray-600 mb-4">Access to all content</p>
          <div className="text-2xl font-bold text-gray-800 mb-6">$20 / month</div>
          
          {/* Includes Section */}
          <ul className="text-gray-600 mb-6 space-y-2">
            <li>🎥 All Video Content</li>
            <li>📄 Exclusive Articles</li>
            <li>💻 Full Code Projects</li>
            <li>🛠️ 24/7 Priority Support</li>
          </ul>
          
          <button 
            className="w-full bg-webcolor text-white font-semibold py-2 px-4 rounded-lg hover:bg-aftercolor transition-colors duration-300"
            onClick={handleSelectPlan}
          >
            Subscribe
          </button>
        </div>
      </div>
      </div>
  );
};

export default Cards;