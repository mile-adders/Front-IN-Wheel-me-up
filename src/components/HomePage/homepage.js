import React from 'react';
import Main from './entryInfo';
import SignIn from '../logIn/login';
import SignUp from '../signUp/signup';



function HomePage() {
  return (
    <>
    <SignUp />
    <SignIn />
    <Main />
    </>
  );
}

export default HomePage ;