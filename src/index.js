/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app/app.js';

import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faFacebookF,
  faLinkedinIn,
  faGoogle
} from '@fortawesome/free-brands-svg-icons'

import { ThemeProvider } from 'styled-components'

import theme from './theme'
import './styles.css'
import LoginForm from './components/loginForm/'

library.add(faFacebookF, faLinkedinIn, faGoogle)

function Main() {
  return (
    <>

      <App />

      <ThemeProvider theme={theme}>
        <LoginForm />
      
    </ThemeProvider>
      

    </>
  );
}

let entryPoint = document.getElementById('root');
ReactDOM.render(<Main />, entryPoint);




