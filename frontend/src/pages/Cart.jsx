import React from 'react'
import CartItem from '../components/CartItem'

const sample = [{id:1,name:'Margherita',price:8.99,quantity:2}]

export default function Cart(){
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Your Cart</h2>
      <div className="space-y-2">
        {sample.map(it=>(<CartItem key={it.id} item={it}/>))}
      </div>
      <div className="card p-4">
        <div className="flex justify-between font-bold"> <div>Subtotal</div> <div>$17.98</div></div>
        <div className="mt-3"><a href="/checkout" className="rcb-btn">Checkout</a></div>
      </div>
    </div>
  )
}
