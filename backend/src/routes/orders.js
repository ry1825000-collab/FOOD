const express = require('express');
const router = express.Router();
const db = require('../db');

// POST /api/orders
// body: { user_id (optional), items: [{ food_item_id, quantity }] }
router.post('/', async (req, res) => {
  const conn = await db.getConnection();
  try {
    const { user_id, items } = req.body;
    if (!items || !items.length) return res.status(400).json({ error: 'no items' });

    // calculate total
    const ids = items.map(i => i.food_item_id);
    const [rows] = await conn.query('SELECT id, price FROM food_items WHERE id IN (?)', [ids]);
    const priceMap = new Map(rows.map(r => [r.id, parseFloat(r.price)]));
    let total = 0;
    for (const it of items) {
      const p = priceMap.get(it.food_item_id) || 0;
      total += p * (it.quantity || 1);
    }

    await conn.beginTransaction();
    const [orderRes] = await conn.query('INSERT INTO orders (user_id, total) VALUES (?, ?)', [user_id || null, total]);
    const orderId = orderRes.insertId;
    for (const it of items) {
      const p = priceMap.get(it.food_item_id) || 0;
      await conn.query('INSERT INTO order_details (order_id, food_item_id, quantity, price) VALUES (?, ?, ?, ?)', [orderId, it.food_item_id, it.quantity || 1, p]);
    }
    await conn.commit();
    res.json({ id: orderId, total });
  } catch (err) {
    await conn.rollback();
    console.error(err);
    res.status(500).json({ error: 'server error' });
  } finally {
    conn.release();
  }
});

// GET /api/orders/:id
router.get('/:id', async (req, res) => {
  try {
    const orderId = req.params.id;
    const [orders] = await db.execute('SELECT * FROM orders WHERE id = ?', [orderId]);
    if (!orders.length) return res.status(404).json({ error: 'not found' });
    const order = orders[0];
    const [items] = await db.execute(
      `SELECT od.id, od.food_item_id, od.quantity, od.price, f.name
       FROM order_details od
       JOIN food_items f ON od.food_item_id = f.id
       WHERE od.order_id = ?`,
      [orderId]
    );
    res.json({ order, items });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'server error' });
  }
});

module.exports = router;
