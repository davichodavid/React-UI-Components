import React from 'react';
import './Button.css';

const ZeroButton = (props) => {
  return (
    <div>
      <button className="zero-clear">{props.zeroButton[1]}</button>
    </div>
  );
}

export default ZeroButton;