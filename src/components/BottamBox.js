import React from 'react'
import LeftTable from './BottamBox/LeftTable'
import RightTable from './BottamBox/RightTable'
import { FcAddDatabase, FcConferenceCall } from 'react-icons/fc'

export default function BottamBox() {
  return (
    <div>
      <div className='flex px-[15px] gap-5 '>
        <div className='bg-slate-200 h-[580px] w-[50%] border border-yellow-400 rounded-[10px]'>
        <p className="font-bold px-4 py-2 h-10">RECENT INVOICE</p>
        <LeftTable/>
        <div className="flex px-4 py-3">
          <button className="px-3 py-1 text-black border border-yellow-500 rounded hover:bg-black hover:text-white flex gap-1">
            <FcAddDatabase className="mt-1" /> New Registration
          </button>
        </div>
        </div>
        <div className='bg-slate-200 h-[580px] w-[50%] border border-yellow-400 rounded-[10px]'>
        <p className="font-bold px-4 py-2 h-10">TODAY EMPLOYEE STATUS</p>
        <RightTable/>
        <div className="flex px-4 py-3">
          <button className="px-3 py-1 text-black border border-yellow-500 rounded hover:bg-black hover:text-white flex gap-1">
            <FcConferenceCall className="mt-1" /> Daily Attendance
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}
