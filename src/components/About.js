// About.js
import React from 'react';
import './About.css'; 

const About = () => {
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>
        Welcome to our online store! We are dedicated to providing high-quality products and exceptional customer service.
      </p>

      <div className="contact-section">
        <strong>Contact Information:</strong><br />
        Email: info@example.com<br />
        Phone: (123) 456-7890
      </div>

      <div className="address-section">
        <strong>Address:</strong><br />
        123 Main Street, Cityville, State, 12345
      </div>

      <p>
        At XYZ Store, our commitment is to offer a diverse range of products to meet your needs. Whether you are looking for
        the latest gadgets, stylish apparel, or home essentials, we've got you covered.
      </p>

      <div className="concept-section">
        <strong>Customer Service:</strong><br />
        Our friendly customer service team is available to assist you Monday to Friday, 9 AM - 5 PM.
        <br /><br />
        <strong>Sales Business Concept:</strong><br />
        We believe in providing a seamless shopping experience. Our business concept revolves around offering quality products
        at competitive prices while prioritizing customer satisfaction. Your happiness is our success!
      </div>
    </div>
  );
};

export default About;
