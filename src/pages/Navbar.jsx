import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggleButton } from '../components/ThemeToggle'

const Navbar = () => {
    return (
        <nav className="flex items-center justify-center p-4 shadow-lg bg-slate-200 dark:bg-slate-800 transition-colors">
            <Link 
                to="/" 
                className="rounded-md px-4 py-2 font-medium text-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
                Home
            </Link>
            <Link 
                to="/dashboard" 
                className="ml-4 rounded-md px-4 py-2 font-medium text-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
            >
                Dashboard
            </Link>
            <Link to="/userprofile" className="ml-4 rounded-md px-4 py-2 font-medium text-slate-700 dark:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">User Profile</Link>
            <ThemeToggleButton />
        </nav>
    );
}

export default Navbar;