import React from 'react'
import PieChart from './Charts/PieChart'
import BarChart from './Charts/BarChart'

export default function MiddleBox() {
  return (
    <div>
       <div className='flex p-[15px] gap-5 '>
        <div className='bg-slate-100 h-[500px] w-[60%] border border-yellow-400 rounded-[10px]'>
        <p className="font-bold bg-slate-200 rounded-t-[10px] px-4 py-2 h-10">SALES & EXPENSES</p>
        <BarChart/>
        </div>
        <div className='bg-slate-100 h-[500px] w-[40%] border border-yellow-400 rounded-[10px]'>
        <p className="font-bold bg-slate-200 rounded-t-[10px] px-4 py-2 h-10">MONTHLY TESTS PERFORMED</p>
        <PieChart/>
        </div>
      </div>
    </div>
  )
}
