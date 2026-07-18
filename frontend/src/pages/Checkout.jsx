import React from 'react'

export default function Checkout(){
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Checkout</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-4">
          <h4 className="font-semibold">Delivery Address</h4>
          <input className="w-full mt-2 p-2 rounded-md bg-[#0b0b0b]" placeholder="Address line" />
        </div>
        <div className="card p-4">
          <h4 className="font-semibold">Payment</h4>
          <div className="mt-2">Card / UPI / Cash on delivery</div>
        </div>
      </div>
      <div className="card p-4">
        <div className="flex justify-between"><div>Order total</div><div className="font-bold">$17.98</div></div>
        <div className="mt-3"><button className="rcb-btn">Place Order</button></div>
      </div>
    </div>
  )
}
