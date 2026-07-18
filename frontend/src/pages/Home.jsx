import React from 'react'
import CategoryCard from '../components/CategoryCard'
import FoodCard from '../components/FoodCard'

const sampleCats = [{name:'Pizza'},{name:'Burgers'},{name:'Desserts'}]
const sampleItems = [
  {id:1,name:'Margherita',description:'Classic cheese',price:8.99},
  {id:2,name:'BBQ Burger',description:'Smoky BBQ',price:6.5},
]

export default function Home(){
  return (
    <div className="space-y-6">
      <section className="glass card p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold">Welcome to RCB Food</h2>
            <p className="text-white/70">Premium fan experience — order with style</p>
          </div>
          <div className="w-48 h-24 bg-gradient-to-br from-rcb-primary to-[#b01212] rounded-xl flex items-center justify-center text-white font-bold">Featured</div>
        </div>
        <div className="mt-4">
          <input placeholder="Search for food" className="w-full p-3 rounded-md bg-[#0b0b0b] border border-white/5" />
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Categories</h3>
        <div className="grid grid-cols-3 gap-4 mt-3">
          {sampleCats.map((c,i)=>(<CategoryCard key={i} cat={c}/>))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Popular Dishes</h3>
        <div className="space-y-3 mt-3">
          {sampleItems.map(it=>(<FoodCard key={it.id} item={it}/>))}
        </div>
      </section>
    </div>
  )
}
