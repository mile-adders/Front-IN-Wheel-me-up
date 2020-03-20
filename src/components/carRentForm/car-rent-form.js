/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react';

class CarRentForm extends React.component{
  constructor(props){
    super(props);
    this.state = {
      url: 'the backend url',
    };
  }

 handleClick = async e => {
   e.preventDefault();
   let raw = await fetch(this.state.url);
   let APIData = await raw.json();
   this.props.apiList(this.state.url);
   this.props.update(APIData);
 };

 APICall = e => {
   let user = e.target.value;
   let email = e.target.value;
   let car = e.target.value;
   let dailyRentTime = e.target.value;
   let dateOut = e.target.value;
   let payment = e.target.value;
            
   this.setState({user, email, car, dailyRentTime, dateOut, payment});
 };
 render(){
   return(
     <form onsubmit={this.handleClick}>
       <input type='text' className='useInput' name='user' placeholder='please enter your name' onChange={this.APICall} />
       <input type='text' className='useInput' name='email' placeholder='please enter your email' onChange={this.APICall} /> 
       <input type='text' className='useInput' name='car' placeholder='please choose your car' onChange={this.APICall} /> 
       <input type='text' className='useInput' name='dailyRentTime' placeholder='please enter when you want to rent' onChange={this.APICall} /> 
       <input type='text' className='useInput' name='dateOut' placeholder='please enter when you want to return the car' onChange={this.APICall} />
       <input type='text' className='useInput' name='payment' placeholder='please enter your payment method' onChange={this.APICall} />

       <button className='submit' type='submit'>Go Rent!!</button>
     </form>
   );
 }
}

export default CarRentForm;
