import React, { useState } from 'react';
import { InboxIcon, BriefcaseIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import RedirectButton from '../components/SocialMediaButton';
import Logo from '../assets/webp/main_logo.webp'

const Sidebar = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleServicesDropdown = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <div className="h-screen w-64 bg-white shadow-md fixed left-0 top-0 flex flex-col justify-between">
      <div className="p-6">
        {/* Top Section */}
        <div className="flex items-center space-x-3 mb-8">
                    <img className="h-12 object-cover mr-10" src={Logo} alt="kanavoogle logo" /> 
                </div>

        {/* Navigation Links */}
        <nav className="flex flex-col space-y-4">
            <a href="/dashboard" className="flex items-center space-x-2 text-gray-700 hover:text-black">
                <InboxIcon className="h-6 w-6" />
                <span>Your Inquiries</span>
            </a>
          {/* Services Dropdown */}
          <div className="relative">
            <button
              onClick={toggleServicesDropdown}
              className="flex items-center space-x-2 text-gray-700 hover:text-black w-full text-left focus:outline-none"
            >
            <BriefcaseIcon className="h-6 w-6" />
            <span>Services</span>
              {isServicesOpen ? (
                <ChevronUpIcon className="h-5 w-5" />
              ) : (
                <ChevronDownIcon className="h-5 w-5" />
              )}
            </button>
            {isServicesOpen && (
                <div className="mt-2 bg-white shadow-lg rounded-md w-full">
                    <a href="/blockchain" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Novel Blockchain Projects</a>
                    <a href="/skills" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Gain 21st Century Skills</a>
                    <a href="/montessori" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Implement Montessori Education</a>
                </div>
            )}
          </div>
        </nav>
      </div>

      {/* Bottom Section */}
        <div className="flex space-x-2 justify-center mb-8">
            <RedirectButton platform="LinkedIn" />
            <RedirectButton platform="Facebook" />
        </div>
    </div>
  );
};

export default Sidebar;
