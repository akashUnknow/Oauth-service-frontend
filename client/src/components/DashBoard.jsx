import React, { useEffect } from 'react'
import axios from 'axios';

const DashBoard = () => {
    const[user,setUser]=React.useState({
        name:"User",
        email:"user@example.com"
    });
    useEffect(()=>{
       axios.get('http://localhost:5000/user-info', { withCredentials: true }).then((response)=>{
           setUser(response.data);
       }).catch((error)=>{
              console.error("There was an error fetching the user data!", error);
         });
    },[]);
  return (
    <div>
      <h1>Dashboard</h1>
      {user ? (<div>
        <p>Name:<strong> {user.name}</strong></p>
        <p>Email:<strong> {user.email}</strong></p>
      </div>) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default DashBoard
