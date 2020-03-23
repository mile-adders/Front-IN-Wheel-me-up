import React  from 'react';
// import LoginContext from '../auth/context.js';
import LoggerHelp from '../auth/context.js';
import SignIn from '../logIn/login.js';
import SignUp from '../signUp/signup.js'


const App = ()=> {

  return(
    <>
      < LoggerHelp>
        <h1> hi</h1>
        <SignUp />
        <SignIn />
      </LoggerHelp>


    </>
  );

};


export default App;


