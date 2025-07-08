import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';
import logo from '../assets/images/logo.png.jpg';

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false); // ✅ mobile menu state

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="clinic-header">
      <div className="top-bar">
        <div className="header-left">
          <img src={logo} alt="Krishna Clinic Logo" className="clinic-logo" />
          <div className="clinic-name">
            <h1>Krishna Clinic</h1>
            <p className="tagline">
              {language === 'en'
                ? 'Your health is our concern.'
                : 'તમારું સ્વાસ્થ્ય અમારી ચિંતા છે.'}
            </p>
          </div>
        </div>

        <div className="header-right">
          <p><strong>Dr. Kashyap Solanki</strong></p>
          <p>B.A.M.S. GAU</p>
          <p>Reg No: GB-I 22354</p>
          <p>Ex. Sarthak Medical & ICU Hospital – Cura Hospitals</p>
        </div>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          ☰
        </div>
      </div>

      {/* Navigation */}
      <nav className={`nav-bar ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-links">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
          <li><Link to="/appointmentform" onClick={() => setMenuOpen(false)}>Appointment</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
