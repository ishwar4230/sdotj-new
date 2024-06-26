import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./logoutstyle.css";
// class logoutpage extends React.Component {
//  

  const Logoutpage=()=> {

    const navigate=useNavigate();
    const handleLogout = () => {
          // Clear the email from localStorage
          localStorage.removeItem('email');
           alert('Logged out successfully');
          navigate("/");
         };
    return (
      <div>
        <h1>Logout Page</h1>
        <p>Click the button below to logout.</p>
        <button onClick={handleLogout} className='logout-button'>Logout</button>
      </div>
    );
  }


export default Logoutpage;
