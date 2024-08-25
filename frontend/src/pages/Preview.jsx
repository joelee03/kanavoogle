import React from 'react';
import { useNavigate } from 'react-router-dom';

const Preview = () => {
  const navigate = useNavigate();

  const handleSelectPlan = (plan) => {
    if (plan.price === 0) {
      // Free plan, no payment needed
      navigate('/free-content');
    } else {
      // Navigate to payment page with selected plan details
      navigate('/payment', { state: { plan } });
    }
  };

  return (
    <div className="preview-container">
      <h1>Select Your Plan</h1>
      <div className="plans">
        <div className="plan">
          <h3>Free Plan</h3>
          <h1>$0</h1>
          <p>/ forever</p>
          <ul>
            <li>✔️ Access to limited content.</li>
            <li>✔️ Community access.</li>
          </ul>
          <button onClick={() => handleSelectPlan({ name: 'Free Plan', price: 0 })}>
            Select Free Plan
          </button>
        </div>
        <div className="plan">
          <h3>Premium Plan</h3>
          <h1>$119</h1>
          <p>/ year</p>
          <ul>
            <li>✔️ Access to all premium content.</li>
            <li>✔️ Private Discord server invite.</li>
            <li>✔️ Priority support.</li>
          </ul>
          <button onClick={() => handleSelectPlan({ name: 'Premium Plan', price: 119 })}>
            Select Premium Plan
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;
