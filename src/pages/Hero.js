import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './css/Hero.css';

const Hero = () => {
  const { language } = useLanguage();

  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <h1>
          {language === 'en'
            ? 'Welcome to Krishna Clinic'
            : 'ક્રિષ્ણા ક્લિનિકમાં આપનું સ્વાગત છે'}
        </h1>
        <p>
          {language === 'en'
            ? 'Your health is our concern.'
            : 'તમારું સ્વાસ્થ્ય અમારી ચિંતા છે.'}
        </p>
        <a href="#appointment" className="hero-btn">
          {language === 'en' ? '🗓️ Book Appointment' : '🗓️ અપોઇન્ટમેન્ટ બુક કરો'}
        </a>
      </div>
    </section>
  );
};

export default Hero;
