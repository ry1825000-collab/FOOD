import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(){
  return (
    <header className="glass py-4 px-6 border-b border-white/5 stadium-lights">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rcb-primary to-[#b01212] flex items-center justify-center shadow-xl">
            <span className="font-extrabold text-white">RCB</span>
          </div>
          <div>
            <div className="text-lg font-semibold">RCB Food Arena</div>
            <div className="text-sm text-white/70">Taste The Victory</div>
          </div>
        </div>
        <nav className="flex items-center gap-6">
          <Link to="/" className="text-white/90 hover:text-white">Home</Link>
          <Link to="/listing" className="text-white/90 hover:text-white">Menu</Link>
          <Link to="/orders" className="text-white/90 hover:text-white">Orders</Link>
          <Link to="/rewards" className="text-white/90 hover:text-white">Rewards</Link>
          <Link to="/profile" className="text-white/90 hover:text-white">Profile</Link>
          <button className="ml-3 rcb-btn pulse">Order Now</button>
        </nav>
      </div>
    </header>
  )
}
