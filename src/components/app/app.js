import React  from 'react';
// import LoginContext from '../auth/context.js';
import LoggerHelp from '../auth/context.js';
import SignIn from '../auth/login.js';

// import Auth from '../auth/auth.js';

// const Edit = props => {
//   return (
//     <Auth capability="update">
//       <span>You can edit!</span>
//     </Auth>
//   )
// }

// const Delete = props => {
//   return (
//     <Auth capability="delete">
//       <span>You can delete!</span>
//     </Auth>
//   )
// }
const App = ()=> {

  return(
    <>
      < LoggerHelp>
        <h1> hi</h1>
        <SignIn />
      </LoggerHelp>


    </>
  );

};
// class App extends React.Component {
//   render() {
//     return (
//       <LoggerHelp>
//         <SignUp />
//         {/* <Edit />
//         <Delete /> */}
//       </LoggerHelp>
//     )
//   }
// }

export default App;



// /* eslint-disable no-unused-vars */
// import React from 'react';
// // import your path to your class;

// function App() {
//   return (
//     <>
//       <h1 >hi  </h1>
//       {/* <here right the name of your class/> */}
//     </>
//   );
// }

// export default App;