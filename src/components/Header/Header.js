/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import {Link, NavLink} from 'react-router-dom';
import Hamburger from './hamburger/hamburger.js';
import NavBar from '../navBar/navBar.js';
import { loggerContext } from '../auth/context.js';

export default function Header (){

  let useLogger = useContext(loggerContext);
  
  if(!useLogger.logState){
    return(
      <header data-aos='fade-down'>
        <div className="container">
          <a href="/" className="brand-logo">
            <img className='logo' src={require('./assets/drive.png')} alt='logo'></img>
            <div className='appName'>Wheel Me Up</div>
          </a>
        </div>
        <Hamburger />
      </header>
    );
  } else {
    return(
      <header data-aos='fade-down'>
        <div className="container">
          <a href="/" className="brand-logo">
            <img className='logo' src={require('./assets/drive.png')} alt='logo'></img>
            <div className='appName'>Wheel Me Up</div>
          </a>
        </div>
        <Hamburger />
      </header>
    );
  }
}