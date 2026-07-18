import React from 'react'

export default function Modal({open, onClose, children}){
  if(!open) return null;
  return (
    <div className="fixed inset-0 flex items-end md:items-center justify-center bg-black/50 p-4">
      <div className="bg-[#0d0d0d] rounded-lg p-4 max-w-lg w-full"> 
        <div className="flex justify-end"><button onClick={onClose} className="text-white/60">Close</button></div>
        {children}
      </div>
    </div>
  )
}
