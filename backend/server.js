app.post('/api/appointments', async (req, res) => {
  const { fullName, mobile, reason, datetime } = req.body;

  console.log('📥 Incoming Request Body:', req.body);

  try {
    const query = `
      INSERT INTO appointments (full_name, mobile, reason, datetime)
      VALUES ($1, $2, $3, $4)
    `;

    await pool.query(query, [fullName, mobile, reason, datetime]);

    console.log('✅ Appointment saved');
    res.status(201).json({ message: 'Appointment saved' });

  } catch (err) {
    console.error('❌ Database error:', err.message);
    res.status(500).json({ error: 'Database error' });
  }
});
