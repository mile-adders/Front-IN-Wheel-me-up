import React, { Component , useEffect, useContext} from 'react';
import { Link, withRouter } from 'react-router-dom';
import { loggerContext } from '../auth/context.js'
import MainPage from '../mainPage/mainPage.js';

const NavBar = (props) => {
    let useLogger = useContext(loggerContext);
 
    if(!useLogger.logState){

        return (
          <nav className="nav-wrapper red ">
            <div className="container">
              <a href="/" className="brand-logo"><h4>Wheel-Me-Up</h4></a>
            </div>
            <ul className="right" >
              <li><Link to="/">Home </Link></li>
              <li><Link to="/login">Log-In</Link></li>
              <li><Link to="/signup">Sign-Up</Link></li>
            </ul>
          </nav>
        );
    }
    else{

        
        
        return (
            <nav className="nav-wrapper red ">
          <div className="container">
            <a href="/" className="brand-logo"><h4>Wheel-Me-Up</h4></a>
          </div>
          <ul className="right" >
            <li><Link to="/mainPage">main</Link></li>
            <li><Link to="/contactUs">contact-Us</Link></li>
            <li><Link to="/carRent">Car-Rent</Link></li>
            <li><Link to="/bookingForm">Booking-Form</Link></li>
            <li><Link to="/logout">LogOut</Link></li>
          </ul>
        </nav>
      );
    }    
};

export default withRouter(NavBar);