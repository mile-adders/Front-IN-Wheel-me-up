/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { loggerContext } from '../auth/context.js';

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
      <form onSubmit={handleSubmit}>
        <label  > UserName: <input name='name' /> </label>
        <label> Password: <input type='password' name='password' /></label>
        <button type='submit' > LogIn </button>
      </form>
      <button onClick={handleLogout}> LogOut </button>
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