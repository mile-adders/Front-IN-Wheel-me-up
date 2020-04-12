/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import  { loggerContext } from '../auth/context.js';
import LoggerHelp from '../auth/context.js';


import './app.scss';
import MainPage from '../mainPage/mainPage.js';
import HomePage from '../homePage/homepage.js';
import CarCompanyForm from '../rentCar/rentCar.js';
import AllCars from '../allCars/allCars.js';
import BookingForm from '../bookingCar/bookingCar.js';
import NavBar from '../navBar/navBar.js';
import SignIn from '../signIn/signIn.js';
import SignUp from '../signUp/signup.js';
import MoreQuestions from '../MoreQuestions/MoreQuestions.js';

import Cards from '../contactUs/cards.js';
import CarRent from '../rentCar/rentCar.js';
import LogOut from '../logout/logout.js';
import Header from '../Header/Header.js';

const App = (props) => {

  return (
    <>

      <LoggerHelp>
        <div className="App">

          <Route exact path='/'>
            <HomePage />
          </Route>
          <Route exact path='/login'>
            <SignIn />
          </Route>

          <Route exact path='/askUs'>
            <MoreQuestions />
          </Route>

          <Route exact path='/signup'>
            <SignUp />
          </Route>


          <Route exact path='/AllCars'>
            <AllCars /> 
          </Route>

          <Route exact path= '/contactUs'>
            <Cards /> 
         
          </Route>

          <Route exact path= '/carRent'>
            <CarRent /> 
         
          </Route>

          <Route exact path='/logout'>
            <HomePage />
          </Route>

          <Route  path= '/bookingForm'>
            <BookingForm /> 
         
          </Route>
        </div>
      </LoggerHelp>
    </>
  );

};

export default App;
