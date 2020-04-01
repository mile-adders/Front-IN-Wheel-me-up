import React, { useState, useEffect } from 'react';
// import { BrowserRouter , Route } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import FrequentlyAskedQuestions from '../fAQ/fAQ.js'
import LoggerHelp from '../auth/context.js';

import Cards from '../contactUs/cards.js';
// import AskUs from './components/Main/Ask-Us/Ask-Us.js';
import CarRent from '../rentCar/rentCar.js';
import BookingForm from '../bookingCar/bookingCar.js';
import NavBar from '../navBar/navBar.js';
import LogOut from '../logout/logout.js';
import Header from '../Header/Header.js';


const API = 'https://wheel-me-up-m.herokuapp.com'

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
    let data = JSON.parse(await getCars.text())
    setShowCar(data)
    console.log('data', data);
    console.log('showcars', showCars);


  }
  useEffect(() => {
    Shows()
  }, []);


  
  return (
    <>
         <Header />

      


      <div className='show cars'>
        list of  cars
            {
          showCars.length > 0 && showCars.map(car => {
            return (<div key={car.id}>
              <ul>

              <li> car {car.carName}</li>
               <img src={car.carImage_URL} width='300' height='300' />
                 <li> car Brand : {car.brand}</li>
                 <li> car Type : {car.carType} </li>
                 <li> year : {car.year}</li>
                 <li> Date Available :{car.dateAvailable}</li>
                 <li> Price for day : {car.priceForRent}</li>
                 <li> Pick up location : {car.pickupLocation}</li>
                 <button>Rent a car now :  </button>
              </ul>

            </div>)
          })
        }
      </div>

    </>

  );
}

export default AllCars;
// import React, { useState, useEffect } from 'react';
// // import { BrowserRouter , Route } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

// import Cards from '../contactUs/cards.js';
// // import AskUs from './components/Main/Ask-Us/Ask-Us.js';
// import CarRent from '../rentCar/rentCar.js';
// import BookingForm from '../bookingCar/bookingCar.js';
// import NavBar from '../navBar/navBar.js';
// import LogOut from '../logout/logout.js';

// const API = 'https://wheel-me-up-m.herokuapp.com'

// function AllCars() {
//   const [showCars, setShowCar] = useState([]);
  
//   let shows = async()=>{
//     let getCars = await fetch(`${API}/api/v1/car-company`, {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       method: 'get',
//       mode: 'cors',
//       cache: 'no-cache',
//       body: null,
//     });
//     let data = JSON.parse(await getCars.text())
//     setShowCar(data)
//     console.log('data', data)
//   }

    
//   return (
//     <>
      
//       <div className='show cars'>
//         list of  cars
//             {
//           showCars.length > 0 && showCars.map(car => {
//             return <div key={car.id}>
//               <ul>

//                 <li> car {car.carName}</li>
//                 <img src={car.carImage_URL} width='300' height='300' />
//                 <li> car Brand : {car.brand}</li>
//                 <li> car Type : {car.carType} </li>
//                 <li> year {car.year}</li>
//                 <li> Date Available{car.dateAvailable}</li>
//                 <li> Price for day {car.priceForRent}</li>
//                 <li> Pick up location{car.location}</li>
//                 <button>Rent a car now  </button>
//               </ul>

//             </div>
//           })
//         }
//         </div>

//     </>

//   );
// }


// export default AllCars;