/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter, Router, Redirect, Route } from 'react-router-dom';

import LoggerHelp from '../auth/context.js';
import SignIn from '../logIn/login.js';
import SignUp from '../signUp/signup.js';
import './app.scss';
import HomePage from '../HomePage/HomePage/homepage.js';


const App = () => {
  return (
    <>

      <LoggerHelp>
        <BrowserRouter>
          <div className="App">
            < HomePage />
            <Route exact path='/' component={HomePage} />
            {/* <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} /> */}


          </div>

        </BrowserRouter>
      </LoggerHelp>






    </>

  );
};

export default App;
