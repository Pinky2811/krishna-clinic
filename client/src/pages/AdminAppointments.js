import React, { useEffect, useState } from 'react';

const API_BASE_URL = 'https://krishna-clinic-backend.onrender.com';

// const API_BASE_URL =
//   process.env.NODE_ENV === 'production'
//     ? 'https://your-live-backend-url.com'
//     : 'http://localhost:5000';

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false); // 🛡️ Admin check

  const handleAdminLogin = () => {
    const password = prompt('Enter admin password:');
    if (password === 'krishna123') {
      setIsAdmin(true);
    } else {
      alert('Incorrect password');
    }
  };

  useEffect(() => {
    if (isAdmin) {
      fetch(`${API_BASE_URL}/api/appointments`)
        .then(res => res.json())
        .then(data => setAppointments(data))
        .catch(err => console.error('Failed to fetch appointments:', err));
    }
  }, [isAdmin]);

  const updateStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/appointments/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });

      if (res.ok) {
        setAppointments(prev =>
          prev.map(app =>
            app.id === id ? { ...app, status: newStatus } : app
          )
        );
      } else {
        alert('Failed to update status');
      }
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  return (
    <section className="admin-appointments">
      <div className="container">
        {!isAdmin ? (
          <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <button onClick={handleAdminLogin} style={{
              padding: '10px 20px',
              fontSize: '16px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '8px'
            }}>
              🔐 Admin Login
            </button>
          </div>
        ) : (
          <>
            <h2>Admin: Appointment Requests</h2>
            <table>
              <thead>
                <tr>
                  <th>Name</th><th>Mobile</th><th>Reason</th><th>Date/Time</th><th>Status</th><th>Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map(app => (
                  <tr key={app.id}>
                    <td>{app.full_name}</td>
                    <td>{app.mobile}</td>
                    <td>{app.reason}</td>
                    <td>{new Date(app.datetime).toLocaleString('en-IN')}</td>
                    <td>{app.status}</td>
                    <td>
                      <button onClick={() => updateStatus(app.id, 'confirmed')}>✅ Confirm</button>
                      <button onClick={() => updateStatus(app.id, 'rejected')}>❌ Reject</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
    </section>
  );
};

export default AdminAppointments;
