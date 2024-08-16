import React from 'react'
import { useNavigate  } from 'react-router-dom'
import Button from '../ui/button'
import Navbar from '../components/navbar';
import Footer from '../components/footer';


const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    console.log('Navigating to:', route);
      navigate(route); 
  };

  return (
    <div className="relative font-custom flex flex-col justify-center items-center w-full h-screen overflow-hidden">
      <Navbar />
      <div className="flex flex-col items-center text-center">
        <h1 className="text-[2.7rem] text-[#096A2E] font-custom mb-20">
          Education and Project Management Consultant
        </h1>
        <div className="w-full max-w-xs">
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleNavigation('/preview')}
            className="w-full p-3 rounded-full text-white items-center justify-center hover:bg-[#7AA647]"
          >
            Get started
          </Button>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
