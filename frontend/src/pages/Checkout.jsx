import React from 'react'

export default function Checkout(){
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Checkout — Premium</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="player-card p-4 glass">
          <h4 className="font-semibold">Delivery Address</h4>
          <input className="w-full mt-2 p-2 rounded-md bg-[#0b0b0b]" placeholder="Address line" />
        </div>
        <div className="player-card p-4 glass">
          <h4 className="font-semibold">Payment</h4>
          <div className="mt-2">Card / UPI / Cash on delivery</div>
        </div>
      </div>
      <div className="card p-4 bg-[#0f0f0f] border border-white/5">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-white/70">Order Summary</div>
            <div className="text-lg font-bold text-white">2 items</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-white/70">Total</div>
            <div className="text-2xl font-extrabold text-[#EC1C24]">$17.98</div>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <button className="rcb-btn">Place Order — Taste Victory</button>
        </div>
      </div>
    </div>
  )
}
