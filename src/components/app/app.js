/* eslint-disable no-unused-vars */
import React from 'react';
// import your path to your class;
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import BookingForm from '../bookingForm/booking-form.js';
import CarCompanyForm from '../carCompanyForm/car-company-form.js';
import LoggerHelp from '../auth/context.js';
import SignIn from '../logIn/login.js';
import SignUp from '../signUp/signup.js';
import Video from '../Video/Video.js';
import Facebook from '../Facebook.js';
import Benefits from '../Benefits/Benefits.js';
import Testimonials from '../Testimonials/Testimonials.js';
import Google from '../Google.js';
import FAQ from '../FAQ/FAQ.js';
import MoreQuestions from '../MoreQuestions/MoreQuestions';
import './app.scss';


const App = () => {
  return (
    <>
      <Header />
      {/* < LoggerHelp>
        <h1> hi</h1>
        <SignUp />
        <SignIn />
      </LoggerHelp> */}
      <Video />
      <Benefits /> 
      {/* the photo slide show */}
      <Testimonials />
      <FAQ />
      <MoreQuestions />
      {/* <BookingForm />
      <CarCompanyForm /> */}
      {/* <Facebook />
        <Google /> */}
      <Footer />
    </>
  );
};

export default App;
