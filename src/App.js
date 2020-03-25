/* eslint-disable no-unused-vars */
import React, { Component} from 'react';
import { BrowserRouter, Router,  Redirect, Route } from 'react-router-dom';
import Home from './components/Home.js';
import AboutUs from './components/About-Us.js';
import AskUs from './components/Ask-Us.js';
import CarRent from './components/Car-Rent.js';
import BookingForm from './components/bookingForm/booking-form.js';
import Login from './components/logIn/login.js';
import Signup from './components/signUp/signup.js';
import NavBar from './components/NavBar.js';


const oAuthApp = () => {



  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Route  exact path='/' component={Home}/>
        <Route path='/aboutUs' component={AboutUs} />
        <Route path='/AskUs' component={AskUs} />
        <Route path='/carRent' component={CarRent} />
        <Route path='/bookingForm' component={BookingForm} />
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />


      </div>

    </BrowserRouter>
  );

};

export default oAuthApp;