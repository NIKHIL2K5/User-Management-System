import React, { useState } from 'react';
import AllUsers from '../components/AllUsers';
import EditUsers from '../components/EditUsers';
import { UserProvider } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContex'; 

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('all');
  const { theme } = useTheme();

  // To keep the button logic clean, we define class strings based on the theme first.
  const activeButtonClass = theme === 'light' 
    ? 'bg-indigo-100 text-indigo-700' 
    : 'bg-gray-700 text-white';
  
  const inactiveButtonClass = theme === 'light'
    ? 'hover:bg-slate-200'
    : 'hover:bg-gray-700';

  return (
    <UserProvider>
      <div className="flex">
        <aside 
          className={
            theme === 'light'
            ? "w-64 bg-slate-100 text-slate-800 min-h-screen flex flex-col p-6 transition-colors duration-300"
            : "w-64 bg-gray-900 text-gray-100 min-h-screen flex flex-col p-6 transition-colors duration-300"
          }
        >
          <h1 className="text-2xl font-bold mb-10 whitespace-nowrap">User Management</h1>
          <nav className="flex flex-col space-y-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`font-semibold p-2 rounded-md text-left transition-colors ${
                activeTab === 'all' ? activeButtonClass : inactiveButtonClass
              }`}
            >
              All Users
            </button>
            <button
              onClick={() => setActiveTab('edit')}
              className={`font-semibold p-2 rounded-md text-left transition-colors ${
                activeTab === 'edit' ? activeButtonClass : inactiveButtonClass
              }`}
            >
              Edit Users
            </button>
          </nav>
          <div 
            className={
              theme === 'light'
              ? "mt-auto pt-6 border-t border-gray-200"
              : "mt-auto pt-6 border-t border-gray-700"
            }
          >
            <p 
              className={
                theme === 'light'
                ? "text-sm text-gray-500"
                : "text-sm text-gray-400"
              }
            >
              &copy; Created By NIKHIL
            </p>
          </div>
        </aside>

        <main 
          className={
            theme === 'light'
            ? "flex-grow p-6 bg-gray-100 transition-colors duration-300"
            : "flex-grow p-6 bg-slate-800 transition-colors duration-300"
          }
        >
          {activeTab === 'all' && <AllUsers />}
          {activeTab === 'edit' && <EditUsers />}
        </main>
      </div>
    </UserProvider>
  );
}