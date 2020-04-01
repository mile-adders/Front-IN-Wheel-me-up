/* eslint-disable no-unused-vars */
import React ,{ useContext, useEffect } from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import LoggerHelp from '../auth/context.js';
import loggerContext  from '../auth/context.js'


import './app.scss';
import MainPage from '../mainPage/mainPage.js';
import HomePage from '../homePage/homepage.js';
import CarCompanyForm from '../rentCar/rentCar.js';
import AllCars from '../allCars/allCars.js';
import BookingForm from '../bookingCar/bookingCar.js';
import NavBar from '../navBar/navBar.js';

const App = ( props) => {
 
  return (
    <>

      <LoggerHelp>
          <div className="App">
            {/* <BookingForm /> */}
            {/* <AllCars /> */}
            {/* <MainPage /> */}
            < CarCompanyForm />
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
