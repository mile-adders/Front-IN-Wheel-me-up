/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';


const NavBar = (props) => {

  return (
    
    <nav className="nav-wrapper">
      <div className="container">
        <a href="/" className="brand-logo"><h4>Wheel-Me-Up</h4></a>
      </div>
      <ul className="right" >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Log-In</Link></li>
        <li><Link to="/signup">Sign-Up</Link></li>
      </ul>
    </nav>
  );

};

export default withRouter(NavBar);