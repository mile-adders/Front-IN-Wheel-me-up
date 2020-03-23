/* eslint-disable no-unused-vars */
import React from 'react';
// import your path to your class;
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import CarRentForm from '../carRentForm/car-rent-form.js';
import CarCompanyForm from '../carCompanyForm/car-company-form.js';
import LoggerHelp from '../auth/context.js';
import SignIn from '../logIn/login.js';
import SignUp from '../signUp/signup.js';

import './app.scss';


const App = () => {
  return (
    <>
      <Header />
      < LoggerHelp>
        <h1> hi</h1>
        <SignUp />
        <SignIn />
      </LoggerHelp>
      <CarRentForm />
      <CarCompanyForm />
      <Footer />
    </>
  );
};

export default App;