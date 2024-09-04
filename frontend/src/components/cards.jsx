import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../authentication/AuthContext';


const stripePromise = loadStripe('pk_test_51PrZbhRqe8PxoiRo43fHJ5qr43hE1S6QP2LQuBzfLOKc0lkZS1tNSlyEpqirLSO1lbDrVYDSs3G5WZEMBVIqB3NE00IpwOvTZq');

const Cards = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleCheckout = async (mode) => {
    if (!user) {
      navigate('/login'); // Redirect to login if user is not authenticated
      return;
    }

    const stripe = await stripePromise;

    const response = await fetch('http://localhost:5050/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ mode, client_reference_id: user._id }),
    });

    const { sessionId } = await response.json();

    // Redirect to Stripe Checkout
    const { error } = await stripe.redirectToCheckout({ sessionId });

    if (error) {
      console.error('Stripe checkout error:', error);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-5 max-w-6xl w-full mx-auto mt-10">
      <div className="flex space-x-12 justify-center">
        {/* Free Plan */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner hover:shadow-lg transition-shadow duration-300 flex-1">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">Lifetime Access</h3>
          <div className="text-2xl font-bold text-gray-800 mb-6">$250 / One Time</div>
          
          {/* Includes Section */}
          <ul className="text-gray-600 mb-6 space-y-2 text-left">
            <li>✅ Own forever.</li>
            <li>✅ Unlimited access to all current and future courses for life</li>
            <li>✅ Priority support</li>
          </ul>
          
          <button 
            className="w-full bg-webcolor text-white font-semibold py-2 px-4 rounded-lg hover:bg-aftercolor transition-colors duration-300 mt-auto"
            onClick={() => handleCheckout('payment')}
          >
            Select plan
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner hover:shadow-lg transition-shadow duration-300 flex-1">
          <h3 className="text-xl font-semibold text-gray-700 mb-2">
            Monthly Subscription
          </h3>
          <div className="text-2xl font-bold text-gray-800 mb-6">$20 / Month</div>
          
          {/* Includes Section */}
          <ul className="text-gray-600 mb-6 space-y-2 text-left">
            <li>✅ Unlimited access to all current and future courses monthly</li>
            <li>✅ Priority support</li>
          </ul>
          
          <button 
            className="w-full bg-webcolor text-white font-semibold py-2 px-4 rounded-lg hover:bg-aftercolor transition-colors duration-300 mt-8"
            onClick={() => handleCheckout('subscription')}
          >
            Select plan
          </button>
        </div>
      </div>
      </div>
  );
};

export default Cards;