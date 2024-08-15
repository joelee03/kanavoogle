import React, { useState, useEffect } from 'react';
import Logo from '../assets/webp/main_logo.webp';
import { useNavigate } from 'react-router-dom';

const HeaderNoLogin = () => {
  const [opacity, setOpacity] = useState(1);
  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(route);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Get the current scroll position
      const maxScroll = 1000; // The scroll position at which the header is fully faded
      const newOpacity = 1 - (scrollTop / maxScroll); // Calculate the new opacity
      setOpacity(Math.max(newOpacity, 0)); // Ensure opacity doesn't go below 0
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header style={{ opacity }}>
      <div id="nav">
        <img className="h-[5rem] object-cover" src={Logo} alt="kanavoogle logo" />
        <div className="navlinks">
          <button onClick={() => handleNavigation('/login')}>Login</button>
          <button onClick={() => handleNavigation('/signup')}>Register</button>
        </div>
      </div>
    </header>
  );
};

export default HeaderNoLogin;
