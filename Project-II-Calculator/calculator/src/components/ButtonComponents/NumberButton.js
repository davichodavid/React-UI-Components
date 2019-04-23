import React from 'react';
import './Button.css';

const NumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberButton = props => {
  return (
    <div className="number-container">
      {NumArray.map(num => {
        return <button className="button-styles">{num}</button>
      })}
    </div>
  );
}

export default NumberButton;