/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import jwt from 'jsonwebtoken';
import { If, Then } from '../if/index.js';
import  LoggerContext  from '../auth/context.js';

const Auth = props => {
  const context = useContext(LoggerContext);

  let okToRender = false;
  let user = {};

  try {
    user = context.userToken
      ? jwt.verify(context.userToken, 'cool mai')
      : {};
    okToRender =
      context.login &&
      (props.capability ? user.capabilities.includes(props.capability) : true);
  } catch {console.warn('not cool');}

  return (
    <If condition={okToRender}>
      <Then>
        <div>{props.children}</div>
      </Then>
    </If>
  );
};

export default Auth;



// import React from 'react';
// import  LoggerContext  from '../auth/context.js';

// const If = props => {
//   return props.condition ? props.children : null
// }

// class Auth extends React.Component{
//   static contextType = LoggerContext;

//   render() {
//     let okToRender = false;

//     try {
//       okToRender =
//         this.context.loggedIn &&
//           (this.props.capability
//             ? this.context.user.capabilities.includes(this.props.capability)
//             : true);
//     } catch {
//       console.warn('not authorized to do that');
//     }
//     return (
//       <If condition={okToRender}>
//         <div>{this.props.children}</div>
//       </If>
//     )  
//   }
// }

// export default Auth;