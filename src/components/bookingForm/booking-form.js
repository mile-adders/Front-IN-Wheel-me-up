/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { loggerContext } from '../auth/context';

const If = props => {
  return props.condition ? props.children : null;
};

export default function BookingForm(props) {
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [car, setCar] = useState('');
  const [posts, setPosts] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  

  let handleSubmit = e => {
    e.preventDefault();
    let state = {'pickupLocation': pickupLocation, 'pickupDate': pickupDate, 'dropOffDate': dropOffDate, 'car': car};
    console.log('state', state);
    axios.post('https://wheel-me-up-m.herokuapp.com/api/v1/user-car', state)
      .then(response => {
        console.log('response', response);
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
        setErrMsg('Error retrieving data');
      });
  };

  useEffect(() => {
    axios.get('https://wheel-me-up-m.herokuapp.com/api/v1/user-car')
      .then(response => {
        console.log('response:', response);
        setPosts(response.data);
      })
      .catch(error => {
        console.log(error);
        setErrMsg('Error retrieving Data');
      });    return () => {
      console.log('error');
    };
  }, []);

  return (
    <div>
      <If condition={loggerContext.loggedIn}>
      car rent form
        <form onSubmit={handleSubmit}>
          <input type='text' className='useInput' name='pickupLocation' value={pickupLocation} placeholder='Pickup Location' onChange={(e) => setPickupLocation(e.target.value)} /> 
          <input type='date' className='useInput' name='pickupDate' value={pickupDate} placeholder='Pickup Date' onChange={(e) => setPickupDate(e.target.value)} /> 
          <input type='date' className='useInput' name='dropOffDate' value={dropOffDate} placeholder='Drop off Date' onChange={(e) => setDropOffDate(e.target.value)} />
          <input type='text' className='useInput' name='car' value={car} placeholder='car' onChange={(e) => setCar(e.target.value)} /> 

          <button className='submit' type='submit'>Go Rent!!</button>
        </form>
      </If>
      <If condition={!loggerContext.loggedIn}>
        <div>
          <div className='results'>
        Cars available
            {
              posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null
            }
            { errMsg ? <div>{errMsg}</div> : null}
          </div>
        </div>
      </If>
    </div>
  );
}

