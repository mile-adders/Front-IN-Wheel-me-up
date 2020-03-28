/* eslint-disable no-unused-vars */
import React, { Component } from 'react';

import Facebook from './components/Facebook.js';
import Google from './components/Google.js';

class oAuthApp extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wheel-me-Up</h1>
        {/* <p> Welcome you can signin with facebook and Google
        </p> */}
        {/* <Facebook />
        <Google /> */}
      </div>

    );

  }
}

export default oAuthApp;