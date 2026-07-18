const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/auth');

// GET /api/users - list users (admin)
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT id, name, email, created_at FROM users');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

// GET /api/users/me
router.get('/me', auth, async (req, res) => {
  try {
    const [rows] = await db.execute('SELECT id, name, email, created_at FROM users WHERE id = ?', [req.userId]);
    if (!rows.length) return res.status(404).json({ error: 'not found' });
    res.json(rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
