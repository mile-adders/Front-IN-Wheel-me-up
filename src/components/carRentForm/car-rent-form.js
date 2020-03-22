/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import axios from 'axios';

class CarRentForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      user: '',
      email: '',
      car: '',
      dailyRentTime: '',
      dateOut: '',
      payment: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('state', this.state);
    axios.post('https://wheel-me-up-m.herokuapp.com/api/v1/user-car', this.state)
      .then(response => {
        console.log('response', response);
        this.setState({posts: response.data});
      })
      .catch(error => {
        console.error();
        this.setState({errMsg: 'Error retrieving data'});
      });
  }

  render() {
    const {user, email, car, dailyRentTime, dateOut, payment} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' className='useInput' name='user' value={user} placeholder='please enter your name' onChange={this.handleChange} />
          <input type='text' className='useInput' name='email' value={email} placeholder='please enter your email' onChange={this.handleChange} /> 
          <input type='text' className='useInput' name='car' value={car} placeholder='please choose your car' onChange={this.handleChange} /> 
          <input type='text' className='useInput' name='dailyRentTime' value={dailyRentTime} placeholder='please enter when you want to rent' onChange={this.handleChange} /> 
          <input type='text' className='useInput' name='dateOut' value={dateOut} placeholder='please enter when you want to return the car' onChange={this.handleChange} />
          <input type='text' className='useInput' name='payment' value={payment} placeholder='please enter your payment method' onChange={this.handleChange} />

          <button className='submit' type='submit'>Go Rent!!</button>
        </form>
      </div>
    );
  }
}

export default CarRentForm;



