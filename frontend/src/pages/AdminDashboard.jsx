import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

export default function AdminDashboard(){
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Admin Panel</h2>
      <div className="grid md:grid-cols-3 gap-4">
        <Link to="/admin/users" className="card p-4 text-center glass">Manage Users</Link>
        <Link to="/admin/menu" className="card p-4 text-center glass">Manage Menu</Link>
        <Link to="/admin/orders" className="card p-4 text-center glass">Manage Orders</Link>
      </div>
    </div>
  )
}
