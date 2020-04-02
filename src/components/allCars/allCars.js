/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
// import { BrowserRouter , Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
// import FrequentlyAskedQuestions from '../fAQ/fAQ.js'
import LoggerHelp from '../auth/context.js';

import Cards from '../contactUs/cards.js';
// import AskUs from './components/Main/Ask-Us/Ask-Us.js';
import CarRent from '../rentCar/rentCar.js';
import BookingForm from '../bookingCar/bookingCar.js';
import NavBar from '../navBar/navBar.js';
import LogOut from '../logout/logout.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

const API = 'https://wheel-me-up-m.herokuapp.com';

function AllCars() {
  const [showCars, setShowCar] = useState([]);

  let Shows = async () => {
    let getCars = await fetch(`${API}/api/v1/car-company`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'get',
      mode: 'cors',
      cache: 'no-cache',
      body: null,
    });
    let data = JSON.parse(await getCars.text());
    setShowCar(data);
    console.log('data', data);
    console.log('showcars', showCars);


  };
  useEffect(() => {
    Shows();
  }, []);


  
  return (
    <>
      <Header />
      <div className='showCars'>
        <h2 className='allCars'>All Cars Available</h2>
        {
          showCars.length > 0 && showCars.map(car => {
            return (<div key={car.id}>
              <div className='cars'>
                <div className='eachCar'>
                  <img className='carImg' src={car.carImage_URL} />
                  <div className='carInfo'>{car.carName}</div>
                  <div className='carInfo'>Brand : {car.brand}</div>
                  <div className='carInfo'>Type : {car.carType} </div>
                  <div className='carInfo'>year : {car.year}</div>
                  <div className='carInfo'>Date Available :{car.dateAvailable}</div>
                  <div className='carInfo'>Price for day : {car.priceForRent}</div>
                  <div className='carInfo'>Pick up location : {car.pickupLocation}</div>
                  <button className='rentButton'>Rent!</button>
                </div>
              </div>
            </div>);
          })
        }
      </div>
    </>

  );
}

export default AllCars;
