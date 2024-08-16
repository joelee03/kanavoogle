import React, { useState, useEffect } from 'react';
import Logo from '../assets/webp/main_logo.webp';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [opacity, setOpacity] = useState(1);
  const [isSignedIn, setIsSignedIn] = useState(false); // State to track sign-in status
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    if (route === '/') {
      // Handle logout logic here
      setIsSignedIn(false); // Update sign-in status
      navigate('/'); // Redirect to sign-in page after logging out
    } else {
      navigate(route);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const maxScroll = 1000;
      const newOpacity = 1 - (scrollTop / maxScroll);
      setOpacity(Math.max(newOpacity, 0));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50" style={{ opacity }}>
      <div id="nav" className="flex justify-between items-center p-4 max-w-screen-xl mx-auto">
      <div className="flex items-center space-x-5"> 
          <button onClick={() => handleNavigation('/')} className="focus:outline-none">
            <img className="h-12 object-cover mr-10" src={Logo} alt="kanavoogle logo" />
          </button>
          <nav className="hidden md:flex space-x-10">
            <a href="#" className="text-gray-700 hover:text-black">Services</a>
            <a href="#" className="text-gray-700 hover:text-black">Why Kanavoogle?</a>
            <a href="#" className="text-gray-700 hover:text-black">Resources</a>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          {isSignedIn ? (
            <button onClick={() => handleNavigation('/')} className="text-gray-700 hover:text-black focus:outline-none">
              Logout
            </button>
          ) : (
            <button onClick={() => handleNavigation('/login')} className="text-gray-700 hover:text-black focus:outline-none">
              Sign in
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;