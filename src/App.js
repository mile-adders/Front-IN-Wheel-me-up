/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink, Redirect, Prompt } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import BookingForm from './components/bookingForm/booking-form.js';
import Facebook from './components/Facebook.js';
import Google from './components/Google.js';

const User = ({ match }) => {
  return (<h1>Welcome User {match.params.username} </h1>)
}


class oAuthApp extends Component {
 

  render() {
    return (

      <Router>
        <div className="App">
          <h1>Wheel-me-Up</h1>
          <Facebook />
          <Google />
          <NavLink to="/">Home</NavLink>

          <NavLink to="/about">About-Us</NavLink>

          <NavLink to="/user/:username">User</NavLink>

          <NavLink to="/bookingform">Booking-Form</NavLink>




          <Route path="/" exact render={

            () => {
              return (<h1>Welcome-Home</h1>

              );

            }
          } />
          <Route path="/about" exact render={
            () => {
              return (<h1>Welcome-About</h1>);
            }
          } />

          <Route path="/user/:username" exact component={User}/>

          <Route path="/bookingform" exact render={
            () => {
              return (
                <BookingForm />
              );
            }
          } />
        </div>

      </Router>
    );

  }
}

export default oAuthApp;