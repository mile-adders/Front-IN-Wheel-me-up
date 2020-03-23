/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import GoogleLogin from 'react-google-login';





function Google() {

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');

  const [url, setUrl] = useState('');

  const responseGoogle = (response) => {

    setName(response.profileObj.name);
    setEmail(response.profileObj.email);
    setUrl(response.profileObj.imageUrl);

  };

  return (
    <div>
      <h1>Login with Google</h1>
      <h2> Welcome: {name}</h2>
      <h2> Email: {email}</h2>
      <img src={url} alt={name}/>
      <GoogleLogin
        clientId="911474006429-5ppak2jacmahu6ie9gphplcdok82flej.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />

    </div>
  );
}

export default Google;