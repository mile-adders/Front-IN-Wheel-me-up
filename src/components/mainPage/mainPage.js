import React, { useState, useEffect } from 'react';
// import { BrowserRouter , Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FrequentlyAskedQuestions from '../fAQ/fAQ.js'
import LoggerHelp from '../auth/context.js';

import Cards from '../contactUs/cards.js';
// import AskUs from './components/Main/Ask-Us/Ask-Us.js';
import CarRent from '../rentCar/rentCar.js';
import BookingForm from '../bookingCar/bookingCar.js';
import NavBar from '../navBar/navBar.js';
import LogOut from '../logout/logout.js';

const API = 'https://wheel-me-up-m.herokuapp.com'

function MainPage() {
  const [showCars, setShowCar] = useState([]);
  
  let shows = async()=>{
    let getCars = await fetch(`${API}/api/v1/car-company`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'get',
      mode: 'cors',
      cache: 'no-cache',
      body: null,
    });
    let data = JSON.parse(await getCars.text())
    setShowCar(data)
    console.log('data', data)
  }
//     useEffect(() =>{
//       shows
// },[])
  return (
    <>
      {/* <Router>
        <div>
          <NavBar />
          <Switch>

            <Route exact path="/mainPage">
              <MainPage />
            </Route>

            <Route path="/contactUs">
              <Cards />
            </Route>

            <Route path="/carRent">
              <CarRent />
            </Route>

            <Route path="/bookingForm">
              <BookingForm />
            </Route>

            <Route path="/logout">
              <LogOut />
            </Route>

          </Switch>
        </div> */}
      {/* </Router
      > */}
        
    
      <div className='show cars'>
        list of  cars
            {
          showCars.length > 0 && showCars.map(car => {
            return <div key={car.id}>
              <ul>

                <li>{car.carName}</li>
                <img src={car.carImage_URL} width='300' height='300' />
                <li>{car.brand}</li>
                <li>{car.year}</li>
                <li>{car.dateAvailable}</li>
                <li>{car.priceForRent}</li>
                <li>{car.location}</li>
                <button>rent know  </button>
              </ul>

            </div>
          })
        }
        </div>

    </>

  );
}

export default MainPage;