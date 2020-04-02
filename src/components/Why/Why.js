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
      <div className='whyParagraph'>Giving Back to the community, the community the helped us grow. Wheel Me Up is a solution to a small problem, this problem is high rental fees, solving small problems like this one, helps the community a little bit, Wheel Me Up is just the first piece of the puzzle.</div>
      
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
        href="/login"
        size="lg"
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
      >
        {isLoading ? 'Welcome' : 'Log In'}
      </Button>
    </div>
  );
}
