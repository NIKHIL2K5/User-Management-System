import React, { useState, useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useTheme } from '../contexts/ThemeContex';

function EditUsers() {
  const { users, setUsers } = useContext(UserContext);
  const { theme } = useTheme(); 
  const [formData, setFormData] = useState({ id: null, name: '', email: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

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

  return (
    <div className="p-6 w-full">
      <h1 className={theme === 'light' ? "text-3xl font-bold mb-6 text-gray-800" : "text-3xl font-bold mb-6 text-white"}>
        Edit Users
      </h1>

      <div className={theme === 'light' ? "mb-6 p-4 bg-white rounded-lg shadow-md flex gap-4" : "mb-6 p-4 bg-slate-800 rounded-lg shadow-md flex gap-4"}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} className={theme === 'light' ? "border-black-300 bg-white text-gray-900 p-2 rounded w-1/3" : "border-black-600 bg-slate-700 text-white p-2 rounded w-1/3"} />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className={theme === 'light' ? "border-black-300 bg-white text-gray-900 p-2 rounded w-1/3" : "border-black-600 bg-slate-700 text-white p-2 rounded w-1/3"} />
        {isEditing ? (
          <button onClick={handleUpdate} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Update
          </button>
        ) : (
          <button onClick={handleAdd} className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            Add
          </button>
        )}
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search users by name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className={theme === 'light' ? "border border-gray-300 bg-white text-gray-900 p-2 rounded w-full shadow-sm" : "border border-gray-600 bg-slate-700 text-white p-2 rounded w-full shadow-sm"}
        />
      </div>

      <div className={theme === 'light' ? "bg-white shadow-md rounded-lg" : "bg-slate-800 shadow-md rounded-lg"}>
        <ul className={theme === 'light' ? "divide-y divide-gray-200" : "divide-y divide-gray-700"}>
          {filteredUsers.map((user) => (
            <li key={user.id} className={theme === 'light' ? "p-4 flex justify-between items-center hover:bg-gray-50" : "p-4 flex justify-between items-center hover:bg-slate-700"}>
              <div>
                <p className={theme === 'light' ? "font-medium text-gray-900" : "font-medium text-white"}>{user.name}</p>
                <p className={theme === 'light' ? "text-sm text-gray-500" : "text-sm text-gray-400"}>{user.email}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => startEdit(user)} className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded">
                  Edit
                </button>
                <button onClick={() => handleDelete(user.id)} className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">
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

// import './style.css'
// import {useState} from 'react'


// const UserList=[
//   {
//     "employeeID": 101,
//     "fullName": "Alice Johnson",
//     "jobTitle": "Marketing Specialist",
//     "department": "Marketing",
//     "email": "alice.j@example.com",
//     "hireDate": "2022-03-12",
//     "salary": 68000,
//     "isActive": true
//   },
//   {
//     "employeeID": 102,
//     "fullName": "Bob Miller",
//     "jobTitle": "Sales Representative",
//     "department": "Sales",
//     "email": "bob.m@example.com",
//     "hireDate": "2021-07-22",
//     "salary": 72000,
//     "isActive": true
//   },
//   {
//     "employeeID": 103,
//     "fullName": "Charlie Davis",
//     "jobTitle": "Accountant",
//     "department": "Finance",
//     "email": "charlie.d@example.com",
//     "hireDate": "2023-09-01",
//     "salary": 75000,
//     "isActive": true
//   },
//   {
//     "employeeID": 104,
//     "fullName": "Diana Garcia",
//     "jobTitle": "HR Coordinator",
//     "department": "Human Resources",
//     "email": "diana.g@example.com",
//     "hireDate": "2020-05-18",
//     "salary": 61000,
//     "isActive": false
//   }
// ]

// function EditUsers(){
//   const [deleteUsersList,setdeleteUsersList]=useState(UserList)
//   const [searchUsers,setsearchUsers]=useState("")

//   const searchUsersList= (event) =>{
//     setsearchUsers(event.target.value)
//     console.log(event.target.value.toLowerCase())
//   }

//   const searchedUsersList=deleteUsersList.filter((users) => users.fullName.toLowerCase().includes(searchUsers.toLowerCase()))

//   const deleteUsers = (key) =>{
//     console.log("delete")
//   }



//   return(
//     <div>
//       <h1>EditUsers List</h1>
//       <div >
//         <span className="m-2">Search Users : </span>
//         <input className="m-2 border border-gray-600" placeholder='Search Users' onChange={searchUsersList} value={searchUsers}></input>
//       </div>
//       <ul>
//        {searchedUsersList.map((users) => (
//           <li key={users.employeeID}>
//             <hr />
//             <p>Name : {users.fullName}</p>
//             <p>Email : {users.email}</p>
//             <div>
//               <button className="bg-red-600 p-2 m-2 rounded-xl text-white font-bold" onclick={() => (deleteUsers(users.employeeID))}>Delete User</button>
//             </div>
//             <hr/>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// export default EditUsers;