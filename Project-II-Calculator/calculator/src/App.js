import React from 'react';
import './App.css';

import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Operators from './components/ButtonComponents/Operators'

const App = () => {
  return (
    <div className="app-styles">
      <CalculatorDisplay />
      <div className="numbers-operators">
        <div>
          <ActionButton />
          <NumberButton />
          <ActionButton />
        </div>
        <Operators />
      </div>
    </div>
  )
};

export default App;
