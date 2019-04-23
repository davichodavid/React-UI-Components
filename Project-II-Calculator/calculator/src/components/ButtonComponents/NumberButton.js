import React from 'react';
import './Button.css';

const NumArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const NumberButton = () => {
  return (
    NumArray.map(num => {
      return <button className={props.buttonStyle}> {props.text} </button>
    })
  );
}

export default NumberButton;