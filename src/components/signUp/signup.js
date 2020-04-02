/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { Redirect } from 'react-router-dom';

import { loggerContext } from '../auth/context.js';
import SignIn from '../signIn/signIn';
import oAuthApp from '../../App.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';




const API = process.env.REACT_APP_API;

const SignUp = () => {

  let useLogger = useContext(loggerContext);

  // console.log('useLogger', useLogger);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);

  useEffect(() => {

    if (password === confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  });

  let handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      username: e.target.username.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
      email: e.target.email.value,
      password: e.target.password.value,
      role: e.target.role.value,
    };

    useLogger.handleSignUp(data);
  };
  if (useLogger.logState) {
    console.log('useLogger.logState', useLogger.logState);
    return <Redirect to='/login' component={SignIn} ></Redirect>;

  }






  return (
    <>
      <Header />
      <div className="bod">

        <form onSubmit={handleSubmit}>
          <div className="tittles">Wheel-Me-Up Sign Up</div>
          <div className="subbtitle">Sign Up Now..!</div>

          <div className="font1"><label> User Name: <input required name='username' /></label>

            <div > <label> First Name: <input name='firstName' /></label></div>

            <div> <label>  Last Name: <input name='lastName' /></label></div>

            <div><label> Email: <input name='email' /></label></div>

            <div><label> Password: <input required type='password' name='password' onChange={e => setPassword(e.target.value)} /></label></div>

            <div><label> Confirm Password: <input required type='password' name='confirmPassword' onChange={e => setConfirmPassword(e.target.value)} /></label></div>
          </div>
          <div><label> <h3>Sign As: </h3></label> </div>

         <div className="caruser"> <input type="radio" value="guest" name="role" required /> Car user</div>
            <div className="carcompany"><input type="radio" value="user" name="role" required /> Car rental </div>

          <div className="checked"><input type="checkbox" required /> <label>
            I  accept the Terms of Use & Privacy Policy </label></div>


          <div><button type='submit' name='signUp' class="btn2" id="signUp" disabled={passwordMatch} > SignUp </button></div>
        </form>

        {/* <Link to='/login'>Login</Link> */}
      </div>
      <Footer />
    </>
  );
};

export default SignUp;