/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function BookingForm(props) {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [car, setCar] = useState('');
  const [dailyRentTime, setDailyRentTime] = useState('');
  const [dateOut, setDateOut] = useState('');
  const [payment, setPayment] = useState('');
  const [posts, setPosts] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  

  let handleSubmit = e => {
    e.preventDefault();
    console.log('state', {'user': user, 'email': email, 'car': car, 'dailyRentTime': dailyRentTime, 'dateOut': dateOut, 'payment':payment});
    axios.post('https://wheel-me-up-m.herokuapp.com/api/v1/user-car')
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
        car rent form
      <form onSubmit={handleSubmit}>
        <input type='text' className='useInput' name='user' value={user} placeholder='user' onChange={(e) => setUser(e.target.value)} />
        <input type='text' className='useInput' name='email' value={email} placeholder='email' onChange={(e) => setEmail(e.target.value)} /> 
        <input type='text' className='useInput' name='car' value={car} placeholder='car' onChange={(e) => setCar(e.target.value)} /> 
        <input type='text' className='useInput' name='dailyRentTime' value={dailyRentTime} placeholder='please enter when you want to rent' onChange={(e) => setDailyRentTime(e.target.value)} /> 
        <input type='text' className='useInput' name='dateOut' value={dateOut} placeholder='please enter when you want to return the car' onChange={(e) => setDateOut(e.target.value)} />
        <input type='text' className='useInput' name='payment' value={payment} placeholder='please enter your payment method' onChange={(e) => setPayment(e.target.value)} />

        <button className='submit' type='submit'>Go Rent!!</button>
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

