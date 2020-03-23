/* eslint-disable no-unused-vars */
/* eslint-disable no-unused-vars */
import React from 'react';
// import your path to your class;
import Header from '../header.js';
import Footer from '../footer.js';

import './app.scss';
import BookingCar from '../booking-form.js';

export default function App (){
  return (
    <>
      <Header />
      <BookingCar />
      <Footer />
    </>
  );
}