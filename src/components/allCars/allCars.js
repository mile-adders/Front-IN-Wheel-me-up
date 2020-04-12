/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import LoggerHelp from '../auth/context.js';

import Cards from '../contactUs/cards.js';
import CarRent from '../rentCar/rentCar.js';
import BookingForm from '../bookingCar/bookingCar.js';
import NavBar from '../navBar/navBar.js';
import LogOut from '../logout/logout.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

const API = 'https://wheel-me-up-m.herokuapp.com';

function AllCars() {
  const [product, setProduct] = useState({
    name:'Cars',
    price: 100,
    productBy: 'Mile Adders',

  });
  const [showCars, setShowCar] = useState([]);
  const [visible, setVisible] = useState(false);

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
    setVisible(true);
  };
  useEffect(() => {
    Shows();
  });

  let cars =  
  <div>
    <h2 className='allCars'>All Cars Available</h2>
    <div className='showCars'>
      {
        showCars.length > 0 && showCars.map(car => {
          return (<div key={car.id}>
            <div className='cars'>
              <div className='eachCar'>
                <img className='carImg' src={car.carImage_URL} alt='car'/>
                <div className='carInfo'>{car.carName}</div>
                <div className='carInfo'>Brand : {car.brand}</div>
                <div className='carInfo'>Type : {car.carType} </div>
                <div className='carInfo'>year : {car.year}</div>
                <div className='carInfo'>Date Available :{car.dateAvailable}</div>
                <div className='carInfo'>Price for day : {car.priceForRent}</div>
                <div className='carInfo'>Pick up location : {car.pickupLocation}</div>
                <StripeCheckout  stripeKey={process.env.REACT_APP_PKEY} token="" amount={100 * car.priceForRent} name="Pay with Card"><button className='strip' 
                  style={{
                    color: '#191919',
                    background: 'rgba(222,222,222,0.8)',
                    marginTop: '2vw',
                    marginBottom: '2vw',
                    border: 'none',
                    height: '2vw',
                    width: '10vw',
                    fontFamily: 'Open Sans Condensed',
                    fontSize: '1.2vw',
                    fontWeight: 'bold',
                  }}>Pay With Card</button></StripeCheckout>
              </div>
            </div>
          </div>);
        })
      }
    </div>;
  </div>;

  let shownCars = (visible) ? cars : null;
  return (
    <>
      <Header />
      {shownCars}
      <Footer />
    </>

  );
}

export default AllCars;
