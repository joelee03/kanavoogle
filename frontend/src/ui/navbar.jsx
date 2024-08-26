import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';
import { useState } from 'react';

import Logo from '../assets/webp/main_logo.webp'
import { ChevronDownIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    logout();
  };

  return (
    <header className="bg-white">
      <div className="container max-w-[1400px] mx-auto p-2.5 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-gray-800 no-underline">
            <img className="h-12 object-cover" src={Logo} alt="kanavoogle logo" />
          </Link>
          <div className="relative ml-10">
            <button
              className="text-gray-800 no-underline hover:text-[#7AA647] flex items-center"
              onClick={() => setDropdownOpen(!isDropdownOpen)}
            >
              Inquiry
              <ChevronDownIcon className="h-5 w-5 ml-1 text-gray-800" />
            </button>
            {isDropdownOpen && (
              <div className="absolute mt-2 py-2 w-48 bg-white border rounded shadow-xl">
                <Link to="/blockchain" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Novel Blockchain
                </Link>
                <Link to="/skills" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  21st Century Skills
                </Link>
                <Link to="/montessori" className="block px-4 py-2 text-gray-800 hover:bg-gray-200">
                  Montessori Education
                </Link>
              </div>
            )}
          </div>
          <Link to="/courses" className="ml-10 text-gray-800 no-underline hover:text-[#7AA647]">
            Courses
          </Link>
          <Link to="/preview" className="ml-10 text-gray-800 no-underline hover:text-[#7AA647]">
            Subscription
          </Link>
        </div>
        <nav className="flex items-center">
          {user ? (
            <div className="flex items-center">
              <span className="text-gray-800">{user.email}</span>
              <button 
                onClick={handleClick} 
                className="ml-2.5 bg-white text-[#7AA647] border-2 border-[#7AA647] p-1.5 rounded font-poppins">
                Logout
              </button>
            </div>
          ) : (
            <Link to="/login" className="bg-[#7AA647] text-white p-2 rounded">
              Sign in
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;