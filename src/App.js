/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter, Router,  Redirect, Route } from 'react-router-dom';
import Home from './components/Home.js';
import AboutUs from './components/About-Us.js';
import ContactUs from './components/Contact-us.js';
import DashBoard from './components/Dash-board.js';
import BookingForm from './components/bookingForm/booking-form.js';
import Login from './components/logIn/login.js';
import Signup from './components/signUp/signup.js';
import NavBar from './components/NavBar.js';

import './components/app/app.scss';

const oAuthApp = () => {

  return (
    <BrowserRouter>
      <div className="App">
      <NavBar />
        <Route  exact path='/' component={Home}/>
        <Route path='/aboutus' component={AboutUs} />
        <Route path='/contactus' component={ContactUs} />
        <Route path='/dashboard' component={DashBoard} />
        <Route path='/bookingform' component={BookingForm} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />

      </div>

    </BrowserRouter>
  );
}

export default oAuthApp;