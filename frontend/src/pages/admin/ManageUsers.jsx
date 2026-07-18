import React, {useEffect, useState} from 'react'

export default function ManageUsers(){
  const [users,setUsers] = useState([])
  useEffect(()=>{ fetch('/api/users').then(r=>r.json()).then(setUsers).catch(()=>{}) },[])
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">Users</h3>
      <div className="grid gap-2">
        {users.map(u=> <div key={u.id} className="card p-3 flex justify-between"><div>{u.name||u.email}</div><div className="text-sm text-white/60">{u.email}</div></div>)}
      </div>
    </div>
  )
}
