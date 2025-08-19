import './style.css';
import { useTheme } from '../contexts/ThemeContex';
import toast, { Toaster } from 'react-hot-toast';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const { theme } = useTheme();
    const navigate = useNavigate()

    const containerClasses = theme === 'light'
        ? "bg-white text-black shadow-lg rounded-lg p-8 m-4 w-full max-w-md"
        : "bg-slate-800 text-white shadow-lg rounded-lg p-8 m-4 w-full max-w-md";

    const inputClasses = theme === 'light'
        ? "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-black"
        : "mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-white";
    
    const buttonClasses = "w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";


    const handleLogin = (event) => {
        event.preventDefault();

        const form = event.target;
        const username = form.elements.username.value;
        const password = form.elements.password.value;
        const users = JSON.parse(localStorage.getItem('users')) || []

        const userFound=users.find(user => user.username === username)

        if (userFound && bcrypt.compareSync(password, userFound.password)){
            toast.success('Login Successful!');
            localStorage.setItem('currentUser',JSON.stringify(userFound))
            navigate('/')
            
        }else{
            toast.error('Invalid')
            form.reset();
        }


        console.log({ username, password });


    };

    return (
        <div className={containerClasses}>
            <Toaster position="top-center" />
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Welcome Back!</h1>
                <p className="text-sm mb-6">Please enter your details to sign in.</p>
            </div>
            <form onSubmit={handleLogin} className="space-y-6">
                <div>
                    <label 
                        htmlFor="username" 
                        className="block text-sm font-medium"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        name="username" 
                        className={inputClasses}
                        placeholder="your_username"
                        required 
                    />
                </div>
                <div>
                    <label 
                        htmlFor="password" 
                        className="block text-sm font-medium"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password" 
                        className={inputClasses}
                        placeholder="••••••••"
                        required
                    />
                </div>
                
                <div>
                    <button type="submit" className={buttonClasses}>
                        Sign In
                    </button>
                </div>
            </form>
        </div>
    );
};