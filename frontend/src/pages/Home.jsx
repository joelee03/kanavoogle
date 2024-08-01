import React from 'react'
import { useNavigate  } from 'react-router-dom'
import Button from '../ui/button'

const Home = () => {
  const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/account'); //route to account
    };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800">Kanavoogle</h1>
        </div>
        <div className="w-full max-w-md">
                {/* Replace search bar with a button */}
        <Button 
          variant="primary" size="md" onClick={handleNavigation}
          className="w-full p-3 rounded-full bg-blue-500 text-white font-semibold shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Go to Account
        </Button>
          </div>
    </div>
  )
}

export default Home