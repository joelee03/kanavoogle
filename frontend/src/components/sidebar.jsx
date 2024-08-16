import React from 'react';
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
    return (
        <div className="h-screen w-64 bg-white shadow-md fixed left-0 top-0 flex flex-col justify-between">
            <div className="p-6">
                {/* Top Section */}
                <div className="flex items-center space-x-3 mb-8">
                    <img className="h-12 object-cover mr-10" src={Logo} alt="kanavoogle logo" /> 
                </div>

                {/* Navigation Links */}
                <nav className="flex flex-col space-y-4">
                    <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-black">
                        <HomeIcon className="h-6 w-6" />
                        <span>Your Inquires</span>
                    </a>
                    <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-black">
                        <ClipboardDocumentListIcon className="h-6 w-6" />
                        <span>Status Updates</span>
                    </a>
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