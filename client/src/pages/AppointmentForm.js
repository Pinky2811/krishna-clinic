// src/pages/AppointmentForm.js
import React, { useState } from 'react';
import './css/AppointmentForm.css';

const API_BASE_URL = 'https://krishna-clinic-backend.onrender.com';

// const API_BASE_URL =
//   process.env.NODE_ENV === 'production'
//     ? 'https://your-live-backend-url.com' // 🔁 Replace with real backend
//     : 'http://localhost:5000';

const AppointmentForm = () => {
  const [fullName, setFullName] = useState('');
  const [mobile, setMobile] = useState('');
  const [reason, setReason] = useState('');
  const [datetime, setDatetime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = { fullName, mobile, reason, datetime };

    try {
      const response = await fetch(`${API_BASE_URL}/api/appointments`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(appointmentData),
      });

      if (response.ok) {
        alert('Appointment request sent! Awaiting confirmation.');
        setFullName('');
        setMobile('');
        setReason('');
        setDatetime('');
      } else {
        alert('Submission failed');
      }
    } catch (error) {
      console.error('Submit error:', error);
      alert('Server error');
    }
  };

  return (
    <section id="appointment" className="appointment-section">
      <div className="container">
        <h2>Book an Appointment</h2>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" value={fullName} required onChange={(e) => setFullName(e.target.value)} />
          <input type="tel" pattern="[6-9]{1}[0-9]{9}" title="Enter a valid 10-digit Indian mobile number" required placeholder="Mobile Number"
  value={mobile} onChange={(e) => setMobile(e.target.value)}/>
          <input type="text" placeholder="Reason for Visit" value={reason} required onChange={(e) => setReason(e.target.value)} />
          <input type="datetime-local" value={datetime} required onChange={(e) => setDatetime(e.target.value)} />
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
  );
};

export default AppointmentForm;
