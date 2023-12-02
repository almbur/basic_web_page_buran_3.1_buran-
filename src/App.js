// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import Home from './components/Home'; // Import the new Home component
import About from './components/About'; // Import the new About component

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> {/* New route for Home component */}
          <Route path="/products" element={<ProductList />} />
          <Route path="/about" element={<About />} /> {/* New route for About component */}
          <Route path="/product/:productId" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
