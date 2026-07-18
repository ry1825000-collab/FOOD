import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import FoodListing from './pages/FoodListing'
import FoodDetails from './pages/FoodDetails'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import Tracking from './pages/Tracking'
import AdminDashboard from './pages/AdminDashboard'
import ManageMenu from './pages/admin/ManageMenu'
import ManageOrders from './pages/admin/ManageOrders'
import ManageUsers from './pages/admin/ManageUsers'

export default function App(){
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="p-6 max-w-6xl mx-auto">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/listing" element={<FoodListing/>} />
          <Route path="/food/:id" element={<FoodDetails/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/tracking" element={<Tracking/>} />
          <Route path="/admin" element={<AdminDashboard/>} />
          <Route path="/admin/menu" element={<ManageMenu/>} />
          <Route path="/admin/orders" element={<ManageOrders/>} />
          <Route path="/admin/users" element={<ManageUsers/>} />
        </Routes>
      </main>
    </div>
  )
}
