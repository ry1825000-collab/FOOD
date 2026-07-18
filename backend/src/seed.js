const fs = require('fs');
const path = require('path');
const db = require('./db');

async function run() {
  try {
    const sql = fs.readFileSync(path.join(__dirname, '../../migrations/init.sql'), 'utf8');
    const conn = await db.getConnection();
    // Split on ; for simple statements
    const statements = sql.split(/;\s*\n/).map(s => s.trim()).filter(Boolean);
    for (const stmt of statements) {
      await conn.query(stmt);
    }

    // seed sample categories and items if none exist
    const [cats] = await conn.query('SELECT id FROM categories LIMIT 1');
    if (!cats.length) {
      const [r1] = await conn.query('INSERT INTO categories (name) VALUES (?)', ['Popular']);
      const catId = r1.insertId;
      await conn.query('INSERT INTO food_items (category_id, name, description, price, available) VALUES (?, ?, ?, ?, ?)', [catId, 'Margherita Pizza', 'Classic cheese pizza', 8.99, 1]);
      await conn.query('INSERT INTO food_items (category_id, name, description, price, available) VALUES (?, ?, ?, ?, ?)', [catId, 'Veg Burger', 'Grilled veg patty with lettuce', 5.5, 1]);
    }

    conn.release();
    console.log('DB initialized and seeded');
    process.exit(0);
  } catch (err) {
    console.error('Seed failed:', err.message || err);
    process.exit(1);
  }
}

run();
