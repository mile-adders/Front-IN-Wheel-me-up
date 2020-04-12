/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import { Redirect, Link } from 'react-router-dom';

import { loggerContext } from '../auth/context.js';
import SignIn from '../signIn/signIn.js';
import oAuthApp from '../../App.js';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

const API = process.env.REACT_APP_API;

const SignUp = () => {

  let useLogger = useContext(loggerContext);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [toggle, setToggle] = useState(true);

  useEffect(() => {

    if (password === confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  },[password, confirmPassword]);

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

  let handleSubmitLogIn = (e) => {
    e.preventDefault();
    let userName = e.target.name.value;
    let password = e.target.password.value;
    console.log(userName, password);
    useLogger.logIn(userName, password);
  };
  if (useLogger.logState) {
    console.log(useLogger.logState);
    return <Redirect to='/AllCars'  ></Redirect>;
  } 

  let handleToggle = () => {
    setToggle(!toggle);
  };

  let signUpForm = 
<div className='loginDiv'>
  <div className='loginForm'>
    <h2 className='welcome'>Hello There!</h2>

    <form className='loginForm' onSubmit={handleSubmit}>

      <div className='form'>
        <input type='text' name='username' required />
        < label className='label-name'> <span className='content-name'>Username</span>
        </label>
      </div>

      <div className='form'>
        <input type='text' className='useInput' name='firstName' required />
        < label className='label-name'> <span className='content-name'>First Name</span>
        </label>
      </div>

      <div className='form'>
        <input type='text' className='useInput' name='lastName' required />
        < label className='label-name'> <span className='content-name'>Last Name</span>
        </label>
      </div>

      <div className='form'>
        <input type='email' className='useInput' name='email' required />
        < label className='label-name'> <span className='content-name'>Email</span>
        </label>
      </div>

      <div className='form'>
        <input type='password' className='useInput' name='password' required onChange={e => setPassword(e.target.value)} />
        < label className='label-name'> <span className='content-name'>password</span>
        </label>
      </div>

      <div className='form'>
        <input type='password' className='useInput' name='confirmPassword' required onChange={e => setConfirmPassword(e.target.value)} />
        < label className='label-name'> <span className='content-name'>Conform Password</span>
        </label>
      </div>
      
      <div className='forgotDiv'>Sign As:</div>

      <div className='forgotDiv'> <input type="radio" value="guest" name="role" required /> Car user</div>
      <div className='forgotDiv'><input type="radio" value="user" name="role" required /> Car rental </div>

      <div className='forgotDiv'><input type="checkbox" required /> <label>
  I  accept the Terms of Use & Privacy Policy </label></div>


      <button type='submit' name='signUp' className='login' disabled={passwordMatch} >Join</button>
      {/* eslint-disable-next-line */}
      <div className='notMember'>Already have account? <a className='forgot' onClick={handleToggle}>log in</a></div>
    </form>

  </div>
</div>;

  let signInForm =  
<div className='loginDiv'>
  <div className='loginForm'>
    <h2 className='welcome'>Welcome Back</h2>

    <form className='loginForm' onSubmit={handleSubmitLogIn}>

      <div className='form'>
        <input type='text' name='name' required />
        < label className='label-name'> <span className='content-name'>Username</span>
        </label>
      </div>

      <div className='form'>
        <input type='password' className='useInput' name='password' required />
        < label className='label-name'> <span className='content-name'>password</span>
        </label>
      </div>

      <div className='forgotDiv'><a className='forgot' href='https://media.makeameme.org/created/when-you-forgot-9a8f9358ce.jpg'>Forgot your password?</a></div>

      <button className='login' type='submit' onSubmit={handleSubmitLogIn}>Let Me In!</button>
      {/* eslint-disable-next-line */}
      <div className='notMember'>Not a member? <a className='forgot' onClick={handleToggle}>Sign up</a></div>
    </form>

  </div>
</div>;

  let formToggle = (toggle) ? signUpForm : signInForm;

  return (
    <>
      <Header />
      {formToggle}
      <Footer />
    </>
  );
};

export default SignUp;