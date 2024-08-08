import React from 'react'
import { useNavigate  } from 'react-router-dom'
import Button from '../ui/button'
import RedirectButton from '../components/SocialMediaButton';
import Logo from '../assets/webp/main_logo.webp'


const Home = () => {
  const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/signup'); //route to signup
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="absolute top-0 left-0 p-4">
        <img className="h-[5rem] object-cover" src={Logo} alt="kanavoogle logo"/>
      </div>
      <div className='mb-8'>
        <h1 className="font-custom">Education and Project Management Consultant</h1>

      </div>

      <div className="w-full max-w-md">
      <Button 
        variant="primary" size="md" onClick={handleNavigation}
        className="w-full p-3 rounded-full text-white items-center justify-center hover:bg-[#7AA647]"
      >
        Connect Now
      </Button>
      </div>

      <div className="p-4 text-center">
        <h3>Follow Us On</h3>
        <div style={{ display: 'flex', gap: '10px' }}>
          <RedirectButton platform="LinkedIn" />
          <RedirectButton platform="Facebook" />
        </div>
      </div>
    </div>
  )
}

export default Home