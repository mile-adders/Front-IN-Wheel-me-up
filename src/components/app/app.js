import React  from 'react';
// import LoginContext from '../auth/context.js';
// import LoggerHelp from '../auth/context.js';
import SignIn from '../logIn/login.js';
import Home from '../about-us/about-us.js';
import Header from '../app/header.js';
import Footer from '../app/footer.js';

import '../app/app.scss';
import Cards from '../about-us/cards.js';
// import Blurb from '../about-us/blurb.js';

// import Cards from '../about-us/cards.js';
// import Blurb from '../about-us/blurb.js';
// import Auth from '../auth/auth.js';


const App = ()=> {

  return(
    <>
    < Home/>
    <Header/>
    <Footer/>
     
    <Cards/>
  
   


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