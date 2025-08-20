import React, { useState } from 'react';
import AllUsers from '../components/AllUsers';
import EditUsers from '../components/EditUsers';
import { UserProvider } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContex';

export default function Dashboard() {
    const [activeTab, setActiveTab] = useState('all');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const { theme } = useTheme();

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setIsSidebarOpen(false);
    };

    const lightTheme = theme === 'light';
    const activeButtonClass = lightTheme ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-700 text-white';
    const inactiveButtonClass = lightTheme ? 'hover:bg-slate-200' : 'hover:bg-gray-700';

    return (
        <UserProvider>
            <div className="relative min-h-screen md:flex">
                <div className="absolute top-4 left-4 z-20 md:hidden">
                    <button onClick={() => setIsSidebarOpen(!isSidebarOpen)} className={`p-2 rounded-md ${lightTheme ? 'bg-slate-200 text-slate-800' : 'bg-gray-800 text-gray-100'}`}>
                        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                <aside className={`fixed inset-y-0 left-0 w-64 p-6 flex flex-col transform transition-transform duration-300 ease-in-out z-30 md:relative md:translate-x-0 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} ${lightTheme ? 'bg-slate-100 text-slate-800' : 'bg-gray-900 text-gray-100'}`}>
                    <h1 className="text-2xl font-bold mb-10 whitespace-nowrap">User Management</h1>
                    <nav className="flex flex-col space-y-4">
                        <button onClick={() => handleTabClick('all')} className={`font-semibold p-2 rounded-md text-left transition-colors ${activeTab === 'all' ? activeButtonClass : inactiveButtonClass}`}>
                            All Users
                        </button>
                        <button onClick={() => handleTabClick('edit')} className={`font-semibold p-2 rounded-md text-left transition-colors ${activeTab === 'edit' ? activeButtonClass : inactiveButtonClass}`}>
                            Edit Users
                        </button>
                    </nav>
                    <div className={`mt-auto pt-6 border-t ${lightTheme ? 'border-gray-200' : 'border-gray-700'}`}>
                        <p className={`text-sm ${lightTheme ? 'text-gray-500' : 'text-gray-400'}`}>
                            &copy; Created By NIKHIL
                        </p>
                    </div>
                </aside>

                <main className={`flex-grow p-6 transition-colors duration-300 md:pl-8 ${lightTheme ? 'bg-gray-100' : 'bg-slate-900'}`}>
                    <div className="pt-12 md:pt-0">
                        {activeTab === 'all' && <AllUsers />}
                        {activeTab === 'edit' && <EditUsers />}
                    </div>
                </main>
            </div>
        </UserProvider>
    );
}