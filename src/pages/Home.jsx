import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContex'; 

const UsersIcon = () => {
  const { theme } = useTheme();
  const iconColor = theme === 'light' ? 'text-indigo-500' : 'text-indigo-400';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 mb-4 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );
};

const ShieldCheckIcon = () => {
  const { theme } = useTheme();
  const iconColor = theme === 'light' ? 'text-indigo-500' : 'text-indigo-400';
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 mb-4 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944a11.955 11.955 0 019-2.606 11.955 11.955 0 019 2.606 12.02 12.02 0 00-1.618-7.944z" />
    </svg>
  );
};

const SearchIcon = () => {
    const { theme } = useTheme();
    const iconColor = theme === 'light' ? 'text-indigo-500' : 'text-indigo-400';
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 mb-4 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    );
};

const DocumentDownloadIcon = () => {
    const { theme } = useTheme();
    const iconColor = theme === 'light' ? 'text-indigo-500' : 'text-indigo-400';
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 mb-4 ${iconColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    );
};

export const Home = () => {
    const { theme } = useTheme();

    const features = [
      {
        icon: <UsersIcon />,
        title: 'User CRUD Operations',
        description: 'Create, Read, Update, and Soft-Delete users with a clean, modal-based interface.',
      },
      {
        icon: <ShieldCheckIcon />,
        title: 'Roles & Permissions',
        description: 'Differentiate between "Admin" and "User" roles, with the UI adapting to show/hide actions.',
      },
      {
        icon: <SearchIcon />,
        title: 'Dynamic Data Table',
        description: 'A powerful user table with client-side search, filtering, sorting, and pagination.',
      },
      {
        icon: <DocumentDownloadIcon />,
        title: 'CSV Import & Export',
        description: 'Easily export user data to CSV files and import new users from a CSV upload.',
      },
    ];
    const techStack = ['React', 'Vite', 'Tailwind CSS', 'React Router', 'React Hook Form'];

    return (
        <div 
            className={
                theme === 'light' 
                ? "bg-slate-50 min-h-screen font-sans text-slate-900 transition-colors duration-300" 
                : "bg-slate-900 min-h-screen font-sans text-white transition-colors duration-300"
            }
        >
            <main className="container mx-auto px-6 py-24 text-center">
                <span className={theme === 'light' ? "bg-indigo-100 text-indigo-600 text-sm font-semibold px-3 py-1 rounded-full" : "bg-indigo-900 text-indigo-400 text-sm font-semibold px-3 py-1 rounded-full"}>
                    A Frontend-Only React Project
                </span>
                <h1 className={theme === 'light' ? "text-4xl md:text-6xl font-extrabold mt-6 mb-4 text-slate-900" : "text-4xl md:text-6xl font-extrabold mt-6 mb-4 text-white"}>
                    User Management System
                </h1>
                <p className={theme === 'light' ? "text-lg md:text-xl max-w-3xl mx-auto text-slate-600" : "text-lg md:text-xl max-w-3xl mx-auto text-slate-400"}>
                    A project-based learning guide to master core and advanced React concepts...
                </p>
                <div className="mt-10 flex justify-center gap-4">
                    <Link to="/dashboard" className="bg-indigo-600 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-indigo-700 transition-transform transform hover:scale-105">
                        Go to Dashboard
                    </Link>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={theme === 'light' ? "bg-white text-slate-700 font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-slate-100 transition-transform transform hover:scale-105" : "bg-slate-800 text-slate-300 hover:bg-slate-700 font-semibold px-8 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"}>
                        View on GitHub
                    </a>
                </div>
            </main>

            <section id="features" className={theme === 'light' ? "py-20 bg-white transition-colors duration-300" : "py-20 bg-slate-800 transition-colors duration-300"}>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className={theme === 'light' ? "text-3xl md:text-4xl font-bold text-slate-900" : "text-3xl md:text-4xl font-bold text-white"}>Core Features</h2>
                        <p className={theme === 'light' ? "text-lg text-slate-500 mt-2" : "text-lg text-slate-400 mt-2"}>Built to demonstrate real-world application functionality.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((feature, index) => (
                            <div key={index} className={theme === 'light' ? "bg-slate-50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow" : "bg-slate-800/50 p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"}>
                                {feature.icon}
                                <h3 className={theme === 'light' ? "text-xl font-bold mb-2 text-slate-900" : "text-xl font-bold mb-2 text-white"}>{feature.title}</h3>
                                <p className={theme === 'light' ? "text-slate-600" : "text-slate-400"}>{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section id="tech-stack" className="py-20">
                 <div className="container mx-auto px-6 text-center">
                    <h2 className={theme === 'light' ? "text-3xl md:text-4xl font-bold text-slate-900" : "text-3xl md:text-4xl font-bold text-white"}>Powered by a Modern Tech Stack</h2>
                    <p className={theme === 'light' ? "text-lg text-slate-500 mt-2 mb-10" : "text-lg text-slate-400 mt-2 mb-10"}>Using industry-standard tools for a fast and reliable developer experience.</p>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                        {techStack.map((tech) => (
                            <div key={tech} className={theme === 'light' ? "bg-white px-5 py-2 rounded-full shadow-md text-slate-700 font-semibold" : "bg-slate-700 px-5 py-2 rounded-full shadow-md text-slate-200 font-semibold"}>
                                {tech}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};