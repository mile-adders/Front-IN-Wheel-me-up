/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import Axios from 'axios';

class CarCompanyForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      carName: '',
      brand: '',
      type: '',
      year: '',
      dateAvailable: '',
      priceForRent: '',
      posts: [],
      errMsg: '',
    };
  }

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('State:', this.state);
    Axios.post('https://wheel-me-up-m.herokuapp.com/api/v1/car-company')
      .then(response => {
        console.log('response:', response);
        this.setState({posts: response.data});
      })
      .catch(error => {
        console.log(error);
        this.setState({errMsg: 'Error Retrieving Data'});
      });
  }

  componentDidMount(){
    Axios.get('https://wheel-me-up-m.herokuapp.com/api/v1/car-company')
      .then(response => {
        console.log('response:', response);
        this.setState({posts: response.data});
      })
      .catch(error => {
        console.log(error);
        this.setState({errMsg: 'Error Retrieving Data'});
      });
  }
  render() {
    const {name, brand, type, year, dateAvailable, priceForRent, posts, errMsg} = this.state;
    return (
      <div>
          Car-Company Schema
        <form onSubmit={this.handleSubmit}>
          <input type='text' className='useInput' name='name' value={name} placeholder='Please Enter the Company Name' onChange={this.handleChange} />
          <input type='text' className='useInput' name='brand' value={brand} placeholder='Please Enter The car brand' onChange={this.handleChange} />
          <input type='text' className='useInput' name='type' value={type} placeholder='Please Enter the wanted car type' onChange={this.handleChange} />
          <input type='text' className='useInput' name='year' value={year} placeholder='Please Enter the car manufacture year' onChange={this.handleChange} />
          <input type= 'date' className='useInput' name='dateAvailable ' value={dateAvailable } placeholder='Please Enter the available dates' onChange={this.handleChange} />
          <input type='text' className='useInput' name='priceForRent' value={priceForRent} placeholder='Please Enter the price' onChange={this.handleChange} />

          <button type='submit'>Go!</button>
        </form>
        <div>
          <div className='results'>
        Cars available
            {
              posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null
            }
            { errMsg ? <div>{errMsg}</div> : null}
          </div>
        </div>
      </div>
    );
  }
}

export default CarCompanyForm;
