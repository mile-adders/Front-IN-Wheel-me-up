import React, { useState , Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from '../navBar/navBar.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import SignIn from '../signIn/signIn.js';
import SignUp from '../signUp/signUp.js';
import MainPage from '../mainPage/mainPage.js';
import Benefits from '../Benefits/Benefits.js'
import Video from '../Video/Video.js'
import MoreDetails from '../MoreDetails/MoreDetails.js'
import SliderMain from '../slider/slider.js';
import Testimonials from '../Testimonials/Testimonials.js';
import FAQ from '../FAQ/FAQ.js';
import Why from '../Why/Why.js'


const HomePage = () => {

const [ open , setOpen] = useState(false)
 

  return (
    <>
        <Route path="/login">
          <SignIn />
        </Route>

        <Route path="/signup">
          <SignUp />
        </Route>


      <Route path='/'>
      <Header />
      <Video />
      <Benefits />
      <MoreDetails />
      < SliderMain />
      <Testimonials />
      <FAQ />
      <Why />

          </Route> 

      {/* <NavBar /> */}
      <div>


        {/* <Route exact path="/">
            <HomePage />
          </Route> */}
      </div>

      <Footer />
    </>

  );

};

export default HomePage;