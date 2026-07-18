const API = '/api';
const app = document.getElementById('app');
const authArea = document.getElementById('auth-area');
let cart = [];

function getToken() { return localStorage.getItem('token'); }
function setToken(t) { localStorage.setItem('token', t); }
function clearToken() { localStorage.removeItem('token'); }

async function apiFetch(path, opts = {}) {
  opts.headers = opts.headers || {};
  if (opts.body && !(opts.body instanceof FormData)) {
    opts.headers['Content-Type'] = 'application/json';
    opts.body = JSON.stringify(opts.body);
  }
  const token = getToken();
  if (token) opts.headers['Authorization'] = 'Bearer ' + token;
  const res = await fetch(API + path, opts);
  const data = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, data };
}

function navSetup() {
  document.getElementById('nav-menu').onclick = () => showMenu();
  document.getElementById('nav-cart').onclick = () => showCart();
  document.getElementById('nav-orders').onclick = () => showOrders();
  renderAuthArea();
}

function renderAuthArea() {
  const token = getToken();
  authArea.innerHTML = '';
  if (token) {
    const span = document.createElement('span');
    span.textContent = 'Signed in';
    const btn = document.createElement('button'); btn.className='btn secondary'; btn.textContent='Logout';
    btn.onclick = () => { clearToken(); renderAuthArea(); showMenu(); };
    authArea.appendChild(span); authArea.appendChild(btn);
  } else {
    const login = document.createElement('button'); login.textContent='Login'; login.onclick = () => showLogin();
    const reg = document.createElement('button'); reg.textContent='Register'; reg.onclick = () => showRegister();
    authArea.appendChild(login); authArea.appendChild(reg);
  }
}

async function showLogin() {
  app.innerHTML = `<div class="form"><h2>Login</h2>
    <div class="field"><input id="li-email" placeholder="Email"></div>
    <div class="field"><input id="li-pass" type="password" placeholder="Password"></div>
    <button id="li-submit" class="btn">Login</button></div>`;
  document.getElementById('li-submit').onclick = async () => {
    const email = document.getElementById('li-email').value;
    const password = document.getElementById('li-pass').value;
    const r = await apiFetch('/auth/login', { method: 'POST', body: { email, password } });
    if (r.ok) { setToken(r.data.token); renderAuthArea(); showMenu(); }
    else alert('Login failed: ' + (r.data.error||JSON.stringify(r.data)));
  };
}

async function showRegister() {
  app.innerHTML = `<div class="form"><h2>Register</h2>
    <div class="field"><input id="re-name" placeholder="Name"></div>
    <div class="field"><input id="re-email" placeholder="Email"></div>
    <div class="field"><input id="re-pass" type="password" placeholder="Password"></div>
    <button id="re-submit" class="btn">Register</button></div>`;
  document.getElementById('re-submit').onclick = async () => {
    const name = document.getElementById('re-name').value;
    const email = document.getElementById('re-email').value;
    const password = document.getElementById('re-pass').value;
    const r = await apiFetch('/auth/register', { method: 'POST', body: { name, email, password } });
    if (r.ok) { setToken(r.data.token); renderAuthArea(); showMenu(); }
    else alert('Register failed: ' + (r.data.error||JSON.stringify(r.data)));
  };
}

async function showMenu() {
  const r = await apiFetch('/menu');
  if (!r.ok) return app.innerHTML = '<div class="form">Failed to load menu</div>';
  const items = r.data;
  app.innerHTML = '<h2>Menu</h2><div id="menu-list"></div>';
  const menuList = document.getElementById('menu-list');
  for (const it of items) {
    const div = document.createElement('div'); div.className='menu-item';
    div.innerHTML = `<div class="meta"><strong>${it.name}</strong><div class="small">${it.category||''}</div><div>${it.description||''}</div></div>`;
    const right = document.createElement('div');
    right.innerHTML = `<div class="small">$${parseFloat(it.price).toFixed(2)}</div>`;
    const btn = document.createElement('button'); btn.className='btn'; btn.textContent='Add';
    btn.onclick = () => { addToCart(it); };
    right.appendChild(btn);
    div.appendChild(right);
    menuList.appendChild(div);
  }
}

function addToCart(item) {
  const found = cart.find(c => c.id === item.id);
  if (found) found.quantity++;
  else cart.push({ id: item.id, name: item.name, price: parseFloat(item.price), quantity: 1 });
  showCart();
}

function showCart() {
  app.innerHTML = '<h2>Cart</h2><div id="cart-list"></div><div id="cart-actions"></div>';
  const list = document.getElementById('cart-list');
  if (!cart.length) { list.textContent = 'Cart is empty'; return; }
  let total = 0;
  for (const it of cart) {
    const div = document.createElement('div'); div.className='menu-item';
    div.innerHTML = `<div class="meta">${it.name} x ${it.quantity}</div>`;
    const right = document.createElement('div'); right.textContent = '$' + (it.price*it.quantity).toFixed(2);
    div.appendChild(right);
    list.appendChild(div);
    total += it.price*it.quantity;
  }
  const actions = document.getElementById('cart-actions');
  actions.innerHTML = `<div class="small">Total: $${total.toFixed(2)}</div><button id="checkout" class="btn">Checkout</button>`;
  document.getElementById('checkout').onclick = async () => {
    const body = { items: cart.map(i => ({ food_item_id: i.id, quantity: i.quantity })) };
    const r = await apiFetch('/orders', { method: 'POST', body });
    if (r.ok) { alert('Order placed: ' + r.data.id + ' — total $' + r.data.total); cart = []; showMenu(); }
    else alert('Checkout failed: ' + (r.data.error||JSON.stringify(r.data)));
  };
}

async function showOrders() {
  // We don't yet have a list orders by user endpoint; show placeholder
  app.innerHTML = '<h2>My Orders</h2><div class="form">Use the cart to place orders; order details are shown after checkout.</div>';
}

// Initialize
navSetup();
showMenu();

