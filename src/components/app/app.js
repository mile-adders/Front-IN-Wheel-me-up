/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import LoggerHelp from '../auth/context.js';

import './app.scss';
import HomePage from '../HomePage/HomePage/homepage.js';
import Payment from '../payment/payment.js';


const App = () => {
  return (
    <>

      {/* <LoggerHelp>
        <BrowserRouter>
          <div className="App">
            <Route exact path='/' component={HomePage} />
          </div>

        </BrowserRouter>
      </LoggerHelp> */}

<React.Fragment>
   <Payment/>

        </React.Fragment>

    </>

  );
};

export default App;
