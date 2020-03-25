/* eslint-disable no-unused-vars */
import React, { useState, useEffect , useContext} from 'react';
// import Login from '../logIn/login.js'
import {Link} from 'react-router-dom';
// import Login from '../logIn/login';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordState, setPasswordState] = useState(true);


  return (
    <>
      <form >
        <label> User Name: <input name='userName' required/></label>
        <label> First Name: <input name='firstName' required/></label>
        <label>  Last Name: <input name='lastName' required/></label>
        <label> Email: <input name='email' required/></label>
        <label> Password: <input required type='password' name='password' required/></label>
        <label> Confirm Password: <input required type='password' name='confirmPassword' required/></label>
        <label> Sign As: 
          <input type="radio" value="guest" name="role" required/> Car user
          <input type="radio" value="user" name="role" required/> Car rental
        </label>
        <label>I accept the Terms of Use & Privacy Policy</label>
        <input type="checkbox" required />
        <button type='submit' name='signUp' > SignUp </button>
      </form>
      
      <Link to='/login'>Login</Link>
    </>
  );
};

export default SignUp;