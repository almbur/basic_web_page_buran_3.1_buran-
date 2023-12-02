import React from 'react';
import '../components/ProductList.css'




const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to our Online Store!</h2>
      <p>
        Discover a wide range of quality products at <span className="highlight">affordable prices</span>. 
        Explore the latest trends and find the perfect items for your lifestyle.
      </p>
      <button className="explore-button">Explore Now</button>
    </div>
  );
};

export default Home;