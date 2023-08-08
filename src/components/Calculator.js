import React from 'react';
import './Calculator.css';

const Calculator = () => (
  <div className="calculator">
    <div className="display">0</div>
    <button className="button gray" type="button">AC</button>
    <button className="button gray" type="button">+/-</button>
    <button className="button gray" type="button">%</button>
    <button className="button orange" type="button">÷</button>
    <button className="button" type="button">7</button>
    <button className="button" type="button">8</button>
    <button className="button" type="button">9</button>
    <button className="button orange" type="button">×</button>
    <button className="button" type="button">4</button>
    <button className="button" type="button">5</button>
    <button className="button" type="button">6</button>
    <button className="button orange" type="button">-</button>
    <button className="button" type="button">1</button>
    <button className="button" type="button">2</button>
    <button className="button" type="button">3</button>
    <button className="button orange" type="button">+</button>
    <button className="button zero" type="button">0</button>
    <button className="button" type="button">.</button>
    <button className="button orange" type="button">=</button>
  </div>
);

export default Calculator;
