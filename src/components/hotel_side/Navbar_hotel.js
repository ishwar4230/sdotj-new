import React, { useState } from 'react';
import "./navstyle.css"
import { NavLink } from 'react-router-dom';

function Navbar_hotel() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const userEmail = localStorage.getItem('email');

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <div className={`menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <NavLink to="/">Home</NavLink>
        {!userEmail ? (
          <>
            <NavLink to="/login">Log In</NavLink>
           
          </>
        ) : (
          <>
            <NavLink to="/updatehotel">Update Details</NavLink>
            <NavLink to="/dashboard">My Profile</NavLink>
            <NavLink to="/requests">Requests</NavLink>
            <NavLink to="/logout">Logout</NavLink>
          </>
        )}
      </div>
      <div className="mobile-menu-icon" onClick={toggleMobileMenu}>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
        <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
      </div>
    </nav>
  );
}

export default Navbar_hotel;
