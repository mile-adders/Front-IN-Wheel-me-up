/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


const NavBar = (props) => {

  return (
    <nav className="nav-wrapper red ">
      <div className="container">
        <a href="/" className="brand-logo"><h4>Wheel-Me-Up</h4></a>
      </div>
      <ul className="right" >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/aboutus">About-Us</Link></li>
        <li><Link to="/contactus">Contact-US</Link></li>
        <li><Link to="/dashboard">DashBoard</Link></li>
        <li><Link to="/bookingform">BookingForm</Link></li>
        <li><Link to="/login">LogIn</Link></li>
        <li><Link to="/signup">SignUp</Link></li>
      </ul>
    </nav>
  );

};

export default withRouter(NavBar);