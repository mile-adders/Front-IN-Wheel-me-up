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
import SignIn from '../signIn/signIn.js'
import SignUp from '../signUp/signUp.js';

import Cards from '../contactUs/cards.js';
// import AskUs from './components/Main/Ask-Us/Ask-Us.js';
import CarRent from '../rentCar/rentCar.js';
import LogOut from '../logout/logout.js';
import Header from '../Header/Header.js';

const App = (props) => {

  // const useLogger = useContext(loggerContext);

  // console.log('app.js' , useLogger.logState);
  return (
    <>

      <LoggerHelp>
        <div className="App">

          <Route exact path='/login'>
            <SignIn />
          </Route>

          <Route exact path='/signup'>
            <SignUp />
          </Route>

          <Route exact path='/'>
            <HomePage />
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


        <Route  path= '/bookingForm'>
         <BookingForm /> 
         
        </Route>

          {/* <BookingForm /> */}
          {/* <AllCars /> */}
          {/* <MainPage /> */}

          {/* < CarCompanyForm /> */}
        </div>

      </LoggerHelp>



    </>
  );

};

export default App;
// import React from 'react';
// import { BrowserRouter , Route } from 'react-router-dom';
// import LoggerHelp from '../auth/context.js';

// import HomePage from '../HomePage/HomePage/homepage.js';

// import './app.scss';
// const App = () => {
//   return (
//     <>
//       <LoggerHelp>
//         <BrowserRouter>
//           <div className="App">
//             <Route exact path='/' component={HomePage} />
//           </div>

//         </BrowserRouter>
//       </LoggerHelp>
//     </>
//   );
// };

// export default App;
