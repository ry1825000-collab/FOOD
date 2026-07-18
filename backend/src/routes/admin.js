const express = require('express');
const router = express.Router();
const db = require('../db');
const auth = require('../middleware/auth');

// Admin: list all orders
router.get('/orders', auth, async (req, res) => {
  try {
    // In real app verify admin user; here assume any authenticated user
    const [orders] = await db.execute('SELECT * FROM orders ORDER BY created_at DESC');
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

// Admin: update order status
router.put('/orders/:id/status', auth, async (req, res) => {
  try {
    const { status } = req.body;
    await db.execute('UPDATE orders SET status = ? WHERE id = ?', [status, req.params.id]);
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
