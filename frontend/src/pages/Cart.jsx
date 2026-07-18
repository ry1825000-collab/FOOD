import React from 'react'
import CartItem from '../components/CartItem'

const sample = [{id:1,name:'Margherita',price:8.99,quantity:2},{id:2,name:'BBQ Burger',price:6.5,quantity:1}]

export default function Cart(){
  const subtotal = sample.reduce((s,i)=>s + i.price * i.quantity,0)
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Match Scorecard</h2>
      <div className="space-y-2">
        {sample.map(it=>(<CartItem key={it.id} item={it}/>))}
      </div>
      <div className="player-card p-4 glass">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-white/70">Total Score</div>
            <div className="text-3xl font-extrabold">${subtotal.toFixed(2)}</div>
          </div>
          <div>
            <a href="/checkout" className="rcb-btn">Proceed to Victory</a>
          </div>
        </div>
      </div>
    </div>
  )
}
