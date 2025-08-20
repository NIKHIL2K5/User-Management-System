import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeToggleButton } from '../components/ThemeToggle';
import { isAuthenticated } from '../auth';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const isLoggedIn = isAuthenticated();

    const handleLogout = () => {
        localStorage.removeItem('currentUser');
        setIsMenuOpen(false);
        navigate('/login');
    };

    const navLinkClasses = "block rounded-md px-4 py-2 font-medium text-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors";
    const logoutButtonClasses = "w-full text-left rounded-md px-4 py-2 font-medium bg-red-500 text-white hover:bg-red-600 transition-colors";

    return (
        <nav className="shadow-lg bg-slate-200 dark:bg-slate-800 transition-colors relative w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    <div className="hidden md:flex items-center space-x-4">
                        <Link to="/" className={navLinkClasses}>Home</Link>
                        {isLoggedIn && (
                            <>
                                <Link to="/dashboard" className={navLinkClasses}>Dashboard</Link>
                                <Link to="/userprofile" className={navLinkClasses}>User Profile</Link>
                            </>
                        )}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        {isLoggedIn ? (
                            <button onClick={handleLogout} className="rounded-md px-4 py-2 font-medium bg-red-500 text-white hover:bg-red-600 transition-colors">Logout</button>
                        ) : (
                            <Link to='/login' className={navLinkClasses}>Login</Link>
                        )}
                        <ThemeToggleButton />
                    </div>

                    <div className="md:hidden flex items-center justify-between w-full">
                         <Link to="/" className="font-bold text-xl text-slate-700 dark:text-white">MyApp</Link>
                         <div className='flex items-center space-x-2'>
                            <ThemeToggleButton />
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 rounded-md text-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700">
                                {isMenuOpen ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                    </svg>
                                )}
                            </button>
                         </div>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute w-full bg-slate-200 dark:bg-slate-800 shadow-lg z-10">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link to="/" onClick={() => setIsMenuOpen(false)} className={navLinkClasses}>Home</Link>
                        {isLoggedIn && (
                            <>
                                <Link to="/dashboard" onClick={() => setIsMenuOpen(false)} className={navLinkClasses}>Dashboard</Link>
                                <Link to="/userprofile" onClick={() => setIsMenuOpen(false)} className={navLinkClasses}>User Profile</Link>
                            </>
                        )}
                        <div className="pt-2">
                             {isLoggedIn ? (
                                <button onClick={handleLogout} className={logoutButtonClasses}>Logout</button>
                            ) : (
                                <Link to='/login' onClick={() => setIsMenuOpen(false)} className={navLinkClasses}>Login</Link>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;