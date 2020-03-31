/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import animationData from '../../3532-car.json';
import App from '../app/app.js';
import './lottie.scss';

const Loading = () => {



  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => { setIsLoading(false); }, [isLoading]);

  return (isLoading ? (  <Lottie options={defaultOptions}height={400} width={400}/>) :   (<App />) );

};


export default Loading;