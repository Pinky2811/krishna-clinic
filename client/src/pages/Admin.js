import React, { useState, useEffect } from 'react';

const Admin = () => {
  const [appointments, setAppointments] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminLogin = () => {
    const password = prompt("Enter admin password:");
    if (password === "krishna123") {
      setIsAdmin(true);
    } else {
      alert("Incorrect password!");
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetch('http://localhost:5000/api/appointments')
        .then((res) => res.json())
        .then((data) => setAppointments(data));
    }
  }, [isAdmin]);

  return (
    <section style={{ padding: "30px" }}>
      <h2>🔐 Admin Panel</h2>

      {!isAdmin ? (
        <div style={{ marginTop: "20px" }}>
          <button
            onClick={handleAdminLogin}
            style={{ padding: '10px 20px', background: '#007bff', color: 'white', border: 'none', borderRadius: '8px' }}
          >
            Login as Admin
          </button>
        </div>
      ) : (
        <>
          <h3 style={{ marginTop: "30px" }}>Appointment Requests</h3>
          <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Mobile</th>
                <th>Reason</th>
                <th>Date/Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.full_name}</td>
                  <td>{appt.mobile}</td>
                  <td>{appt.reason}</td>
                  <td>{new Date(appt.datetime).toLocaleString('en-IN')}</td>
                  <td>{appt.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </section>
  );
};

export default Admin;
