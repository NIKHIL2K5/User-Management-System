import React from 'react';
import { useTheme } from '../contexts/ThemeContex'; // Import the theme hook

export const UserProfile = () => {
  const { theme } = useTheme(); // Get the current theme

  const user = {
    name: 'NIKHIL',
    id: 'A001',
    email: 'nikhil@example.com'
  };

  return (
    <div 
      className={
        theme === 'light'
        ? "flex justify-center items-center h-screen bg-gray-100 rounded-2xl"
        : "flex justify-center items-center h-screen bg-slate-900 rounded-2xl"
      }
    >
      <div 
        className={
          theme === 'light'
          ? "w-full max-w-sm bg-white rounded-lg shadow-xl p-8 text-center"
          : "w-full max-w-sm bg-slate-800 rounded-lg shadow-xl p-8 text-center"
        }
      >
        <img
          className={
            theme === 'light'
            ? "w-24 h-24 rounded-full border-4 border-gray-300 mx-auto mb-4"
            : "w-24 h-24 rounded-full border-4 border-gray-600 mx-auto mb-4"
          }
          src={`https://api.dicebear.com/8.x/initials/svg?seed=${user.name}`}
          alt="User Avatar"
        />
        
        <h1 
          className={
            theme === 'light'
            ? "text-3xl font-bold text-gray-900"
            : "text-3xl font-bold text-white"
          }
        >
          {user.name}
        </h1>
        <p 
          className={
            theme === 'light'
            ? "text-md text-gray-500 mt-1"
            : "text-md text-gray-400 mt-1"
          }
        >
          {user.email}
        </p>
        
        <div 
          className={
            theme === 'light'
            ? "mt-6 bg-gray-100 p-3 rounded-lg"
            : "mt-6 bg-slate-700 p-3 rounded-lg"
          }
        >
          <p 
            className={
              theme === 'light'
              ? "text-lg font-semibold text-gray-700"
              : "text-lg font-semibold text-gray-200"
            }
          >
            ID: {user.id}
          </p>
        </div>
      </div>
    </div>
  );
};