import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeToggleButton } from '../components/ThemeToggle';
import { isAuthenticated } from '../auth';

const Navbar = () => {
    const navigate = useNavigate();
    const isLoggedIn = isAuthenticated();

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        navigate('/login');
    };

    const navLinkClasses = "rounded-md px-4 py-2 font-medium text-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors";
    const logoutButtonClasses = "rounded-md px-4 py-2 font-medium bg-red-500 text-white hover:bg-red-600 transition-colors";

    return (
        <nav className="flex items-center justify-between p-4 shadow-lg bg-slate-200 dark:bg-slate-800 transition-colors">
            
            <div className="flex items-center space-x-4">
                <Link to="/" className={navLinkClasses}>
                    Home
                </Link>
                {isLoggedIn && (
                    <>
                        <Link to="/dashboard" className={navLinkClasses}>
                            Dashboard
                        </Link>
                        <Link to="/userprofile" className={navLinkClasses}>
                            User Profile
                        </Link>
                    </>
                )}
            </div>

            <div className="flex items-center space-x-4">
                {isLoggedIn ? (
                    <button onClick={handleLogout} className={logoutButtonClasses}>
                        Logout
                    </button>
                ) : (
                    <Link to='/login' className={navLinkClasses}>
                        Login
                    </Link>
                )}
                
                <ThemeToggleButton />
            </div>
        </nav>
    );
}

export default Navbar;