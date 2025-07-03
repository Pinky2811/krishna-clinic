import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';
import logo from '../assets/images/logo.png.jpg'; // ✅ Use correct path and file extension

const Header = () => {
  const { language, toggleLanguage } = useLanguage();

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
      </div>

      <nav className="nav-bar">
        <ul className="nav-links">
          <li><a href="#home">{language === 'en' ? 'Home' : 'હોમ'}</a></li>
          <li><a href="#about">{language === 'en' ? 'About' : 'વિશે'}</a></li>
          <li><a href="#services">{language === 'en' ? 'Services' : 'સેવામાં'}</a></li>
          <li><a href="#appointment">{language === 'en' ? 'Appointment' : 'અપોઇન્ટમેન્ટ'}</a></li>
          <li><a href="#contact">{language === 'en' ? 'Contact' : 'સંપર્ક'}</a></li>
        </ul>
        {/* <div className="language-toggle">
          <button onClick={toggleLanguage}>
            {language === 'en' ? '🇮🇳 Gujarati' : '🇬🇧 English'}
          </button>
        </div> */}
      </nav>
    </header>
  );
};

export default Header;
