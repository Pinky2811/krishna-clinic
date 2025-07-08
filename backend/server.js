const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
require('dotenv').config();
const { sendWhatsAppMessage } = require('./whatsappService');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// 1. Get all appointments
app.get('/api/appointments', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM appointments ORDER BY id DESC');
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: 'Database fetch error' });
  }
});

// 2. Add new appointment
app.post('/api/appointments', async (req, res) => {
  const { fullName, mobile, reason, datetime } = req.body;

  try {
    // Save to database
    await pool.query(
      'INSERT INTO appointments (full_name, mobile, reason, datetime) VALUES ($1, $2, $3, $4)',
      [fullName, mobile, reason, datetime]
    );

    // Send WhatsApp to patient
    const patientMsg = `👋 Namaste ${fullName},\n\nYour appointment at Krishna Clinic is booked.\n🕒 ${datetime}\n📍 Reason: ${reason}\n📞 ${process.env.CLINIC_PHONE}\n\nThank you! 🙏`;
    sendWhatsAppMessage(mobile, patientMsg);

    // Send WhatsApp to admin
    const adminMsg = `🆕 New Appointment:\n👤 ${fullName}\n📞 ${mobile}\n📅 ${datetime}\n💬 ${reason}`;
    sendWhatsAppMessage(process.env.ADMIN_MOBILE, adminMsg);

    res.status(201).json({ message: 'Appointment saved & WhatsApp sent' });
  } catch (err) {
    console.error('❌ Error:', err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 3. Confirm/reject appointment
app.put('/api/appointments/:id/status', async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  if (!['confirmed', 'rejected'].includes(status)) {
    return res.status(400).json({ error: 'Invalid status value' });
  }

  try {
    await pool.query(
      'UPDATE appointments SET status = $1 WHERE id = $2',
      [status, id]
    );

    res.json({ message: `Appointment ${status}` });
  } catch (error) {
    res.status(500).json({ error: 'Status update failed' });
  }
});

app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
