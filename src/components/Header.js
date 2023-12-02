// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ backgroundColor: '#333', padding: '10px 0' }}>
      <nav style={{ textAlign: 'center' }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ display: 'inline-block', marginRight: '20px' }}>
            <Link to="/" style={{ textDecoration: 'none', color: '#fff', padding: '10px 20px', borderRadius: '5px', transition: 'background-color 0.3s ease-in-out', backgroundColor: '#2196F3' }}>Home</Link>
          </li>
          <li style={{ display: 'inline-block', marginRight: '20px' }}>
            <Link to="/products" style={{ textDecoration: 'none', color: '#fff', padding: '10px 20px', borderRadius: '5px', transition: 'background-color 0.3s ease-in-out', backgroundColor: '#FF9800' }}>Products</Link>
          </li>
          <li style={{ display: 'inline-block' }}>
            <Link to="/about" style={{ textDecoration: 'none', color: '#fff', padding: '10px 20px', borderRadius: '5px', transition: 'background-color 0.3s ease-in-out', backgroundColor: '#E91E63' }}>About Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
