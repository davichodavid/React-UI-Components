import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import ZeroButton from './components/ButtonComponents/ZeroButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Operators from './components/ButtonComponents/Operators'

const NumArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9",];
const action = ["Clear", "0"];

const App = () => {
  return (
    <div className="app-styles">
      <h2>Propless Calculator</h2>
      <CalculatorDisplay />
      <div className="numbers-operators">
        <div>
          <ActionButton clearButton={action} />
          <NumberButton numberButton={NumArray} />
          <ZeroButton zeroButton={action} />
        </div>
        <Operators />
      </div>
    </div>
  )
};

export default App;
