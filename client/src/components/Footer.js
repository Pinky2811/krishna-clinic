import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Krishna Clinic. All rights reserved.</p>
      <p>Designed with ❤️ for your health</p>
    </footer>
  );
};

export default Footer;
