import './Calculator.css';
import Button from './Button';

const Calculator = () => (
  <div className="calculator">
    <div className="display">0</div>
    <Button text="AC" color="gray" />
    <Button text="+/-" color="gray" />
    <Button text="%" color="gray" />
    <Button text="÷" color="orange" />
    <Button text="7" />
    <Button text="8" />
    <Button text="9" />
    <Button text="×" color="orange" />
    <Button text="4" />
    <Button text="5" />
    <Button text="6" />
    <Button text="-" color="orange" />
    <Button text="1" />
    <Button text="2" />
    <Button text="3" />
    <Button text="+" color="orange" />
    <Button text="0" color="zero" />
    <Button text="." />
    <Button text="=" color="orange" />
  </div>
);

export default Calculator;
