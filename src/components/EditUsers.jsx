import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContex';

function EditUsers() {
    const { users, setUsers } = useContext(UserContext);
    const { theme } = useTheme();
    const [formData, setFormData] = useState({ id: null, name: '', email: '' });
    const [isEditing, setIsEditing] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const lightTheme = theme === 'light';

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAdd = () => {
        if (!formData.name || !formData.email) return;
        const newUser = { id: Date.now(), name: formData.name, email: formData.email };
        setUsers([...users, newUser]);
        setFormData({ id: null, name: '', email: '' });
    };

    const handleDelete = (id) => {
        setUsers(users.filter((user) => user.id !== id));
    };

    const startEdit = (user) => {
        setIsEditing(true);
        setFormData(user);
    };

    const handleUpdate = () => {
        setUsers(users.map((u) => (u.id === formData.id ? formData : u)));
        setIsEditing(false);
        setFormData({ id: null, name: '', email: '' });
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const inputClasses = lightTheme
        ? "border border-gray-300 bg-white text-gray-900 p-2 rounded w-full shadow-sm"
        : "border border-gray-600 bg-slate-700 text-white p-2 rounded w-full shadow-sm";

    return (
        <div className="w-full">
            <h1 className={lightTheme ? "text-3xl font-bold mb-6 text-gray-800" : "text-3xl font-bold mb-6 text-white"}>
                Edit Users
            </h1>

            <div className={`mb-6 p-4 rounded-lg shadow-md ${lightTheme ? 'bg-white' : 'bg-slate-800'}`}>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                    <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className={`${inputClasses} md:flex-1`} />
                    <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={`${inputClasses} md:flex-1`} />
                    {isEditing ? (
                        <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full md:w-auto">
                            Update
                        </button>
                    ) : (
                        <button onClick={handleAdd} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded w-full md:w-auto">
                            Add
                        </button>
                    )}
                </div>
            </div>

            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search users by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={inputClasses}
                />
            </div>

            <div className={lightTheme ? "bg-white shadow-md rounded-lg" : "bg-slate-800 shadow-md rounded-lg"}>
                <ul className={lightTheme ? "divide-y divide-gray-200" : "divide-y divide-gray-700"}>
                    {filteredUsers.map((user) => (
                        <li key={user.id} className={`p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 ${lightTheme ? 'hover:bg-gray-50' : 'hover:bg-slate-700'}`}>
                            <div>
                                <p className={lightTheme ? "font-medium text-gray-900" : "font-medium text-white"}>{user.name}</p>
                                <p className={lightTheme ? "text-sm text-gray-500" : "text-sm text-gray-400"}>{user.email}</p>
                            </div>
                            <div className="flex gap-2 flex-shrink-0">
                                <button onClick={() => startEdit(user)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded text-sm">
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(user.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm">
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default EditUsers;