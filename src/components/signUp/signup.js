/* eslint-disable no-unused-vars */
import React, { useState, useEffect , useContext} from 'react';

const SignUp = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordState, setPasswordState] = useState(true);


  return (
    <>
      <form >
        <label> User Name: <input name='userName' /></label>
        <label> First Name: <input name='firstName' /></label>
        <label>  Last Name: <input name='lastName' /></label>
        <label> Email: <input name='email' /></label>
        <label> Password: <input required type='password' name='password' /></label>
        <label> Confirm Password: <input required type='password' name='confirmPassword' /></label>
        <label> Sign As: 
          <input type="radio" value="guest" name="role"/> Car user
          <input type="radio" value="user" name="role"/> Car rental
        </label>
        <label>I accept the Terms of Use & Privacy Policy</label>
        <input type="checkbox" required />
        <button type='submit' name='signUp' > SignUp </button>
      </form>
    </>
  );
};

export default SignUp;