import React, { Component , useContext } from 'react';
import {loggerContext} from '../auth/context.js';

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
export default LogOut ;
