/* eslint-disable no-unused-vars */
import React, { useState, useEffect , useContext} from 'react';
// import Login from '../logIn/login.js'
import {Link} from 'react-router-dom';
// import Login from '../logIn/login';
import loggerContext  from '../auth/context.js';
// import { loggerContext } from '../auth/context.js';



const API = process.env.REACT_APP_API;

const SignUp = () => {
  
  let useLogger = useContext(loggerContext);
  console.log(useLogger)

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch , setPasswordMatch] = useState(true)
 
  useEffect(() => {

    if (password === confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  });

  let handleSubmit =(e) => {
    e.preventDefault();

    let data = {
      username:e.target.username.value,
      firstName: e.target.firstName.value ,
      lastName:e.target.lastName.value ,
      email:e.target.email.value , 
      password:e.target.password.value,
      role: e.target.role.value ,
    };

    useLogger.handleSignUp(data);
     
  };



 


  return (
    <>
    
      <form  onSubmit ={handleSubmit}>

        <label> User Name: <input required name='username' /></label>

        <label> First Name: <input name='firstName' /></label>

        <label>  Last Name: <input name='lastName' /></label>

        <label> Email: <input name='email' /></label>

        <label> Password: <input required type='password' name='password' onChange={e => setPassword(e.target.value)} /></label>

        <label> Confirm Password: <input required type='password' name='confirmPassword' onChange={e => setConfirmPassword(e.target.value)} /></label>

        <label> Sign As: 
          <input type="radio" value="guest" name="role" required/> Car user
          <input type="radio" value="user" name="role" required/> Car rental
        </label>

          <input type="checkbox" required />
        <label>
          I accept the Terms of Use & Privacy Policy
        </label>

        <button type='submit' name='signUp' disabled={passwordMatch} > SignUp </button>

      </form>
      
      <Link to='/login'>Login</Link>
    </>
  );
};

export default SignUp;