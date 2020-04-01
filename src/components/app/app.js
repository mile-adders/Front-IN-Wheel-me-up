/* eslint-disable no-unused-vars */
import React ,{ useContext, useEffect } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import LoggerHelp from '../auth/context.js';
import loggerContext  from '../auth/context.js'


import './app.scss';
import MainPage from '../mainPage/mainPage.js';
import HomePage from '../homePage/homepage.js'
import CarCompanyForm from '../rentCar/rentCar.js'
import BookingForm from '../bookingCar/bookingCar.js';
import NavBar from '../navBar/navBar.js'

const App = ( props) => {
 
  return (
    <>

      <LoggerHelp>
          <div className="App">
            <h1> hi</h1>
            <HomePage />
            <MainPage />
         </div>

      </LoggerHelp>



    </>
      );
  
};

export default App;