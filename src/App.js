/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter, Router, Redirect, Route } from 'react-router-dom';
import Home from './components/homePage/homepage.js';
import Cards from './components/about-us/cards.js';
import AskUs from './components/MoreQuestions/MoreQuestions.js';
import CarRent from './components/rentCar/rentCar.js';
import BookingForm from './components/bookingCar/bookingCar.js';
import NavBar from './components/navBar/navBar.js';
import LoggerHelp from './components/auth/context.js';
import LogOut from './components/logout/logout.js';
import Loading from './components/loadingvideo/loadingvideo.js';

const oAuthApp = () => {



  return (
    <LoggerHelp>
      <BrowserRouter>
        <div className="App">         
          <NavBar />
          <Route exact path='/m' component={Home} />
          <Route path='/aboutUs' component={Cards} />
          <Route path='/AskUs' component={AskUs} />
          <Route path='/carRent' component={CarRent} />
          <Route path='/bookingform' component={BookingForm} />
          <Route path='/logout' component={LogOut} />         
        </div>
      </BrowserRouter>
    </LoggerHelp>
  );
};

