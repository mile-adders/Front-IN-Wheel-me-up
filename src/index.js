/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './components/app/app.js';
import OAuthApp from './App.js';
// import { BrowserRouter } from 'react-router-dom'


function Main() {
  return (
    <>
      {/* <BrowserRouter> */}
        {/* <OAuthApp /> */}
        <App /> 
      {/* </BrowserRouter> */}
    </>
  );
}

let entryPoint = document.getElementById('root');
ReactDOM.render(<Main />, entryPoint);
registerServiceWorker();
