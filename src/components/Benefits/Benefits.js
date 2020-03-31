/* eslint-disable no-unused-vars */
import React from 'react';

export default function Benefits() {
  return (
    <div className='benefits'>
      <ul className='unordered'>
        <li className='element' data-aos='fade-right'>
          <div className='num'>.01</div>
          <div className='line'></div>
          <div className='inside'>
            <h3>Comfort</h3>
          All the hassle of renting a car, now can be done from the comfort of your home, or the hell of airports
          </div>
        </li>
        <li className='element' data-aos='fade-up'>
          <div className='num'>.02</div>
          <div className='line'></div>
          <div className='inside'>
            <h3>Closer to the people</h3>
          help the community to grow Closer
          </div>
        </li>
        <li className='element' data-aos='fade-left'>
          <div className='num'>.03</div>
          <div className='line'></div>
          <div className='inside'>
            <h3>Better Deals</h3>
          No More over-charged cars.
          </div>
        </li>
      </ul>
    </div>
  );
}
