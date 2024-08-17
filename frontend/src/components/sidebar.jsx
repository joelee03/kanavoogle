import React, { useState } from 'react';
import { HomeIcon, ClipboardDocumentListIcon } from '@heroicons/react/24/outline';
import { useNavigate  } from 'react-router-dom'
import Button from '../ui/button'
import Logo from '../assets/webp/main_logo.webp'

const Sidebar = () => {
    const navigate = useNavigate();

    const handleNavigation = (route) => {
        console.log('Navigating to:', route);
        navigate(route); 
    };

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
                    <a href="" className="flex items-center space-x-2 text-gray-700 hover:text-black">
                    <HomeIcon className="h-6 w-6" />
                    <span>Your Inquiries</span>
                     </a>
                    {/* Services Dropdown */}
                <div className="relative">
                    <button
                        onClick={toggleServicesDropdown}
                        className="flex items-center space-x-2 text-gray-700 hover:text-black w-full text-left focus:outline-none"
                    >
                    <span>Services</span>
                    <svg
                    className={`h-5 w-5 transform ${isServicesOpen ? 'rotate-180' : 'rotate-0'}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
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
            <div className="p-6">
                <Button
                variant="primary"
                size="sm"
                onClick={() => handleNavigation('/')}
                className="w-full p-3 rounded-full text-white items-center justify-center hover:bg-[#7AA647]"
                >
                    Logout
                </Button>
            </div>
        </div>
    );
};

export default Sidebar;