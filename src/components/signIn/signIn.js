import React, { useContext, component } from 'react';
// import { loggerContext } from '../auth/context.js';
import { Redirect } from 'react-router-dom';
import { loggerContext } from '../auth/context.js'
import Facebook from './facebookSignIn.js';
import Google from './googleSignIn.js';
import BookingForm from '../bookingCar/bookingCar'
import MainPage from '../mainPage/mainPage.js'
import AllCars from '../allCars/allCars.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';


const SignIn = () => {

  console.log(loggerContext);

  let useLogger = useContext(loggerContext);
  console.log('useLogger', useLogger);

  let handleSubmit = (e) => {
    e.preventDefault();
    let userName = e.target.name.value;
    let password = e.target.password.value;
    useLogger.logIn(userName, password);
  };
  if (useLogger.logState) {
    console.log(useLogger.logState)
    return <Redirect to='/AllCars'  ></Redirect>
  } else {

    // let handleLogout = () => {
    //   useLogger.logOut();
    // };

    return (
      <div>
        <Header />
      <div className="body">
          <div className="login-div">
            <div className="loglogo"> </div>
            <div className="tittle"><h4>Wheel Me Up</h4></div>
            <div className="sub-title">Sign in</div>
            <form onSubmit={handleSubmit}>
              <div className="fields">
                <div className="username"><label> UserName: <input name='name' required /> </label></div>
                <div className="password"><label> Password: <input type='password' name='password' required /></label></div>
              </div>
              <button type='submit' className="signin-button"> Log In </button>
              <div className="facebook" ><Facebook /> </div>
              <div className="google"><Google /></div>
              <div className="link"><a href="/login" className="hh">Forgot your Password ?</a></div>
              {/* <button onClick={handleLogout}> LogOut </button> */}

            </form>
            <Footer />

          </div>

          {/* <button onClick={handleLogout}> LogOut </button> */}
        </div>
      </div>
    );
  }
};



export default SignIn;