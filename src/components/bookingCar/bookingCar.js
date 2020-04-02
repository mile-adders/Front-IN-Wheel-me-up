/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { loggerContext } from '../auth/context';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';

const If = props => {
  return props.condition ? props.children : null;
};

const API = 'https://wheel-me-up-m.herokuapp.com';

export default function BookingForm(props) {
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [car, setCar] = useState('');
  const [posts, setPosts] = useState([]);
  const [errMsg, setErrMsg] = useState('');
  const [results , setResults] = useState([]);

  let handleSubmit = async e => {
    e.preventDefault();
    // setPosts({[e.target.name] :e.target.value})
    let state = { 'pickupLocation': pickupLocation, 'dateAvailable': pickupDate, 'carType': car, 'dropOffDate': dropOffDate };

    try {
      let output = await fetch(`${API}/api/v1/user-car`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(state),
      });
      console.log('output===========?>>>', output);
      let info = await output.text();
      let parsingInfo = JSON.parse(info);
      setPosts(parsingInfo);
      console.log('posts', posts);
      console.log('id', parsingInfo);

      let keys = Object.entries(parsingInfo);
      console.log('keys', keys);

      let allowed = keys.slice(1, 4);

      let arrayOfAllowed = [];

      for (let i = 0; i < allowed.length; i++) {
        let objOfAllowed = {};
        let key = allowed[i][0];
        let value = allowed[i][1];
        Object.assign(objOfAllowed, { [key]:value });
        arrayOfAllowed.push(objOfAllowed);
        // console.log('objof allowed', objOfAllowed)
      }


      console.log(' arrayOfAllowed', arrayOfAllowed);



      let getData = await fetch(`${API}/api/v1/car-company`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'get',
        mode: 'cors',
        cache: 'no-cache',
        body: null,
      });
      let data = JSON.parse(await getData.text());
      console.log('data', data);

      ///////////////////
      // arrayOfAllowed 
      // (3) [{…}, {…}, {…}]
      // 0: {pickupLocation: "amman"}
      // 1: {dateAvailable: "2020-05-07T00:00:00.000Z"}
      // 2: {carType: "car"}



      // const filtered = Object.entries(data)
      // console.log('filtered', filtered)
      let results = data.filter(key =>{
        console.log('hi');
        if(
          arrayOfAllowed[0].pickupLocation === key.pickupLocation && arrayOfAllowed[1].dateAvailable=== key.dateAvailable && arrayOfAllowed[2].carType === key.carType 
        ){
          console.log('hi 22222 ');

          return key ;
        }
         
        // setResults([...results, data])
        //  console.log ('filtered =>>>>>..' , filtered)
        // console.log('data', data)
      });
      setResults(results);
      console.log ('results', results);

    } catch{
      console.error();
    }
  };
  useEffect (()=>{

  });



  return (
    <>
      <Header />

      <div className='rentDiv'>
        <h2 className='renting'>Book A Car</h2>
        <form className='rentingForm' onSubmit={handleSubmit}> 
          <div className='form'>
            <input type='text' className='useInput' required name='pickupLocation' value={pickupLocation} onChange={(e) => setPickupLocation(e.target.value)} />
            < label for='pickupLocation' className='label-name'> <span className='content-name'>Pickup Location</span>
            </label>
          </div>
           
          <div className='dateInput'>
            <label> pickup Date
              <input type='date' name='pickupDate' value={pickupDate} placeholder='Pickup Date' onChange={(e) => setPickupDate(e.target.value)} />
            </label>
          </div>

          <div className='dateInput'>
            <label > dropOffDate
              <input type='date'   name='dropOffDate' value={dropOffDate} placeholder='Drop off Date' onChange={(e) => setDropOffDate(e.target.value)} />
            </label>
          </div>
       

          <div className='form'>
            <input type='text' className='useInput' required name='Car Type' value={car} onChange={(e) => setCar(e.target.value)} />
            < label for='pickupLocation' className='label-name'> <span className='content-name'>Car Type</span>
            </label>
          </div> 
          <div className='submitButton'>
            <button  className='submit' type='submit'>Go Rent!!</button>
          </div> 
        </form>
      </div>

      
      <div className='showCars'>
        <h2 className='allCars'>Cars available</h2>
        {
          results.length > 0 && results.map(post => {
            return <div key={post.id}>
              <div className='cars'>
                <div className='eachCar'>
                  <img className='carImg' src={post.carImage_URL} />
                  <div className='carInfo'>{post.carName}</div>
                  <div className='carInfo'>{post.brand}</div>
                  <div className='carInfo'>{post.year}</div>
                  <div className='carInfo'>{post.dateAvailable}</div>
                  <div className='carInfo'>{post.priceForRent}</div>
                  <div className='carInfo'>{post.location}</div>
                  <button className='rentButton' type='submit'> rent car  </button>
                </div>
              </div>
            </div>;
          })
        }
      </div>
      <Footer />
    </>
  );
}