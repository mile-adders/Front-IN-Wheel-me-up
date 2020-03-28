/* eslint-disable no-unused-vars */
import React, { Component} from 'react';
import { BrowserRouter, Router,  Redirect, Route } from 'react-router-dom';
import Home from './components/Main/Home/Home.js';
import AboutUs from './components/Main/About-Us/About-Us.js';
import AskUs from './components/Main/Ask-Us/Ask-Us.js';
import CarRent from './components/Main/car-Rent/Car-Rent.js';
import BookingForm from './components/bookingForm/booking-form.js';
import NavBar from './components/Main/NavBar/NavBar.js';
import LoggerHelp from './components/auth/context.js';
import LogOut from './components/Main/Logout/LogOut.js';


const oAuthApp = () => {



  return (
       <LoggerHelp>
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route  exact path='/m' component={Home}/>
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/AskUs' component={AskUs} />
        <Route path='/carRent' component={CarRent} />
        <Route path='/bookingForm' component={BookingForm} />
        <Route path='/logout' component={LogOut} />
      </div>

    </BrowserRouter>
        </LoggerHelp>
  );

};

export default oAuthApp;