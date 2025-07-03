import React from 'react';
import './css/Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="hero">
        <h2>Welcome to Krishna Clinic</h2>
        <p>General and Family Healthcare near Bhakti Circle, Ahmedabad</p>
        <a href="#appointment" className="btn">Book Appointment</a>
      </div>
    </section>
  );
};

export default Home;
