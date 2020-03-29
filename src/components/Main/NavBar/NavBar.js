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
        <li><Link to="/aboutUs">About-Us</Link></li>
        <li><Link to="/AskUs">Ask-Us</Link></li>
        <li><Link to="/carRent">Car-Rent</Link></li>
        <li><Link to="/bookingform">Booking-Form</Link></li>
        <li><Link to="/logout">LogOut</Link></li>
        {/* <li><Link to="/signup">Sign-Up</Link></li> */}
      </ul>
    </nav>
  );

};

export default withRouter(NavBar);