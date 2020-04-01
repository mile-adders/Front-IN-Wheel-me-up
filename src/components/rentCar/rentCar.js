import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { loggerContext } from '../auth/context.js';

const API = 'https://wheel-me-up-m.herokuapp.com'


const If = props => {
  return props.condition ? props.children : null;
};


const CarCompanyForm = (props) => {
  const [carName, setCarName] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [dateAvailable, setDateAvailable] = useState('');
  const [priceForRent, setPriceForRent] = useState('');
  const [carImageUrl, setCarImageUrl] = useState('');
  const [location, setlocation] = useState('');
  const [posts, setPosts] = useState({});
  const [errMsg, setErrMsg] = useState('');
  const [results, setResults] = useState([]);

  let handleSubmit = async e => {
    e.preventDefault();
    let state = { 'carName': carName, 'brand': brand, 'carType': type, 'year': year, 'dateAvailable': dateAvailable, 'priceForRent': priceForRent, 'pickupLocation': location, 'carImage_URL': carImageUrl };
    
    try {
      let output = await fetch(`${API}/api/v1/car-company`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        body: JSON.stringify(state),
      });
      let info = await output.text()
      setPosts(info);
      let parsingInfo = JSON.parse(info);

      let getData = await fetch(`${API}/api/v1/car-company/${parsingInfo._id}`, {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'get',
        mode: 'cors',
        cache: 'no-cache',
        body: null,
      });

      let data = JSON.parse(await getData.text())
      setResults([...results, data])


    } catch{
      console.error()
    }

  }
      // let handleUpdate = async e => {
      //   e.preventDefault();
      //   let updateDta = await fetch(`${API}/api/v1/car-company/${posts._id}`, {
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     method: 'put',
      //     mode: 'cors',
      //     cache: 'no-cache',
      //     body: JSON.stringify(state),
      //   });
      //   let data = JSON.parse(await getData.text())
      //   setResults([...results, data])
      //   console.log('results', results)
      // }
 


  return (
    <div>
      Car-Company Schema
      
     
      <form onSubmit={handleSubmit}>
        <input type='text' className='useInput' name='carName' value={carName} placeholder='car name' onChange={(e) => setCarName(e.target.value)} />
        <input type='text' className='useInput' name='brand' value={brand} placeholder='Brand' onChange={(e) => setBrand(e.target.value)} />
        <input type='text' className='useInput' name='type' value={type} placeholder='car type' onChange={(e) => setType(e.target.value)} />
        <input type='text' className='useInput' name='year' value={year} placeholder='manufacturing year' onChange={(e) => setYear(e.target.value)} />
        <input type='date' className='useInput' name='dateAvailable ' value={dateAvailable} placeholder='Dates Available' onChange={(e) => setDateAvailable(e.target.value)} />
        <input type='text' className='useInput' name='priceForRent' value={priceForRent} placeholder='price' onChange={(e) => setPriceForRent(e.target.value)} />
        <input type='url' className='useInput' name='carImage_URL' value={carImageUrl} placeholder='Car Image URL' onChange={(e) => setCarImageUrl(e.target.value)} />
        <input type='text' className='useInput' name='location' value={location} placeholder=' pick up Location' onChange={(e) => setlocation(e.target.value)} />
        <input name='_Id' type='hidden' value = {posts._id} />

        <button type='submit'>Rent a car</button>

      </form>
      <div>
        <div className='results'>
          Cars available
            {
              results.length > 0 && results.map(car => {
                return <div key={car.id}>
                  <ul>

                 <li> car {car.carName}</li>
                <img src={car.carImage_URL} width='300' height='300' />
                <li> car Brand : {car.brand}</li>
                <li> car Type : {car.carType} </li>
                <li> year {car.year}</li>
                <li> Date Available{car.dateAvailable}</li>
                <li> Price for day {car.priceForRent}</li>
                <li> Pick up location{car.location}</li>
                <button   type='submit'>update car information </button>
                <button   type='submit'>delete car information </button>

                  </ul>

              </div>
            })
          }
          {/* // { errMsg ? <div>{errMsg}</div> : null} */}
        </div>
      </div>
    </div>
  );
};

export default CarCompanyForm;