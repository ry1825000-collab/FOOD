import React from 'react'

export default function CategoryCard({cat}){
  return (
    <div className="card glass p-4 text-center">
      <div className="text-xl font-semibold">{cat.name}</div>
      <div className="text-sm text-white/70">{cat.count || '—'} items</div>
    </div>
  )
}
