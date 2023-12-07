import React from 'react';
import './Contact.css'; // Import the CSS file

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>
        Have questions or need assistance? Reach out to us using the contact information below:
      </p>

      <div className="contact-section">
        <strong>Email:</strong> info@example.com<br />
        <strong>Phone:</strong> (123) 456-7890
      </div>

      <div className="address-section">
        <strong>Address:</strong> 123 Main Street, Cityville, State, 12345
      </div>

      <p>
        Our dedicated customer service team is ready to help you. Feel free to contact us during business hours.
      </p>
    </div>
  );
};

export default Contact;