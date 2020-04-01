import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from '../navBar/navBar.js';
import Header from '../header/header.js';
import Footer from '../footer/footer.js';
import SignIn from '../signIn/signIn.js';
import SignUp from '../signUp/signUp.js';
import MainPage from '../mainPage/mainPage.js';


const HomePage = () => {



  return (
    <>
    <Header />
      
        
        <NavBar />
        <div>
            <Route path="/login">
              <SignIn />
            </Route>

            <Route path="/signup">
              <SignUp />
            </Route>
            
              {/* <Route exact path="/">
            <HomePage />
          </Route> */}
        </div>

      <Footer />
    </>

  );

};

export default HomePage;