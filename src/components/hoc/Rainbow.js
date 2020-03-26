/* eslint-disable no-unused-vars */
import React from 'react';

const Rainbow = (WrappedComponent) => {

  const colours = ['red', 'blue', 'orange', 'green', 'yellow', 'purple'];
  const randomColour = colours[Math.floor(Math.random() * 5)];
  const className = randomColour + '-text';

  return (props) => {
    return (
      <div className={className}>
        <WrappedComponent {...props} />
      </div>
    );
  };

};

export default Rainbow;