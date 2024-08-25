import React from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../ui/navbar';
import Cards from '../components/Cards'

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
    <div>
      <Navbar />
      <div className='mt-40 mx-auto text-center flex flex-col justify-center'>
      <h1 className="md:text-6xl sm:text-5xl text-4xl font-custom md:py-6" >The best investment you may ever make.</h1>
      <Cards />
      </div>
    </div>
  );
};

export default Preview;
