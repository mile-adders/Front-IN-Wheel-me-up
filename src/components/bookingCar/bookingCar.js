import React, { useState, useEffect } from 'react';
import { loggerContext } from '../auth/context';

const If = props => {
  return props.condition ? props.children : null;
};

const API = 'https://wheel-me-up-m.herokuapp.com'

export default function BookingForm(props) {
  const [pickupLocation, setPickupLocation] = useState('');
  const [pickupDate, setPickupDate] = useState('');
  const [dropOffDate, setDropOffDate] = useState('');
  const [car, setCar] = useState('');
  const [posts, setPosts] = useState([]);
  const [errMsg, setErrMsg] = useState('');

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
      console.log('output===========?>>>', output)
      let info = await output.text()
      let parsingInfo = JSON.parse(info);
      setPosts(parsingInfo);
      console.log('posts', posts);
      console.log('id', parsingInfo);

      let keys = Object.entries(parsingInfo)
      console.log('keys', keys)

      let allowed = keys.slice(1, 4)

      let arrayOfAllowed = [];

      for (let i = 0; i < allowed.length; i++) {
        let objOfAllowed = {};
        let key = allowed[i][0];
        let value = allowed[i][1];
        Object.assign(objOfAllowed, { [key]:value })
        arrayOfAllowed.push(objOfAllowed)
        // console.log('objof allowed', objOfAllowed)
      }


      console.log(' arrayOfAllowed', arrayOfAllowed)



      let getData = await fetch(`${API}/api/v1/car-company`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'get',
        mode: 'cors',
        cache: 'no-cache',
        body: null,
      });
      let data = JSON.parse(await getData.text())
      console.log('data', data)

        // const filtered = Object.entries(data)
        // console.log('filtered', filtered)
        let results = data.filter(key =>
          
         console.log( arrayOfAllowed.includes(key)))
        console.log ('results', results)
        
      // setResults([...results, data])
      //  console.log ('filtered =>>>>>..' , filtered)
      // console.log('data', data)


    } catch{
      console.error()
    }
  }



  return (
    <div>
      car rent form
      <form onSubmit={handleSubmit}>
        < label> pickupLocation
          <input type='text' className='useInput' name='pickupLocation' value={pickupLocation} placeholder='Pickup Location' onChange={(e) => setPickupLocation(e.target.value)} />
        </label>

        <label> pickupDate
          <input type='date' className='useInput' name='pickupDate' value={pickupDate} placeholder='Pickup Date' onChange={(e) => setPickupDate(e.target.value)} />
        </label>

        <label> dropOffDate
          <input type='date' className='useInput' name='dropOffDate' value={dropOffDate} placeholder='Drop off Date' onChange={(e) => setDropOffDate(e.target.value)} />
        </label>

        <label> car type
          <input type='text' className='useInput' name='carType' value={car} placeholder='car' onChange={(e) => setCar(e.target.value)} />
        </label>


        <button className='submit' type='submit'>Go Rent!!</button>
      </form>

      <div>
        <div className='results'>
          {/* Cars available
            {
              posts.length ? posts.map(post => <div key={post.id}>{post.title}</div>) : null
            }
            { errMsg ? <div>{errMsg}</div> : null} */}
        </div>
      </div>
    </div>
  );
}