import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  
  const [users, setUsers] = useState([]);
  const [theme,setTheme] = useState("light")
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data);
      } catch (e) {
        setError(e.message); 
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []); 
  const value = { users, setUsers };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};