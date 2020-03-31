/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import style from './Why.scss';
function simulateNetworkRequest() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}
  
export default function Why() {

  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  }, [isLoading]);
  
  const handleClick = () => setLoading(true);
    
  return (
    <div className='why'>
      <div className='whyWMU' data-aos='fade-up'>Why Wheel Me Up?</div>
      <div className='whyUnderLine' data-aos='fade-right'></div>
      <div className='whyLeftLine' ></div>
      <div className='whyRightLine' ></div>
      <div className='whyParagraph'>Giving Back to the community, connect them together, by creating multiple application that work to create a bond between them all. rewriting.. it later.</div>
      
      <div className='whyUnderLine1' data-aos='fade-left'></div>



      <Button 
        variant="primary"
        href="/signup"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Welcome' : 'Sign Up'}
      </Button>

      <Button 
        variant="secondary"
        href="/signin"
        size="lg"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Welcome' : 'Log In'}
      </Button>
    </div>
  );
}
