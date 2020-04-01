import React, { useContext , useState, useEffect } from 'react';
// import { BrowserRouter , Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Redirect ,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import FrequentlyAskedQuestions from '../fAQ/fAQ.js'
import LoggerHelp from '../auth/context.js';
import { loggerContext } from '../auth/context.js';
import HomePage from '../homePage/homepage.js'

import Cards from '../contactUs/cards.js';
// import AskUs from './components/Main/Ask-Us/Ask-Us.js';
import CarRent from '../rentCar/rentCar.js';
import BookingForm from '../bookingCar/bookingCar.js';
import NavBar from '../navBar/navBar.js';
import LogOut from '../logout/logout.js';
import AllCars from '../allCars/allCars.js';
import Header from '../Header/Header.js';

const API = 'https://wheel-me-up-m.herokuapp.com'

function MainPage() {
 


  const useLogger = useContext(loggerContext);
  console.log('app.js' , useLogger.logState);

  return (
    <>
       <div>
         <Header />
       

      <AllCars />
      <BookingForm />
      <Cards />
      <CarRent />
         

           

        </div> 
      



    </>

  );
}

export default MainPage;