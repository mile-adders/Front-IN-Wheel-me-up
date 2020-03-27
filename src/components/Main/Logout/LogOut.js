/* eslint-disable no-unused-vars */
import React, { Component , useContext } from 'react';
// import { Link  , Redirect} from 'react-router-dom';
import {loggerContext} from '../../auth/context.js';
// import HomePage from '../components/HomePage/HomePage/homepage.js';

const LogOut = () => {
  let useLogger = useContext(loggerContext);

  let handleLogout = () => {
    useLogger.logOut();

  };
  return (
    <div>
      <button onClick={handleLogout}> log out </button>
    </div>
  );
};


export default LogOut;
