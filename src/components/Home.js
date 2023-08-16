import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Math Magicians</h1>
      <p>Explore our calculator and get inspired by daily quotes!</p>
      <div className="cta-buttons">
        <Link to="/calculator" className="cta-button">Go to Calculator</Link>
        <Link to="/quote" className="cta-button">Go to Quote</Link>
      </div>
    </div>
  );
}

export default Home;
