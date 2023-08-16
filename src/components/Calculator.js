import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  return (
    <div className="calculator-container">
      <div className="calculator-info">
        <p className="math-text">Let&apos;s do some Maths</p>
      </div>
      <div className="calculator">
        <div className="display">{calculatorData.next || calculatorData.total || '0'}</div>
        {/* Buttons */}
        <Button text="AC" color="gray" onClick={() => handleButtonClick('AC')} />
        <Button text="+/-" color="gray" onClick={() => handleButtonClick('+/-')} />
        <Button text="%" color="gray" onClick={() => handleButtonClick('%')} />
        <Button text="÷" color="orange" onClick={() => handleButtonClick('÷')} />
        <Button text="7" onClick={() => handleButtonClick('7')} />
        <Button text="8" onClick={() => handleButtonClick('8')} />
        <Button text="9" onClick={() => handleButtonClick('9')} />
        <Button text="×" color="orange" onClick={() => handleButtonClick('x')} />
        <Button text="4" onClick={() => handleButtonClick('4')} />
        <Button text="5" onClick={() => handleButtonClick('5')} />
        <Button text="6" onClick={() => handleButtonClick('6')} />
        <Button text="-" color="orange" onClick={() => handleButtonClick('-')} />
        <Button text="1" onClick={() => handleButtonClick('1')} />
        <Button text="2" onClick={() => handleButtonClick('2')} />
        <Button text="3" onClick={() => handleButtonClick('3')} />
        <Button text="+" color="orange" onClick={() => handleButtonClick('+')} />
        <Button text="0" color="zero" onClick={() => handleButtonClick('0')} />
        <Button text="." onClick={() => handleButtonClick('.')} />
        <Button text="=" color="orange" onClick={() => handleButtonClick('=')} />
      </div>
    </div>
  );
}

export default Calculator;
