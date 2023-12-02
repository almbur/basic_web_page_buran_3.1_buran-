import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css'; // Import the CSS file

const ProductList = () => {
  const products = [
    { id: 1, name: 'Product A', price: 25, image: '../images/image_2.jpeg' },
    { id: 2, name: 'Product B', price: 30, image: '../images/image_3.jpeg' },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <Link to={`/product/${product.id}`}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;