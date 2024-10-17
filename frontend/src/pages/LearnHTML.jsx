import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebase'; // Import your Firebase auth config
import HtmlTutorial from '../components/HtmlTutorial';

const LearnHTML = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for authentication state changes
    const loggedout = onAuthStateChanged(auth, (user) => {
      if (!user) {
        // If no user is logged in, redirect to the homepage
        navigate('/');
      }
    });

    // Clean up the listener when the component unmounts
    return () => loggedout();
  }, [navigate]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '100%' }}>
      <HtmlTutorial />
    </div>
  );
};

export default LearnHTML;
