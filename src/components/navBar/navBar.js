/* eslint-disable no-unused-vars */
import './navBar.js';
import React, { Component , useEffect, useContext} from 'react';
import { Link, withRouter , Redirect} from 'react-router-dom';
import { loggerContext } from '../auth/context.js';
import MainPage from '../mainPage/mainPage.js';

const NavBar = (props) => {
  let useLogger = useContext(loggerContext);

  let handleLogout = () => {
    useLogger.logOut();
    return  <Redirect to='/'  ></Redirect>;

  };

  if(!useLogger.logState){

    return (
      <nav className="nav-wrapper red ">
        <ul className="right">
          <li className='navElement'><Link to="/askUs">ask-Us</Link></li>
          <li className='navElement'><Link to="/signup">Sign-Up</Link></li>
          <li className='navElement'><Link to="/login">Log-In</Link></li>
          <li className='navElement'><Link to="/">Home </Link></li>
        </ul>
      </nav>
    );
  }
  else{

        
        
    return (
      <nav className="nav-wrapper red ">
        <ul className="right" >
          <button className='logOut' onClick={handleLogout}><Link to="/logout">logout</Link></button>
          <li className='navElement'><Link to="/contactUs">contact-Us</Link></li>
          <li className='navElement'><Link to="/askUs">ask-Us</Link></li>
          <li className='navElement'><Link to="/carRent">Car-Rent</Link></li>
          <li className='navElement'><Link to="/bookingForm">Booking-Form</Link></li>
        </ul>
      </nav>
    );
  }    
};

export default withRouter(NavBar);