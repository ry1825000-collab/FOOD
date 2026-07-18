# Backend (Node.js + Express)

## Setup

1. Install dependencies

```bash
cd backend
npm install
```

2. Copy `.env.example` to `.env` and fill DB values.

3. Initialize database (optional):

```bash
mysql -u root -p < ../migrations/init.sql
```

4. Run server

```bash
npm run dev
```

API endpoints live under `/api/*` (users, menu, orders).

Example requests:

Register:
```
POST /api/auth/register { "name":"Alice", "email":"a@b.com", "password":"pwd" }
```

Login:
```
POST /api/auth/login { "email":"a@b.com", "password":"pwd" }
```

Fetch menu:
```
GET /api/menu
```

Create order:
```
POST /api/orders { "items": [ { "food_item_id": 1, "quantity": 2 } ] }
```
