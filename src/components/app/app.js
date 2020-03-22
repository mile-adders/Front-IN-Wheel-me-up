/* eslint-disable no-unused-vars */
import React from 'react';
// import your path to your class;
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import CarRentForm from '../carRentForm/car-rent-form.js';
import CarCompanyForm from '../carCompanyForm/car-company-form.js';
import './app.scss';

export default function App (){
  return (
    <>
      <Header />
      <CarRentForm />
      <CarCompanyForm />
      <Footer />
    </>
  );
}

