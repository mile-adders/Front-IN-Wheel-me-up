/* eslint-disable no-unused-vars */
import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import Hamburger from './hamburger/hamburger.js';
export default function Header (){
  return(
    <header data-aos='fade-down'>
      <nav className="nav-wrapper red">
        <div className="container">
          <a href="/" className="brand-logo">
            <img className='logo' src={require('./assets/drive.png')}></img>
            <div className='appName'>Wheel Me Up</div>
          </a>
        </div>
        <Hamburger />
      </nav>
    </header>
  );
}