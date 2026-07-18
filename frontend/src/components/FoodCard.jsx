import React from 'react'
import { Link } from 'react-router-dom'

export default function FoodCard({item, onAdd}){
  return (
    <div className="player-card glass flex items-center gap-4">
      <div className="w-36 h-28 rounded-lg overflow-hidden flex items-center justify-center" style={{background:`linear-gradient(135deg, rgba(0,0,0,0.25), rgba(255,255,255,0.02))`}}>
        <div className="w-28 h-20 bg-cover bg-center rounded-md" style={{backgroundImage:`url('/images/food-${item.id||'placeholder'}.jpg')`}}> </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <Link to={`/food/${item.id}`} className="font-semibold hover:underline">{item.name}</Link>
            <div className="text-sm text-white/70">{item.description}</div>
          </div>
          <div className="text-right">
            <div className="font-extrabold text-lg">${parseFloat(item.price||0).toFixed(2)}</div>
            <div className="text-sm text-white/60 mt-1">⭐ <span className="text-white font-semibold">{item.rating||4.5}</span></div>
          </div>
        </div>
        <div className="mt-3 flex gap-3 items-center">
          <button className="rcb-btn pulse" onClick={()=>onAdd && onAdd(item)}>Add To Cart</button>
          <div className="text-sm text-white/60">Limited Match Stock</div>
        </div>
      </div>
    </div>
  )
}
