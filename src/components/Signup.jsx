import './style.css';
import { useTheme } from '../contexts/ThemeContex';
import toast,{Toaster} from 'react-hot-toast';
import bcrypt from 'bcryptjs'

export const Signup = () => {
    const { theme } = useTheme();

    
    const containerClasses = theme === 'light'
        ? "bg-white text-black shadow-lg rounded-lg p-8 m-4 w-full max-w-md"
        : "bg-slate-800 text-white shadow-lg rounded-lg p-8 m-4 w-full max-w-md";

    const inputClasses = theme === 'light'
        ? "mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-black"
        : "mt-1 block w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 text-white";
    
    const buttonClasses = "w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75";

    const handleSignup = (event) => {
        event.preventDefault();

        const form = event.target;
        const plainTextpassword = form.elements.password.value;

        const salt= bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(plainTextpassword, salt)


        const newUser={
            username: form.elements.username.value,
            email: form.elements.email.value,
            password: hashedPassword
        }
        const existingUser=JSON.parse(localStorage.getItem('users')) || []
        const userExistsname = existingUser.some((users) => users.username===newUser.username)
        const userExistsemail = existingUser.some((users) => users.email===newUser.email)

        if (userExistsname){
            toast.error("Username Already Taken")
            return;
        }

        if (userExistsemail){
            toast.error("Email Already Taken")
            return;
        }

        existingUser.push(newUser)
        localStorage.setItem('users',JSON.stringify(existingUser))

        toast.success("Account Created Successfully")
        
        console.log({ username, email, password });

        form.reset();
    };

    return (
        
        <div className={containerClasses}>
            <Toaster position="top-center" />
            <div className="text-center">
                <h1 className="text-2xl font-bold mb-2">Create an Account</h1>
                <p className="text-sm mb-6">Join us by filling out the form below.</p>
            </div>
            
            
            <form onSubmit={handleSignup} className="space-y-6 w-full">
               
                <div>
                    <label className="block text-sm font-bold mb-1" htmlFor="username">
                        Username
                    </label>
                    <input
                        className={inputClasses} 
                        id="username"
                        name="username" 
                        type="text"
                        placeholder="your_username"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-bold mb-1" htmlFor="email">
                        Email
                    </label>
                    <input
                        className={inputClasses} 
                        id="email"
                        name="email" 
                        type="email"
                        placeholder="you@example.com"
                        required
                    />
                </div>
                
                <div>
                    <label className="block text-sm font-bold mb-1" htmlFor="password">
                        Password
                    </label>
                    <input
                        className={inputClasses} 
                        id="password"
                        name="password" 
                        type="password"
                        placeholder="••••••••"
                        required
                    />
                </div>
                
                <div>
                    <button className={buttonClasses} type="submit">
                        Create Account
                    </button>
                </div>
            </form>
        </div>
    );
};