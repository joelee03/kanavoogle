import React from 'react'
import Button from '../ui/button'
import Logo from '../assets/webp/main_logo.webp'

function topbar() {
    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full flex items-center justify-between p-4">
          <div className="flex items-center">
          <img className="h-12 object-cover mr-10" src={Logo} alt="kanavoogle logo" /> 
          </div>
          
          <a href='/'>
            <Button
                variant="primary"
                size="md"
                className="w-full p-3 rounded-full text-white items-center justify-center hover:bg-[#7AA647]"
            >
                Logout
            </Button>
            </a>
        </nav>
      );
    };

export default topbar