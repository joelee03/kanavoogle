import React from 'react';

import Cards from '../components/cards';
import Features from '../components/Features';

const Preview = () => {
  return (
    <div className='h-[100vh]'>
      <div className='mt-40 mx-auto text-center flex flex-col justify-center'>
      <h1 className="md:text-6xl sm:text-5xl text-4xl font-custom md:py-6" >The best investment you may ever make.</h1>
      <Cards />
      <h2 className="md:text-6xl sm:text-5xl text-4xl font-custom md:py-6 mt-20" >What's Included?</h2>
      <Features />
      </div>
      <div className='mt-40'>
      </div>
    </div>
  );
};

export default Preview;
