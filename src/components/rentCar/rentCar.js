/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { loggerContext } from '../auth/context.js';
import Header from '../Header/Header';
import Footer from '../Footer/Footer.js';

const API = 'https://wheel-me-up-m.herokuapp.com';

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
  const [location, setLocation] = useState('');
  const [posts, setPosts] = useState({});
  const [errMsg, setErrMsg] = useState('');
  const [results, setResults] = useState([]);
  const [showCars, setShowCars] = useState(false);

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
      let info = await output.text();
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

      let data = JSON.parse(await getData.text());
      setResults([...results, data]);


    } catch{
      console.error();
    }
    setShowCars(true);
  };
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

  let carsAvailable =  <div className='showCars'>
    <h2 className='allCars' >Cars available</h2>
    {
      results.length > 0 && results.map(car => {
        return <div key={car.id} className='results'>
      
          <ul className='cars'>
            <div className='eachCar'>
              <img className='carImg' src={car.carImage_URL} alt='car'/>
              <li className='carInfo'> car {car.carName}</li>
              <li className='carInfo'> car Brand : {car.brand}</li>
              <li className='carInfo'> car Type : {car.carType} </li>
              <li className='carInfo'> year {car.year}</li>
              <li className='carInfo'> Date Available{car.dateAvailable}</li>
              <li className='carInfo'> Price for day {car.priceForRent}</li>
              <li className='carInfo'> Pick up location{car.location}</li>
              <button className='updateButton' type='submit'>update car information </button>
              <button className='deleteButton' type='submit'>delete car information </button>
            </div>

          </ul>

        </div>;
      })
    }
  </div>;
 
  let cars = (showCars) ? carsAvailable : null;

  return (
    <div className='bookingDiv'>
      <Header />
      <div className='rentDiv' id='carRent'>
        <h2 className='renting'>Add A Car To Rent</h2>
        <form onSubmit={handleSubmit} className='bookingForm'>
          <div className='form'>
            <input type='text' className='useInput' name='carName' required value={carName} onChange={(e) => setCarName(e.target.value)} />
            < label for='carName' className='label-name'> <span className='content-name'>Car name</span>
            </label>
          </div>
        
          <div className='form'>
            <input type='text' className='useInput' name='brand' required value={brand} onChange={(e) => setBrand(e.target.value)} />
            < label for='brand' className='label-name'> <span className='content-name'>Brand</span>
            </label>
          </div>

          <div className='form'>
            <input type='text' className='useInput' name='type' required value={type} onChange={(e) => setType(e.target.value)} />
            < label for='type' className='label-name'> <span className='content-name'>Type</span>
            </label>
          </div>

          <div className='form'>
            <input type='text' className='useInput' name='year' required value={year} onChange={(e) => setYear(e.target.value)} />
            < label for='year' className='label-name'> <span className='content-name'>Year</span>
            </label>
          </div>

          <div className='dateInput'>
            <label>Date available
              <input type='date' name='dateAvailable' value={dateAvailable} placeholder='Pickup Date' onChange={(e) => setDateAvailable(e.target.value)} />
            </label>
          </div>

          <div className='form'>
            <input type='text' className='useInput' name='priceForRent' required value={priceForRent} onChange={(e) => setPriceForRent(e.target.value)} />
            < label for='Price For Rent' className='label-name'> <span className='content-name'>Price For Rent</span>
            </label>
          </div>

          <div className='form'>
            <input type='url' className='useInput' name='carImage_URL' required value={carImageUrl} onChange={(e) => setCarImageUrl(e.target.value)} />
            < label for='carImage_URL' className='label-name'> <span className='content-name'>Image URL</span>
            </label>
          </div>

          <div className='form'>
            <input type='text' className='useInput' name='location' required value={location} onChange={(e) => setLocation(e.target.value)} />
            < label for='location' className='label-name'> <span className='content-name'> Pick Up Location</span>
            </label>
          </div>

          <div className='form'>
            <input type='hidden' className='useInput' name='id' value={posts._id} />
            {/* < label for='Price For Rent' className='label-name'> <span className='content-name'>Price For Rent</span>
          </label> */}
          </div>

          <div className='submitButton'>
            <button  className='submit' type='submit'>Add Car</button>
          </div> 

        </form>
        <div>
          {cars}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CarCompanyForm;