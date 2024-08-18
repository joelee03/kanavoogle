import React from 'react'
import { useNavigate  } from 'react-router-dom'
import Button from '../ui/button'
import Navbar from '../ui/navbar';
import Footer from '../components/footer';
import Services from '../components/Services';

import { Typewriter } from 'react-simple-typewriter';

const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    console.log('Navigating to:', route);
      navigate(route); 
  };

  return (
    <div >
      <Navbar />
      <div className="mt-20 max-w-[1200px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-custom md:py-6">
          Education and Project management Consultant
        </h1>

        <div className="flex justify-center items-center">
          <p className='md:text-4xl sm:text-3xl text-xl'>Specialised in </p>
          <span className='md:text-4xl sm:text-3xl text-xl pl-2'>
            <Typewriter
            words={['Blockchain Technology', 'Montessori Education', '21st Century Skills']}
            loop={0} // Infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={90}
            deleteSpeed={50}
            delaySpeed={1000}
            />
          </span>
        </div>

        <div className="w-full max-w-xs mx-auto py-8">
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleNavigation('/signup')}
            className="w-full p-3 rounded-full text-white items-center justify-center hover:bg-[#7AA647]"
          >
            Get Started
          </Button>
        </div>
        <Services />
        <Footer />
      </div>
    </div>
  )
}

export default Home
