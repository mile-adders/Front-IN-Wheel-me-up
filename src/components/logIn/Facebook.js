/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import {  Redirect, BrowserRouter } from 'react-router-dom';
import BookingForm from '../bookingCar/bookingCar.js';



export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: '',
    name: '',
    email: '',
    picture: '',
  };

  responseFacebook = response => {
    // console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url,
    });

  };

  componentClicked = () => console.log('clicked');

  render() {

    let fbContent;

    if (this.state.isLoggedIn) {
      fbContent = (

        <div>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
        Email: {this.state.email}
        </div>


      );
      return <BrowserRouter><Redirect to='/bookingform' component={BookingForm} ></Redirect> </BrowserRouter>;


    } else {
      fbContent = (
        <FacebookLogin
          appId="653628268747487"
          autoLoad={false}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}

        />

      );

    }

    return (
      <>

        {fbContent}


      </>
    );
  }
}





