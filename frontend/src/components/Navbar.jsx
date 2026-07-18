import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="glass py-4 px-6 border-b border-white/5">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rcb-primary to-[#b01212] flex items-center justify-center shadow-lg">
            <span className="font-bold text-white">RCB</span>
          </div>
          <div>
            <div className="text-lg font-semibold">RCB Food</div>
            <div className="text-sm text-white/70">Premium Fan Delivery</div>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <Link to="/" className="text-white/90 hover:text-white">Home</Link>
          <Link to="/listing" className="text-white/90 hover:text-white">Browse</Link>
          <Link to="/cart" className="text-white/90 hover:text-white">Cart</Link>
          <Link to="/tracking" className="text-white/90 hover:text-white">Track</Link>
          <Link to="/admin" className="text-white/90 hover:text-white">Admin</Link>
          <button className="ml-3 rcb-btn">Order Now</button>
        </nav>
      </div>
    </header>
  )
}
