/* eslint-disable no-unused-vars */
import React, { useContext, component, useState, useEffect } from 'react';
// import { loggerContext } from '../auth/context.js';
import { Redirect, Link } from 'react-router-dom';
import { loggerContext } from '../auth/context.js';
import Facebook from './facebookSignIn.js';
import Google from './googleSignIn.js';
import BookingForm from '../bookingCar/bookingCar';
import MainPage from '../mainPage/mainPage.js';
import AllCars from '../allCars/allCars.js';
import Header from '../Header/Header.js';
import Signup from '../signUp/signup.js';
import Footer from '../Footer/Footer.js';


const SignIn = () => {

  const [toggle, setToggle] = useState(true);
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {

    if (password === confirmPassword) {
      setPasswordMatch(false);
    } else {
      setPasswordMatch(true);
    }
  },[password, confirmPassword]);

  console.log(loggerContext);

  let useLogger = useContext(loggerContext);
  console.log('useLogger', useLogger);

  let handleSubmit = (e) => {
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

  let handleSubmitSignUp = (e) => {
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

  let handleToggle = () => {
    setToggle(!toggle);
  };

  let signInForm =  
    <div className='loginDiv'>
      <div className='loginForm'>
        <h2 className='welcome'>Welcome Back</h2>

        <form className='loginForm' onSubmit={handleSubmit}>

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

          <button className='login' type='submit' onSubmit={handleSubmit}>Let Me In!</button>
          {/* eslint-disable-next-line */}
          <div className='notMember'>Not a member? <a className='forgot' onClick={handleToggle}>Sign up</a></div>
        </form>

      </div>
    </div>;

  let signUpForm = 
<div className='loginDiv'>
  <div className='loginForm'>
    <h2 className='welcome'>Hello There!</h2>

    <form className='loginForm' onSubmit={handleSubmitSignUp}>

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


      <button type='submit' name='signUp' className='login' onSubmit={handleSubmitSignUp} disabled={passwordMatch} >Join</button>
      {/* eslint-disable-next-line */}
      <div className='notMember'>Already have account? <a className='forgot' onClick={handleToggle}>log in</a></div>
    </form>

  </div>
</div>;
    
  let formToggle = (toggle) ? signInForm : signUpForm;  
  return (
    <div>
      <Header />
      {formToggle}
      <Footer />
    </div>
  );
};


export default SignIn;

