import React, {useEffect, useState} from 'react'

export default function ManageOrders(){
  const [orders,setOrders] = useState([])
  useEffect(()=>{
    fetch('/api/admin/orders').then(r=>r.json()).then(setOrders).catch(()=>{})
  },[])
  const updateStatus = async (id, status)=>{
    await fetch(`/api/admin/orders/${id}/status`, {method:'PUT', headers:{'Content-Type':'application/json'}, body:JSON.stringify({status})});
    setOrders(orders.map(o=> o.id===id? {...o, status} : o))
  }
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Orders</h3>
      <div className="space-y-2">
        {orders.map(o=> (
          <div key={o.id} className="card p-3 flex items-center justify-between">
            <div>
              <div className="font-semibold">Order #{o.id}</div>
              <div className="text-sm text-white/70">User: {o.user_id} • Total: ${o.total}</div>
            </div>
            <div className="flex items-center gap-2">
              <select defaultValue={o.status} onChange={(e)=>updateStatus(o.id, e.target.value)} className="bg-[#0b0b0b] p-2 rounded-md">
                <option value="pending">pending</option>
                <option value="preparing">preparing</option>
                <option value="on the way">on the way</option>
                <option value="delivered">delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
