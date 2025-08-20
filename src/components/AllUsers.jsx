import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContex';

function AllUsers() {
    const { users } = useContext(UserContext);
    const { theme } = useTheme();
    const [searchTerm, setSearchTerm] = useState('');

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const lightTheme = theme === 'light';

    return (
        <div className="w-full">
            <h1
                className={
                    lightTheme
                        ? "text-3xl font-bold mb-6 text-gray-800"
                        : "text-3xl font-bold mb-6 text-white"
                }
            >
                All Users
            </h1>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search users by name..."
                    className={
                        lightTheme
                            ? "border border-gray-300 bg-white text-gray-900 p-2 rounded w-full shadow-sm placeholder-gray-400"
                            : "border border-gray-600 bg-slate-700 text-white p-2 rounded w-full shadow-sm placeholder-gray-400"
                    }
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <div
                className={
                    lightTheme
                        ? "bg-white shadow-md rounded-lg"
                        : "bg-slate-800 shadow-md rounded-lg"
                }
            >
                <ul
                    className={
                        lightTheme
                            ? "divide-y divide-gray-200"
                            : "divide-y divide-gray-700"
                    }
                >
                    {filteredUsers.map((user) => (
                        <li
                            key={user.id}
                            className={
                                lightTheme
                                    ? "p-4 hover:bg-gray-50 flex justify-between items-center"
                                    : "p-4 hover:bg-slate-700 flex justify-between items-center"
                            }
                        >
                            <div>
                                <p
                                    className={
                                        lightTheme
                                            ? "text-lg font-medium text-gray-900"
                                            : "text-lg font-medium text-white"
                                    }
                                >
                                    {user.name}
                                </p>
                                <p
                                    className={
                                        lightTheme
                                            ? "text-sm text-gray-500"
                                            : "text-sm text-gray-400"
                                    }
                                >
                                    {user.email}
                                </p>
                            </div>
                            <span
                                className={
                                    lightTheme
                                        ? "text-xs font-semibold bg-gray-200 text-gray-700 rounded-full px-3 py-1"
                                        : "text-xs font-semibold bg-gray-600 text-gray-200 rounded-full px-3 py-1"
                                }
                            >
                                ID: {user.id}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default AllUsers;