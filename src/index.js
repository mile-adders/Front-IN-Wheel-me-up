/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.js';
import OAuthApp from './App.js';
// import { BrowserRouter } from 'react-router-dom'


function Main() {
  return (
    <>
       {/* <BrowserRouter> */}
        {/* <OAuthApp /> */}
        <App /> 
      {/* </BrowserRouter>  */}
      {/* // <App /> */}
       {/* <OAuthApp /> */}
    </>
  );
}

let entryPoint = document.getElementById('root');
ReactDOM.render(<Main /> , entryPoint);
