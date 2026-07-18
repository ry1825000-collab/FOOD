import React, {useState, useEffect} from 'react'
import FoodCard from '../components/FoodCard'

export default function FoodListing(){
  const [items,setItems] = useState([])
  useEffect(()=>{
    // fetch from API in production; here sample
    setItems([{id:1,name:'Margherita',description:'Cheese',price:8.99},{id:2,name:'Paneer Tikka',description:'Spicy',price:7.5}])
  },[])
  const onAdd = (it)=>{ alert('Add '+it.name) }
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold">All Foods</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(it=>(<FoodCard key={it.id} item={it} onAdd={onAdd}/>))}
      </div>
    </div>
  )
}
