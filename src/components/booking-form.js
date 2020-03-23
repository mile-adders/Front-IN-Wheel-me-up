import React, { Component } from 'react';
import axios from 'axios';
 let api = 'http://localhost:3000';
class BookingCar extends Component {
  constructor(props){
    super(props);

    this.state = {
      PickUpLocation:'',
      PickUpDate: '',
      DropOffDate: '',
      posts: [],
      errMsg: '',
        };
  }
  
 

  handleChange = e => {
    this.setState({[e.target.name]: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log('state', this.state);
    axios.Post(`${api}/v1/user-car`, this.state)
      .then(response => {
        console.log('response', response);
        this.setState({posts: response.data});
      })
      .catch(error => {
        console.error();
        this.setState({errMsg: 'Error retrieving data'});
      });
  }

  componentDidMount(){
   axios.get('http://localhost:3000/api/v1/car-company')
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
    const {PickUpLocation, PickUpDate, DropOffDate, posts, errMsg} = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          
          <input type='text' className='useInput' name=' PickUpLocation' value={ PickUpLocation} placeholder='please choose your location' onChange={this.handleChange} /> 
          <input type='text' className='useInput' name='PickUpDate' value={PickUpDate} placeholder='please enter when you want to rent' onChange={this.handleChange} /> 
          <input type='text' className='useInput' name='DropOffDate' value={DropOffDate} placeholder='please enter when you want to return the car' onChange={this.handleChange} />
          

          <button className='submit' type='submit'>continue</button>
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

export default BookingCar;