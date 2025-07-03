import React, { useState } from 'react';
import './css/Appointment.css';

const Appointment = () => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [reason, setReason] = useState('');
  const [datetime, setDatetime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = { fullName, mobile, reason, datetime };

    try {
      const response = await fetch('http://localhost:5000/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        alert('Appointment booked successfully!');
        setFullName('');
        setMobile('');
        setReason('');
        setDatetime('');
      } else {
        alert('Failed to book appointment.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server error!');
    }
  };

  return (
    <section id="appointment" className="appointment-section">
      <div className="container">
        <h2>Book an Appointment</h2>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Full Name"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Mobile Number"
            required
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="text"
            placeholder="Reason for Visit"
            required
            value={reason}
            onChange={(e) => setReason(e.target.value)}
          />
          <input
            type="datetime-local"
            required
            value={datetime}
            onChange={(e) => setDatetime(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Appointment;
