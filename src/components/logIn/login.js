/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { loggerContext } from '../auth/context.js';
import { Link, Route, BrowserRouter } from 'react-router-dom';
import BookingForm from '../bookingForm/booking-form.js';
import Facebook from '../Facebook.js';
import Google from '../Google.js';

const SignIn = () => {
  let useLogger = useContext(loggerContext);

  let handleSubmit = (e) => {
    e.preventDefault();
    let userName = e.target.name.value;
    let password = e.target.password.value;
    useLogger.logIn(userName, password);
  };

  let handleLogout = () => {
    useLogger.logOut();
  };

  return (
    <>
    <legend>Cool LogIn Form
        <form onSubmit={handleSubmit}>
        <label  > UserName: <input name='name' required/> </label>
        <label> Password: <input type='password' name='password' required/></label>
        <button type='submit' > LogIn </button><br/> <br /> <br />
        <Facebook /> <br />  <br  />
        <Google /> <br /> <br />
      <button onClick={handleLogout}> LogOut </button>
      
      </form>
      </legend>
    </>
  );
};



export default SignIn;

// import React from 'react';
// import LoggerProvider from './context.js';
// // import { LoggerProvider } from './context.js';
// // import { JsonWebTokenError } from 'jsonwebtoken';

// const If = props => {
//   return props.condition ? props.children : null;
// }



// class Login extends React.Component {
//   static contextType = LoggerProvider;

//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       password: ''
//     }
//   }

//   handleChange = e => {
//     this.setState({ [e.target.name] : e.target.value });
//   }

//   handleSubmit = e => {
//     e.preventDefault();
//     this.context.login(this.state.username, this.state.password);
//     e.target.reset();
//   }

//   render() {
//     return (
//       <>
//         <If condition={this.context.loggedIn}>
//           <button onClick={this.context.logout}>Log Out!</button>
//         </If>

//         <If condition={!this.context.loggedIn}>
//           <form onSubmit={this.handleSubmit}>
//             <input name="username" onChange={this.handleChange} />
//             <input name="password" onChange={this.handleChange} />
//             <button>Log In!</button>
//           </form>
//         </If>
//       </>
//     )
//   }
// }

// export default Login;