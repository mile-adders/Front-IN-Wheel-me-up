import React, { useState, useEffect } from 'react';
import cookies from 'react-cookies';
import jwt from 'jsonwebtoken';

export const loggerContext = React.createContext();

const API = process.env.REACT_APP_API;
const SECRET = 'cool mai';


function LoggerProvider(props) {

  const [logState, setLogState] = useState(false);
  const [user, setUser] = useState({});

  ////////////// validation
  const validatorForToken = (token, username) => {
    try {
      let validUser = jwt.verify(token, SECRET);
      console.log('validUser', validUser);
      cookies.save('auth', token);
      setLogState(validUser);
      setUser(username);

    } catch{
      setLogState(false);
      console.log('catch jwt');
      console.error('token Invalid!!!');

    }
  };

  /////////////////// login function
  let logIn = async (username, password) => {

    try {

      let output = await fetch(`${API}/signin`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        }),

      });


      let response = await output.text();
      // console.log('dddddddddddddd',response);
      await validatorForToken(response, username);
    } catch{
      console.error('can not log In!!!!!!!!!!!!');
    }
  };


  //////////////signup function
  let handleSignUp = async (data) => {

    let output = await fetch(`${API}/signup`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      body: JSON.stringify(data),
    });

    if (output.status !== 200) {
      alert('error : username already exist');
    } else {
      let response = await output.text();
      await validatorForToken(response, data.username);
    }
  };

  /////////// logOut function 
  let logOut = () => {
    cookies.save('auth', null);
    setLogState(false);
    setUser({});
  };

  //////////////////// to save data after refresh and don't logout 
  useEffect(() => {

    let cookiesToken = cookies.load('auth');

    const qs = new URLSearchParams(window.location.search);

    let token = qs.get('token') || cookiesToken || null;

    validatorForToken(token);
  }, []);





  let keys = { logIn, logOut, handleSignUp, logState, user, validatorForToken };

  return (

    <loggerContext.Provider value={keys}>
      {console.log('show me the state', logState)}
      {props.children}
    </loggerContext.Provider>
  );
}

export default LoggerProvider;

