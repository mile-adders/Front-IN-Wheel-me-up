import React from 'react';
import { BrowserRouter, Router,  Redirect, Route } from 'react-router-dom';

import LoggerHelp from '../../auth/context.js';
import oAuthApp from '../../../App.js'
import NavBar from '../NavBar/Navbar.js';
import Header from '../../Header/Header.js';
import Footer from '../../Footer/Footer.js';
import Main from '../slider/entryInfo.js';
import SignIn from '../../logIn/login';
import SignUp from '../../signUp/signup';



function HomePage() {
  return (
    <>
      <LoggerHelp>
        <BrowserRouter>
          <Header />

          <div className="Home">
            <NavBar />
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/oAuthApp' component={oAuthApp} />

            <Main />
            {/* <Route exact path='/' component={HomePage} />

            <Main />

            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} /> */}

            <Footer />

          </div>

        </BrowserRouter>
      </LoggerHelp>


    </>
  );
}

export default HomePage;