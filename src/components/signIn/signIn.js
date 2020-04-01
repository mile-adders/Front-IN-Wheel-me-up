import React, {useContext  }  from 'react';
// import { loggerContext } from '../auth/context.js';
import { Redirect } from 'react-router-dom';
import {loggerContext} from '../auth/context.js'
import Facebook from './facebookSignIn.js';
import Google from './googleSignIn.js';
import BookingForm from '../bookingCar/bookingCar'
import MainPage from '../mainPage/mainPage.js'


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
  if(useLogger.logState){
    console.log(useLogger.logState)
    return  <Redirect to='/mainPage' component={MainPage} ></Redirect>
  }else{

  // let handleLogout = () => {
  //   useLogger.logOut();
  // };

  return (
    <>
       <legend>Cool LogIn Form
       <form onSubmit={handleSubmit}>
         <label  > UserName: <input name='name' required/> </label>
         <label> Password: <input type='password' name='password' required/></label>
         <button type='submit' > LogIn </button><br/> <br /> <br />
         <Facebook /> <br />  <br  />
         <Google /> <br /> <br />
       {/* <button onClick={handleLogout}> LogOut </button> */}
      
       </form>
       </legend>

      {/* <button onClick={handleLogout}> LogOut </button> */}
    </>
  );
  }
};



export default SignIn;