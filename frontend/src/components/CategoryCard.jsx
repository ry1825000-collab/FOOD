import React from 'react'

export default function CategoryCard({cat}){
  return (
    <div className="player-card glass p-4 text-center flex flex-col items-center justify-center">
      <div className="text-2xl">{cat.emoji || '🏏'}</div>
      <div className="mt-2 text-lg font-semibold">{cat.name}</div>
      <div className="text-sm text-white/70 mt-1">{cat.count || '\u2014'} items</div>
    </div>
  )
}
