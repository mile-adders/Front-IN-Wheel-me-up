/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFacebookF,
  faGoogle,
} from '@fortawesome/free-brands-svg-icons';

import { ThemeProvider } from 'styled-components';

import theme from './theme';
import './styles.css';
import LoginForm from './components/loginForm/';
import Loading from './components/loadingvideo/loadingvideo.js';

library.add(faFacebookF, faGoogle);



function Main() {
  return (

    <>
      <Loading />
      
      
      <App />
      
      <ThemeProvider theme={theme}>
        <LoginForm />

      </ThemeProvider>

      



    </>
  );
}

let entryPoint = document.getElementById('root');
ReactDOM.render(<Main />, entryPoint);




