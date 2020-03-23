/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const CarCompanyForm= (props) => {
  const [carName, setCarName] = useState('');
  const [brand, setBrand] = useState('');
  const [type, setType] = useState('');
  const [year, setYear] = useState('');
  const [dateAvailable, setDateAvailable] = useState('');
  const [priceForRent, setPriceForRent] = useState('');
  const [posts, setPosts] = useState([]);
  const [errMsg, setErrMsg] = useState('');

  let handleSubmit = e => {
    e.preventDefault();
    console.log('State:', {'carName': carName, 'brand': brand, 'type': type, 'year': year, 'dateAvailable': dateAvailable, 'priceForRent': priceForRent});
    Axios.post('https://wheel-me-up-m.herokuapp.com/api/v1/car-company')
      .then(response => {
        console.log('response:', response);
        this.setState({posts: response.data});
      })
      .catch(error => {
        console.log(error);
        setErrMsg('Error retrieving data');
      });
  };

  useEffect(() => {
    Axios.get('https://wheel-me-up-m.herokuapp.com/api/v1/car-company')
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
          Car-Company Schema
      <form onSubmit={handleSubmit}>
        <input type='text' className='useInput' name='carName' value={carName} placeholder='car name' onChange={(e)=> setCarName(e.target.value)} />
        <input type='text' className='useInput' name='brand' value={brand} placeholder='Brand' onChange={(e)=> setBrand(e.target.value)} />
        <input type='text' className='useInput' name='type' value={type} placeholder='car type' onChange={(e)=> setType(e.target.value)} />
        <input type='text' className='useInput' name='year' value={year} placeholder='manufacturing year' onChange={(e) => setYear(e.target.value)} />
        <input type= 'date' className='useInput' name='dateAvailable ' value={dateAvailable } placeholder='Dates Available' onChange={(e) => setDateAvailable(e.target.value)} />
        <input type='text' className='useInput' name='priceForRent' value={priceForRent} placeholder='price' onChange={(e)=> setPriceForRent(e.target.value)} />

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
};

export default CarCompanyForm;