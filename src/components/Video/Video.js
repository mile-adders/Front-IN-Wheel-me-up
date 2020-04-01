/* eslint-disable no-unused-vars */
import React from 'react';

const BackgroundVideo = () => {
  const videoSource = 'http://www.clearmotion.com/client/c53beed5fec268ae61bbe257a98e8653.mp4';
  return (
    <div className='Container' >
      <div>
        <div className='head'>
          <h1>Wheel Me Up</h1>
          <h2>Closer to the people, from the people, to the people. No Corporations.</h2>
        </div>
      </div>
      <video autoPlay="autoplay" loop muted className='Video' >
        <source src={videoSource} type="video/mp4" />
      </video>
      <div className='Content' data-aos='fade-up'>
          Wheel me up, Jordan's first car renting application, alters the usual circle of evil large cooperations, controlling the market and apply high rental fees. Wheel Me Up alters this circle by cutting the cutting out the evil Corporations, and replace them with ordinary people how love to help others by renting them their cars when in needs, and with much better deals than those provided by car renting companies. 

          Wheel Me Up, from and to people.   
      </div>
    </div>
  );
};

export default BackgroundVideo;