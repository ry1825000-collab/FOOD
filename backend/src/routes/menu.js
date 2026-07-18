const express = require('express');
const router = express.Router();
const db = require('../db');

// GET /api/menu - list food items with category
router.get('/', async (req, res) => {
  try {
    const [rows] = await db.execute(
      `SELECT f.id, f.name, f.description, f.price, f.available, c.name as category
       FROM food_items f
       LEFT JOIN categories c ON f.category_id = c.id`
    );
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

// POST /api/menu - add item (admin)
router.post('/', async (req, res) => {
  try {
    const { category_id, name, description, price, available } = req.body;
    const [result] = await db.execute(
      'INSERT INTO food_items (category_id, name, description, price, available) VALUES (?, ?, ?, ?, ?)',
      [category_id || null, name, description || null, price || 0, available ? 1 : 0]
    );
    res.json({ id: result.insertId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
