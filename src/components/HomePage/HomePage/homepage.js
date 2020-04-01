/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import oAuthApp from '../../../App.js';
import LoggerHelp from '../../auth/context.js';
// import NavBar from '../NavBar/Navbar.js';
import Header from '../../Header/Header.js';
import Footer from '../../Footer/Footer.js';
import Main from '../slider/entryInfo.js';
import SignIn from '../../logIn/login';
import SignUp from '../../signUp/signup';
import MoreInfo from '../../MoreDetails/MoreDetails.js';
import Loading from '../../loadingvideo/loadingvideo.js';


function HomePage() {
  return (
    <>
      {/* <LoggerHelp>
        <BrowserRouter> */}
          <Header />
          {/* <div className="Home">
            <NavBar />
            <Route path='/login' component={SignIn} />
            <Route path='/signup' component={SignUp} />
            <Route path='/oAuthApp' component={oAuthApp} />
          </div> */} */}
          {/* <MoreInfo/> */}
          {/* <Footer /> */}

        {/* </BrowserRouter>
      </LoggerHelp> */}
          <Main />


    </>
  );
}

export default HomePage;