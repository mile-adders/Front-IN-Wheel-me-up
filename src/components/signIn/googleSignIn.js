import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from 'react-router-dom';
// import BookingForm from '../bookingForm/booking-form.js';



export default class Google extends Component {
  state = {
    isLoggedIn: false,
    name: '',
    email: '',
    url: '',
  };
  responseGoogle = response => {

    this.setState({
      isLoggedIn: true,
      name: response.name,
      email: response.email,
      picture: response.url,
    });
  };



  componentClicked = () => console.log('clicked');




  render() {

    let googleContent;

    if (this.state.isLoggedIn) {
      googleContent = (

        <div>
          <img src={this.state.picture} alt={this.state.name} />
          <h2>Welcome {this.state.name}</h2>
      Email: {this.state.email}

        </div>

      );
    //   return <Redirect to='/bookingform' component={BookingForm} ></Redirect>;


    } else {
      googleContent = (

        <GoogleLogin
          clientId="911474006429-5ppak2jacmahu6ie9gphplcdok82flej.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.responseGoogle}
          onFailure={this.responseGoogle}
          cookiePolicy={'single_host_origin'}

        />

      );

    }



    return (
      <>

        {googleContent}


      </>
    );
  }
}