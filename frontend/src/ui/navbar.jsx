import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

import Logo from '../assets/webp/main_logo.webp'

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

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
          <Link to="/preview" className="ml-10 text-gray-800 no-underline hover:text-[#7AA647]">
            Subscription
          </Link>
          <Link to="/courses" className="ml-10 text-gray-800 no-underline hover:text-[#7AA647]">
            Courses
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