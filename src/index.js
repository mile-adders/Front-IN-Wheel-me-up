import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app.js';

function Main() {
  return (
    <>
      <App />
    </>
  )
}

const entryPoint = document.getElementById('root');
ReactDOM.render(<Main />, entryPoint);