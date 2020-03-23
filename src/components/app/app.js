/* eslint-disable no-unused-vars */
import React from 'react';
// import { Route, Switch } from 'react-router-dom'

// import your path to your class;
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import BookingForm from '../bookingForm/booking-form.js';
import CarCompanyForm from '../carCompanyForm/car-company-form.js';
import LoggerHelp from '../auth/context.js';
import SignIn from '../logIn/login.js';
import SignUp from '../signUp/signup.js';
import Main from '../HomePage/entryInfo.js'
// import HomePage from '../HomePage'
import './app.scss';
import HomePage from '../HomePage/homepage.js';


const App = () => {
  return (
    <>
       {/* <Switch>
      {/* <Route exact path="/mm" component={SignUp} /> */}
      {/* <Route path="/:id" component={UserPage} /> */}
    {/* </Switch> */} */}
      {/* <Header /> */}
      < LoggerHelp>
        {/* <h1> hi</h1> */}
        {/* <button onClick={       }> SignIn</button> */}
        {/* <SignIn /> */}
        {/* <Main /> */}
        <HomePage />

        {/* <SignUp /> */}
      </LoggerHelp>
      {/* <BookingForm />
      <CarCompanyForm />
      <Footer /> */}
    </>
  );
};

export default App;
