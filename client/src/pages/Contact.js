import React from 'react';
import './css/Contact.css';
import { useNavigate } from 'react-router-dom'; // ✅ Correct
  
const Contact = () => {
  const navigate = useNavigate(); // ✅ MUST be inside the component

  const handleBookClick = () => {
    navigate('/appointmentform'); // ✅ navigate is defined here
  };
  const todayIndex = new Date().getDay(); // 0 = Sunday

  const hours = [
    { day: 'Sunday (Ashura)', time: '9 am–1 pm, 4–9 pm', holiday: true },
    { day: 'Monday', time: '9 am–1 pm, 4–9 pm' },
    { day: 'Tuesday', time: '9 am–1 pm, 4–9 pm' },
    { day: 'Wednesday', time: '9 am–1 pm, 4–9 pm' },
    { day: 'Thursday', time: '9 am–1 pm, 4–9 pm' },
    { day: 'Friday', time: '9 am–1 pm, 4–9 pm' },
    { day: 'Saturday (Ashura)', time: '9 am–1 pm, 4–9 pm', holiday: true },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p><strong>Krishna Clinic</strong></p>
        <p>Shop No. 13, Sarthi Annexe, B/H Maruti Suzuki Showroom,</p>
        <p>SP Ring Road, Kathwada, Ahmedabad</p>
        <p>Phone: <a href="tel:+919898902016">+91 98989 02016</a></p>
        <p>Email: krishnaclinic@email.com</p>

        <h3>Clinic Hours</h3>
        <div className="clinic-hours">
          {hours.map((entry, index) => (
            <p
              key={index}
              className={index === todayIndex ? 'today-highlight' : ''}
            >
              {entry.day}: {entry.time}
              {entry.holiday && <span className="note"> — Hours might differ</span>}
            </p>
          ))}
          <p className="open-now">🕘 Open ⋅ Closes 1 pm ⋅ Reopens 4 pm</p>
        </div>

        <div className="map-container">
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.084946946573!2d72.68362467429296!3d23.052415479140865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e870e40a27e49%3A0x93c4bb0611fa8c9c!2sKrishna%20Clinic!5e0!3m2!1sen!2sin!4v1689435085957!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
     {/* <a href="tel:+919898902016" className="call-now-button">📞 Call Now</a>
<a href="https://wa.me/919898902016?text=Hi%20Doctor..." className="whatsapp-button">💬 Chat on WhatsApp</a>
<button onClick={handleBookClick} className="book-button">
        🗓️ Book Appointment
      </button> */}



    </section>
  );
};

export default Contact;
