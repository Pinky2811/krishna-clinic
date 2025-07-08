import React from 'react';
import './css/Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const todayIndex = new Date().getDay(); // 0 = Sunday
  const navigate = useNavigate();

  const clinicHours = [
    { day: 'Sunday', time: '9 am – 1 pm, 4 – 9 pm' },
    { day: 'Monday', time: '9 am – 1 pm, 4 – 9 pm' },
    { day: 'Tuesday', time: '9 am – 1 pm, 4 – 9 pm' },
    { day: 'Wednesday', time: '9 am – 1 pm, 4 – 9 pm' },
    { day: 'Thursday', time: '9 am – 1 pm, 4 – 9 pm' },
    { day: 'Friday', time: '9 am – 1 pm, 4 – 9 pm' },
    { day: 'Saturday', time: '9 am – 1 pm, 4 – 9 pm' },
  ];

  const handleBookClick = () => {
    navigate('/appointmentform');
  };

  return (
    <section id="home" className="home-section">
      <div className="hero">
        <h2>Welcome to Krishna Clinic</h2>
        <p>Your family's trusted care provider near Bhakti Circle, Ahmedabad.</p>
      </div>

      <h3 className="section-title">About Dr. Kashyap Solanki</h3>
      <div className="about-doctor">
        <p><strong>Dr. Kashyap Solanki (B.A.M.S. GAU)</strong> is a qualified and experienced Ayurvedic doctor committed to providing holistic and personalized healthcare. He previously served at Sarthak Medical & ICU Hospital – Cura Hospitals.</p>
        <p>Registration No: GB-I 22354</p>
      </div>

      <h3 className="section-title">Our Services</h3>
      <div className="services-grid">
        <div className="service-card">
          <h4>General Consultation</h4>
          <p>Diagnosis and treatment for common illnesses and conditions.</p>
        </div>
        <div className="service-card">
          <h4>Family Health</h4>
          <p>Care for all ages — children, adults, and seniors.</p>
        </div>
        <div className="service-card">
          <h4>Ayurvedic Treatment</h4>
          <p>Natural healing using time-tested Ayurvedic principles.</p>
        </div>
        <div className="service-card">
          <h4>Health Advice</h4>
          <p>Guidance for diet, immunity, and wellness routines.</p>
        </div>
      </div>

      <h3 className="section-title">Clinic Hours</h3>
      <div className="clinic-hours">
        {clinicHours.map((entry, index) => (
          <p key={index} className={index === todayIndex ? 'today-highlight' : ''}>
            {entry.day}: {entry.time}
          </p>
        ))}
        <p className="open-now">🕘 Open ⋅ Closes 1 pm ⋅ Reopens 4 pm</p>
      </div>

      <h3 className="section-title">Patient Feedback</h3>
      <div className="testimonials">
        <p>“The doctor is very kind and listens carefully. We got great results with Ayurvedic treatment.”</p>
        <p>“Very clean clinic and excellent care. Highly recommended for the whole family.”</p>
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

      {/* <div className="floating-buttons">
        <a href="tel:+919898902016" className="call-now-button">📞 Call Now</a>
        <a href="https://wa.me/919898902016?text=Hi%20Doctor..." className="whatsapp-button">💬 Chat on WhatsApp</a>
        <button onClick={handleBookClick} className="book-button">🗓️ Book Appointment</button>
      </div> */}
    </section>
  );
};

export default Home;
