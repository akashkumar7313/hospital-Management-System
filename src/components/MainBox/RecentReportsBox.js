import React from "react";
import { FcRules, FcApproval, FcDiploma2 } from "react-icons/fc";
import Datepicker from "../DatePicker";
import RightTable from "./RightTable";

export default function RecentReportsBox() {
  return (
    <div className="bg-slate-100 h-[600px] w-[50%] border border-yellow-400 rounded-[10px] overflow-hidden">
      <div className="bg-slate-200 h-[60px] w-[100%] rounded-t-[10px] flex items-center">
        <p className="font-bold px-4">RECENT REPORTS()</p>
        <div className="flex items-center pl-44">
          <Datepicker className="" />
          <div>
            <button className="px-3 py-1 text-black border border-yellow-500 rounded hover:bg-black hover:text-white flex gap-1">
              <FcRules className="mt-1" /> Create Report
            </button>
          </div>
        </div>
      </div>
      <hr className="h-[1px] bg-gray-400 border-1"></hr>
      <RightTable />
      <div className="bg-slate-200 h-[60px] w-[100%] rounded-b-[10px] flex items-center">
        <div className="flex px-4 gap-2">
          <button className="px-3 py-1 text-black border border-yellow-500 rounded hover:bg-black hover:text-white flex gap-1">
            <FcDiploma2 className="mt-1" /> Pending Report
          </button>
          <button className="px-3 py-1 text-black border border-yellow-500 rounded hover:bg-black hover:text-white flex gap-1">
            <FcApproval className="mt-1" /> Completed Report
          </button>
        </div>
      </div>
    </div>
  );
}
