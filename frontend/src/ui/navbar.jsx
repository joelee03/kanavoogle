import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header className="bg-white">
      <div className="container max-w-[1400px] mx-auto p-2.5 flex items-center justify-between">
        <Link to="/" className="text-gray-800 no-underline">
          <h1 className="text-xl">Workout Buddy</h1>
        </Link>
        <nav className="flex items-center">
          {user && (
            <div className="flex items-center">
              <span className="text-gray-800">{user.email}</span>
              <button 
                onClick={handleClick} 
                className="ml-2.5 bg-white text-green-500 border-2 border-green-500 p-1.5 rounded font-poppins text-base"
              >
                Log out
              </button>
            </div>
          )}
          {!user && (
            <div className="flex items-center">
              <Link to="/login" className="ml-2.5 text-gray-800 no-underline">Login</Link>
              <Link to="/signup" className="ml-2.5 text-gray-800 no-underline">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;