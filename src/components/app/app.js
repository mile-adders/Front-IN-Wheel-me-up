/* eslint-disable no-unused-vars */
import React from 'react';
import { BrowserRouter , Route } from 'react-router-dom';
import LoggerHelp from '../auth/context.js';

import HomePage from '../HomePage/HomePage/homepage.js';

import './app.scss';
const App = () => {
  return (
    <>
      <LoggerHelp>
        <BrowserRouter>
          <div className="App">
            <Route exact path='/' component={HomePage} />
          </div>

        </BrowserRouter>
      </LoggerHelp>
    </>
  );
};

export default App;
