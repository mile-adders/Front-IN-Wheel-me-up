import React, { useState, useEffect } from 'react';
import cookies from 'react-cookies';
import jwt from 'jsonwebtoken';

export const LoggerContext = React.createContext();

const API = process.env.REACT_APP_API;
const SECRET = 'cool mai';

export const loggerContext = React.createContext();

function LoggerProvider(props) {

  const [logState, setLogState] = useState(false);
  const [user, setUser] = useState({});
  // console.log('user', user)

  //   const validateToken = (token , userName)=>{
  //     try{
  //       let user = jwt.verify(token, SECRET);
  //       cookies.save('auth', token);
  //       setLogState(user);
  //       setUser(userName);
  //     }catch{
  //       setLogState(false);
  //       console.error('token Invalid!!!');
  //     }
  //   };
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

  let logIn = async (username, password)=> {

    try {
      // console.log(username, password, "mmmmmmmmmmmm")

      let output = await fetch(`${API}/signin`, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        headers: new Headers({
          'Authorization': `Basic ${btoa(`${username}:${password}`)}`,
        }),
      });
      // .then(res => res.text())
      // .then(token => validatorForToken(token))
      // .catch(e => console.error(e));
      // console.log(output, typeof output, "==========>")
      //   console.log('output.body', output.body);

      let response = await output.text();
      console.log('dddddddddddddd',response);
      await validatorForToken(response, username);
    } catch{
      console.error('log In!');
    }
  };

  let logOut = () => {
    cookies.save('auth', null);
    setLogState(false);
    setUser({});
  };

  useEffect(() => {

    let cookiesToken = cookies.load('auth');
    console.log('cookiesToken',cookiesToken);
    const qs = new URLSearchParams(window.location.search);

    let token = qs.get('token') || cookiesToken || null;

    validatorForToken(token);
  }, []);





  let keys = { logIn, logOut, logState , user };

  return (

    <loggerContext.Provider value={keys}>
      {console.log('show me the state', logState)}
      {props.children}
    </loggerContext.Provider>
  );
}

export default LoggerProvider;


///////////////////

// function LoggerProvider(props){

//   const [logState , setLogState] = useState(false);
//   const [user , setUser] = useState({});


//   const validateToken = (token , userName)=>{
//     try{
//       let user = jwt.verify(token, SECRET);
//       cookies.save('auth', token);
//       setLogState(user);
//       setUser(userName);
//     }catch{
//       setLogState(false);
//       console.error('token Invalid!!!');
//     }
//   };


//   const logIn = (userName , password) => {

//     console.log('in logIn' , userName , password);
//     fetch(`${API}/signin`,{
//       method: 'POST',
//       mode: 'cors',
//       cache: 'no-cache',
//       headers: new Headers({
//         'Authorization': `Basic ${btoa(`${userName}:${password}`)}`,
//       }),
//     })
//       .then(res => res.text())
//       .then(token => validateToken(token , userName))
//       .catch(console.error);
//     };


//     const logOut = ()=>{
//       setLogState(false);
//       setUser({});
//       cookies.save('auth', null);
//     };


//     // to stay login after refresh 
//     useEffect(()=>{
//       const cookiesToken = cookies.load('auth');
//     const qs = new URLSearchParams(window.location.search);
//     const token = qs.get('token') || cookiesToken || null ;
//     validateToken(token);
//   },[]);

//   const keys = {logState , logIn , logOut ,user};


//   return(
//     <LoggerContext.Provider value = {keys}>
//       {props.children}
//     </LoggerContext.Provider>
//   );

// }


// export default LoggerProvider ;

// const API = process.env.REACT_APP_API;
// // const secret = 

// export const LoginContext = React.createContext();

// class LoginProvider extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedIn: false,
//       login: this.login,
//       logout: this.logout,
//       user: {}
//     }
//   }

//   login = (username, password) => {
//     console.log(username , password , 'mmmmmmmmmmmm')
//     fetch(`${API}/signin`, {
//       method: 'post',
//       mode: 'cors',
//       cache: 'no-cache',
//       headers: new Headers({
//         'Authorization': `Basic ${btoa(`${username}:${password}`)}`
//       })
//     })
//     .then((response) =>
//       // console.log('response', response),
//        response.text()
//        )
//     .then(token => this.validateToken(token))
//     .catch(console.error);
//   }

//   validateToken = token => {
//     try {
//       let user = jwt.verify(token, 'cool mai');
//       this.setLoginState(true, token, user);
//     } catch {
//       this.setLoginState(false, null, {});
//       console.error('token invalid');
//     }
//   }

//   setLoginState = (loggedIn, token, user) => {
//     cookies.save('auth', token);
//     this.setState({ token, loggedIn, user });
//   }

//   logout = () => {
//     this.setLoginState(false, null, {});
//   }

//   componentDidMount() {
//     const qs = new URLSearchParams(window.location.search);
//     const cookiesToken = cookies.load('auth');
//     const token = qs.get('token') || cookiesToken || null;
//     this.validateToken(token);
//   }

//   render() {
//     return (
//       <LoginContext.Provider value={this.state}>
//         {this.props.children}
//       </LoginContext.Provider>
//     )
//   }
// }

// export default LoginProvider;