/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
// import {BrowserRouter} from 'react-router-dom';
import App from './components/app/app.js';

function Main() {
  return (
    <>
      {/* <BrowserRouter> */}
      <App />
      {/* </BrowserRouter> */}
    </>
  );
}

const entryPoint = document.getElementById('root');
ReactDOM.render(<Main />, entryPoint);