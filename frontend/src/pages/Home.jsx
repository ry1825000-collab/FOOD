import React from 'react'
import CategoryCard from '../components/CategoryCard'
import FoodCard from '../components/FoodCard'

const sampleCats = [
  {emoji:'🔥', name:"Match Day Specials"},
  {emoji:'🍔', name:"Captain's Choice"},
  {emoji:'🍕', name:'Powerplay Combos'},
  {emoji:'🍟', name:'Fan Favourite Snacks'},
  {emoji:'🥤', name:'Stadium Drinks'},
  {emoji:'🍰', name:'Victory Desserts'},
]
const sampleItems = [
  {id:1,name:'Margherita',description:'Classic cheese',price:8.99,rating:4.6},
  {id:2,name:'BBQ Burger',description:'Smoky BBQ',price:6.5,rating:4.8},
]

export default function Home(){
  return (
    <div className="space-y-6">
      <section className="stadium-hero full glass">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold">RCB Food Arena</h1>
            <p className="text-white/70 mt-2 text-lg">Taste The Victory — feel the stadium, eat like a champion</p>
            <div className="mt-6 flex items-center gap-4">
              <button className="rcb-btn pulse">Order Match Day Specials</button>
              <div className="gold-pill">Exclusive: Members get early access</div>
            </div>
          </div>
          <div className="w-full md:w-96">
            <div className="scoreboard glass text-center">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm text-white/70">RCB FAN OFFER</div>
                  <div className="text-2xl font-bold">20% OFF ON MATCH DAY ORDERS</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-white/70">Code</div>
                  <div className="rcb-badge mt-1">RCB20</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Categories</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-3">
          {sampleCats.map((c,i)=>(<CategoryCard key={i} cat={c}/>))}
        </div>
      </section>

      <section>
        <h3 className="text-xl font-semibold">Popular Dishes</h3>
        <div className="grid md:grid-cols-2 gap-4 mt-3">
          {sampleItems.map(it=>(<FoodCard key={it.id} item={it}/>))}
        </div>
      </section>
    </div>
  )
}
