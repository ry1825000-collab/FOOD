import React, {useEffect, useState} from 'react'

export default function ManageMenu(){
  const [items,setItems] = useState([])
  const [name,setName] = useState('')
  const [price,setPrice] = useState('')
  useEffect(()=>{ fetch('/api/menu').then(r=>r.json()).then(setItems).catch(()=>{}) },[])
  const add = async ()=>{
    await fetch('/api/menu', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({name,price})});
    setItems([...items, {id:Date.now(), name, price}]); setName(''); setPrice('')
  }
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Menu</h3>
      <div className="grid md:grid-cols-2 gap-4">
        {items.map(it=>(<div key={it.id} className="card p-3">{it.name} — ${it.price}</div>))}
      </div>
      <div className="card p-4">
        <h4 className="font-semibold">Add item</h4>
        <input className="w-full mt-2 p-2 rounded-md" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="w-full mt-2 p-2 rounded-md" placeholder="Price" value={price} onChange={e=>setPrice(e.target.value)} />
        <div className="mt-2"><button className="rcb-btn" onClick={add}>Add</button></div>
      </div>
    </div>
  )
}
