/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
// import App from './components/app/app.js';
import OAuthApp from './App.js';

function Main() {
  return (
    <>
      <OAuthApp />
      {/* <App />   */}
    </>
  );
}

let entryPoint = document.getElementById('root');
ReactDOM.render(<Main />, entryPoint);
registerServiceWorker();
