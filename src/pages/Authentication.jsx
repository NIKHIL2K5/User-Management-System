import './style.css';
import { useState } from 'react';
import { useTheme } from '../contexts/ThemeContex';
import { Login } from '../components/Login';
import { Signup } from '../components/Signup';

export const Authentication = () => {
    const { theme } = useTheme();
    const [isLoginView, setIsLoginView] = useState(true);

    const containerClasses = theme === 'light'
        ? "mb-6 p-4 bg-white text-black shadow-md flex flex-col gap-4 h-screen justify-center items-center"
        : "mb-6 p-4 bg-slate-800 text-white shadow-md flex flex-col gap-4 h-screen justify-center items-center";

    return (
        <div className={containerClasses}>
            {isLoginView ? <Login /> : <Signup />}
            

            <button
                onClick={() => setIsLoginView(!isLoginView)}
                className="mt-4 text-sm text-blue-500 hover:underline"
            >
                {isLoginView
                    ? "Don't have an account? Sign Up"
                    : "Already have an account? Sign In"}
            </button>
        </div>
    )
}