import React from 'react';
import Datepicker from '../DatePicker';
import LeftTable from './LeftTable';
import { FcDocument, FcAddDatabase, FcKindle } from 'react-icons/fc';

export default function TodayVisitBox() {
  return (
    <div className="bg-slate-100 h-[600px] w-[50%] border border-yellow-400 rounded-[10px] overflow-hidden">
      <div className="bg-slate-200 h-[60px] w-[100%] rounded-t-[10px] flex items-center">
        <p className="font-bold px-4">TODAY VISIT()</p>
        <div className="flex items-center pl-[380px]">
          <Datepicker className="" />
        </div>
      </div>
      <hr className="h-[1px] bg-gray-400 border-1"></hr>
        <LeftTable />
      <div className="bg-slate-200 h-[60px] w-[100%] rounded-b-[10px] flex items-center">
      <div className="flex px-4 gap-2">
          <button className="px-3 py-1 text-black border border-yellow-500 rounded hover:bg-black hover:text-white flex gap-1">
            <FcAddDatabase className="mt-1" /> New Registration
          </button>
          <button className="px-3 py-1 text-black border border-yellow-500 rounded hover:bg-black hover:text-white flex gap-1">
            <FcKindle className="mt-1" /> Visit Details
          </button>
          <button className="px-3 py-1 text-black border border-yellow-500 rounded hover:bg-black hover:text-white flex gap-1">
            <FcDocument className="mt-1" /> Create Invoice
          </button>
        </div>
      </div>
    </div>
  );
}
