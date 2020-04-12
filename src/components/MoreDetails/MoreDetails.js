/* eslint-disable no-unused-vars */
import React from 'react';

export default function MoreDetails() {
  return (
    <div >
      <div className='comfort'>
        <div>
          <div className='number' data-aos='fade-right'>.01</div>
          <h2 className='detail' data-aos='fade-right'>Comfort</h2> 
          <h3 className='modeDetails' data-aos='fade-right'>Pick, take, and drop.</h3>
          <div className='blueLine' data-aos='fade-right'></div>
          <div className='paragraph' data-aos='fade-left'>Wheel Me Up provides the user with the smoothest and most comforting process for renting a car, booking a car is as easy as opening your device, sign up, and fill a simple form.</div>
          <img className='detailsImg' src={require('./assets/politics.svg')} data-aos='fade-up' alt='politics'/>
          <img className='detailsImg' src={require('./assets/car-rental.svg')} data-aos='fade-down' alt='rent'/>
          <img className='detailsImg' src={require('./assets/valet-parking.svg')} data-aos='fade-up' alt='valet'/>
        </div>
      </div>

      <div className='closer'>
        <div>
          <div className='number' data-aos='fade-right'>.02</div>
          <h2 className='detail' data-aos='fade-right'>Closer to people</h2> 
          <h3 className='modeDetails' data-aos='fade-right'>Book, meet, and make new friends.</h3>
          <div className='blueLine' data-aos='fade-right'></div>
          <div className='paragraph' data-aos='fade-left'>Since There is no evil corporations, and all the renting is with ordinary people. Out with the paper work and hello to new friends.</div>
        </div>
        <img className='detailsImg2' src={require('./assets/calendar.svg')} data-aos='fade-up' alt='calender'/>
        <img className='detailsImg2' src={require('./assets/meet.svg')} data-aos='fade-down' alt='meet'/>
        <img className='detailsImg2' src={require('./assets/frienship.svg')} data-aos='fade-up' alt='friends'/>
      </div>

      <div className='deal'>
        <div>
          <div className='number' data-aos='fade-right'>.03</div>
          <h2 className='detail' data-aos='fade-right'>Better deals</h2> 
          <h3 className='modeDetails' data-aos='fade-right'>Ride, pay, and save.</h3>
          <div className='blueLine' data-aos='fade-right'></div>
          <div className='paragraph' data-aos='fade-left'>We believe that our users, should pay the right price, since wheel me up is against evil corporations, that adds unnecessary charges, wheel me up assures the user, the best deal possible, also it is a way to give back to the community that helped us grow.</div>
        </div>
        <img className='detailsImg2' src={require('./assets/shift.svg')} data-aos='fade-up' alt='car shift'/>
        <img className='detailsImg2' src={require('./assets/pay.svg')} data-aos='fade-down' alt='pay'/>
        <img className='detailsImg2' src={require('./assets/money.svg')} data-aos='fade-up' alt='money'/>
      </div>
    </div>
  );
}
