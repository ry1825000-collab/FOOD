import React from 'react'
import { Link } from 'react-router-dom'

export default function FoodCard({item, onAdd}){
  return (
    <div className="card glass flex items-center gap-4">
      <div className="w-28 h-20 bg-gradient-to-br from-black/20 to-white/5 rounded-lg flex items-center justify-center text-sm">Image</div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <div>
            <Link to={`/food/${item.id}`} className="font-semibold hover:underline">{item.name}</Link>
            <div className="text-sm text-white/70">{item.description}</div>
          </div>
          <div className="text-right">
            <div className="font-bold">${parseFloat(item.price||0).toFixed(2)}</div>
            <div className="text-sm text-white/60">⭐ {item.rating||4.5}</div>
          </div>
        </div>
        <div className="mt-3 flex gap-2">
          <button className="rcb-btn" onClick={()=>onAdd && onAdd(item)}>Add</button>
          <Link to={`/food/${item.id}`} className="btn secondary">Details</Link>
        </div>
      </div>
    </div>
  )
}
