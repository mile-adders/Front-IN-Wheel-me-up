/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/logIn/login';

const LogOut = () => {

  return (
    <div>
      <h1>You have been logout</h1>
      <Link to="/loginAgain" component={Login}>Log-In Again</Link>
    </div>
  );
};


export default LogOut;
