import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/QuoteDisplay';

function App() {
  return (
    <div className="app">
      <Calculator />
      <QuoteDisplay />
    </div>
  );
}

export default App;
