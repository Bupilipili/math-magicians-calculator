import React from 'react';
import './App.css';
import {
  BrowserRouter as Router, Route, Routes, Link,
} from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import QuoteDisplay from './components/QuoteDisplay';

function App() {
  return (
    <Router>
      <nav className="navbar">
        <div className="title">Math Magicians</div>
        <ul className="nav-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/calculator">Calculator</Link>
          </li>
          <li>
            <Link to="/quote">Quote</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/quote" element={<QuoteDisplay />} />
      </Routes>
    </Router>
  );
}

export default App;
