import React from 'react';
import './Button.css';

const ActionButton = (props) => {
  return (
    <div>
      <button className="zero-clear">{props.clearButton[0]}</button>
      {/* <button className="zero-clear">{props.zeroButton[1]}</button> */}
    </div>
  );
}

export default ActionButton;
