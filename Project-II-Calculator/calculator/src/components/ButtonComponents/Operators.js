import React from "react";
import "./Button.css";

const OperatorArray = ["%", "x", "-", "+", "="]

const Operators = () => {
  return (
    <div className="operator-container">
      {OperatorArray.map(symbol => {
        return <button className="operator-styles">{symbol}</button>
      })}
    </div>
  );
}

export default Operators;