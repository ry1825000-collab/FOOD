const jwt = require('jsonwebtoken');

function auth(req, res, next) {
  const hdr = req.headers.authorization;
  if (!hdr) return res.status(401).json({ error: 'missing authorization' });
  const parts = hdr.split(' ');
  if (parts.length !== 2) return res.status(401).json({ error: 'invalid authorization format' });
  const token = parts[1];
  try {
    const data = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    req.userId = data.id;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'invalid token' });
  }
}

module.exports = auth;
