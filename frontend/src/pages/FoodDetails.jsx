import React from 'react'
import { useParams } from 'react-router-dom'

export default function FoodDetails(){
  const { id } = useParams();
  const item = { id, name: 'Sample Food', description: 'Delicious', price: 9.99, ingredients: ['Cheese','Tomato'] }
  return (
    <div className="space-y-4">
      <div className="w-full h-64 bg-gradient-to-br from-black/20 to-white/5 rounded-lg">Image</div>
      <h2 className="text-2xl font-bold">{item.name}</h2>
      <p className="text-white/70">{item.description}</p>
      <div className="card p-4">
        <h4 className="font-semibold">Ingredients</h4>
        <ul className="mt-2 list-disc list-inside text-white/80">
          {item.ingredients.map((ing,i)=>(<li key={i}>{ing}</li>))}
        </ul>
        <div className="mt-4 flex items-center justify-between">
          <div className="font-bold text-xl">${item.price}</div>
          <button className="rcb-btn">Add to cart</button>
        </div>
      </div>
    </div>
  )
}
