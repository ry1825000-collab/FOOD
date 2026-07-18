import React from 'react'
import OrderTracker from '../components/OrderTracker'

export default function Tracking(){
  const steps = [
    {title:'Order Placed', desc:'We received your order'},
    {title:'Preparing', desc:'Restaurant is preparing your food'},
    {title:'On the Way', desc:'Delivery partner en route'},
    {title:'Delivered', desc:'Enjoy your meal'}
  ]
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">Track Order</h2>
      <OrderTracker steps={steps} current={1} />
      <div className="card p-4">
        <div>Estimated delivery: <strong>20-30 mins</strong></div>
      </div>
    </div>
  )
}
