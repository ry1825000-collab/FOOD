import React from 'react'

export default function OrderTracker({steps = [], current = 0}){
  return (
    <div className="card p-4">
      <div className="flex flex-col gap-4">
        {steps.map((s,i)=> (
          <div key={i} className={`flex items-center gap-4 ${i<=current? 'opacity-100' : 'opacity-50'}`}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${i<=current? 'bg-rcb-primary' : 'bg-white/6'}`}>{i+1}</div>
            <div>
              <div className="font-semibold">{s.title}</div>
              <div className="text-sm text-white/70">{s.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
