import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingButtons.css';

const FloatingButtons = () => {
  const navigate = useNavigate();

  return (
    <div className="floating-buttons-with-labels">
      <a href="tel:+919898902016" className="floating-button call">
        📞 <span>Call Now</span>
      </a>
      <a
        href="https://wa.me/919898902016?text=Hi%20Doctor..."
        className="floating-button whatsapp"
        target="_blank"
        rel="noopener noreferrer"
      >
        💬 <span>Chat on WhatsApp</span>
      </a>
      <button className="floating-button book" onClick={() => navigate('/appointmentform')}>
        🗓️ <span>Book Appointment</span>
      </button>
    </div>
  );
};

export default FloatingButtons;
