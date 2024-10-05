import React from 'react';

const Contact = () => {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="contact-info">
        <div>
          <h2>Address</h2>
          <p>123 Main St, Anytown, USA</p>
        </div>
        <div>
          <h2>Phone</h2>
          <p>(123) 456-7890</p>
        </div>
        <div>
          <h2>Email</h2>
          <p>info@example.com</p>
        </div>
      </div>
      <div className="google-map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m181m121m31d3151.83825111546522d-122.084051084387393d37.385348679291522m31f02f03f03m21i10242i7684f13.13m31m21s0x808fba02425a1a6d%3A0xb9f2e2e2e2e2e2e22sGoogleplex5e03m21sen2sin4v16310161525785m21sen2sin" width="100%" height="400" style={{ border: '0' }} allowFullScreen="" loading="lazy"></iframe>
      </div>
    </div>
  );
};

export default Contact;