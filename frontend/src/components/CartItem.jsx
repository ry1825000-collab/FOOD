import React from 'react'

export default function CartItem({item, onInc, onDec, onRemove}){
  return (
    <div className="card flex items-center gap-4">
      <div className="w-20 h-16 bg-white/5 rounded-md flex items-center justify-center">Img</div>
      <div className="flex-1">
        <div className="font-semibold">{item.name}</div>
        <div className="text-sm text-white/70">${(item.price*item.quantity).toFixed(2)}</div>
      </div>
      <div className="flex items-center gap-2">
        <button className="btn secondary" onClick={()=>onDec && onDec(item)}>-</button>
        <div>{item.quantity}</div>
        <button className="rcb-btn" onClick={()=>onInc && onInc(item)}>+</button>
      </div>
    </div>
  )
}
