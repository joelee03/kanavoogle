import React from 'react'
import { useNavigate  } from 'react-router-dom'
import Button from '../ui/button'
import RedirectButton from '../components/SocialMediaButton';
import Logo from '../assets/webp/main_logo.webp'


const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    console.log('Navigating to:', route);
      navigate(route); 
  };

  return (
    <div className="relative font-custom flex flex-col justify-center items-center w-full h-screen overflow-hidden">
      <div className="absolute top-0 left-0 p-4">
        <img className="h-[5rem] object-cover" src={Logo} alt="kanavoogle logo" />
      </div>

      <div className="absolute top-0 right-0 p-8">
        <Button 
          variant="primary"
          size="md"
          onClick={() => handleNavigation('/preview')}
          className="w-full p-3 rounded-full text-white items-center justify-center hover:bg-[#7AA647]"
        >
          Preview Services
        </Button>
      </div>

      <div className="flex flex-col items-center text-center">
        <h1 className="text-[2.7rem] text-[#096A2E] font-custom mb-20">
          Education and Project Management Consultant
        </h1>
        <div className="w-full max-w-xs">
          <Button
            variant="primary"
            size="lg"
            onClick={() => handleNavigation('/signup')}
            className="w-full p-3 rounded-full text-white items-center justify-center hover:bg-[#7AA647]"
          >
            Start your journey
          </Button>
        </div>
        <div className="mt-20" style={{ display: 'flex', gap: '10px' }}>
          <RedirectButton platform="LinkedIn" />
          <RedirectButton platform="Facebook" />
        </div>
      </div>
    </div>
  )
}

export default Home