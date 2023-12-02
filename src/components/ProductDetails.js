// ProductDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import './ProductList.css'; // Import the CSS file

const ProductDetails = () => {
  const { productId } = useParams();

  // Fetch product details based on productId from an API or use static data
  const product = { id: 1, name: 'Product A', price: 25, image: '../images/image_2.jpeg', description: 'Air Jordan 11 "Gratitude"' };
  const product_1 = { id: 2, name: 'Product B', price: 30, image: '../images/image_3.jpeg', description: 'Air New Fly 123 "WiFi"' };

  const selectedProduct = productId === '1' ? product : product_1;

  return (
    <div className="product-details">
      <img src={selectedProduct.image} alt={selectedProduct.name} />
      <h2>{selectedProduct.name}</h2>
      <p>${selectedProduct.price}</p>
      <p>{selectedProduct.description}</p>
    </div>
  );
};

export default ProductDetails;
