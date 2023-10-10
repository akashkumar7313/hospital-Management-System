import React from "react";
import {
  BsFillCaretDownFill,
  BsFillFileEarmarkMedicalFill,
  BsFillClipboard2CheckFill,
  BsFillFileTextFill,
  BsFillGearFill,
  BsPeopleFill,
  BsFillFileRichtextFill,
} from "react-icons/bs";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import Navbar from "../../Navbar";
import { NavLink } from "react-router-dom";
import { Breadcrumbs } from "@material-tailwind/react";
import { FcAlphabeticalSortingAz, FcPlus } from "react-icons/fc";

export default function Nationality() {
  let count = 1;

  const dynamicData = [
    {
      description: "Rota Virous lgM",
      reportHeading: "Rota Virous",
      charges: "600",
      carryOut: "Everyday",
      reportDelivery: "Same Day",
      type: "Special",
      users: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Symbol_category_class.svg/996px-Symbol_category_class.svg.png",
      ],
    },
    {
      description: "Rota Virous lgG",
      reportHeading: "Rota Virous lgG",
      charges: "500",
      carryOut: "Everyday",
      reportDelivery: "Next Day",
      type: "Riutine",
      users: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Symbol_category_class.svg/996px-Symbol_category_class.svg.png",
      ],
    },
    {
      description: "Rota Virous lgM",
      reportHeading: "Rota Virous",
      charges: "600",
      carryOut: "Everyday",
      reportDelivery: "Same Day",
      type: "Special",
      users: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Symbol_category_class.svg/996px-Symbol_category_class.svg.png",
      ],
    },
    {
      description: "Rota Virous lgG",
      reportHeading: "Rota Virous lgG",
      charges: "500",
      carryOut: "Everyday",
      reportDelivery: "Next Day",
      type: "Riutine",
      users: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Symbol_category_class.svg/996px-Symbol_category_class.svg.png",
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="p-3 ">
        <div className="h-auto w-[100%] bg-white border border-blue-600 rounded-[10px]">
          <div className="bg-slate-200 h-[75px] w-full rounded-t-[10px] flex">
            <div className="flex items-center justify-evenly sm:gap-0 md:gap-[230px] lg:gap-[740px]">
              <div className=" sm:px-6 lg:px-5">
                <div className="px-1 ">
                  <div>
                    <h2 className=" mx-4 text-2xl font-semibold">Nationality</h2>
                    <Breadcrumbs className="flex">
                      <NavLink
                        to="/"
                        className="text-[16px] font-semibold text-blue-500 hover:text-blue-700 underline"
                      >
                        Dashboard
                      </NavLink>
                      <NavLink
                        to="/Master/Nationality"
                        className="text-[14px] font-semibold text-slate-500"
                      >
                        Nationality
                      </NavLink>
                    </Breadcrumbs>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex gap-1">
                  <div className="flex">
                    <div className="h-10 w-12 border border-blue-600 hover:bg-blue-600">
                      {" "}
                      <BsFillFileEarmarkMedicalFill className="h-6 w-6 mx-2.5 my-1.5" />
                    </div>
                    <div className="h-10 w-12 border border-blue-600 hover:bg-blue-600">
                      {" "}
                      <BsFillClipboard2CheckFill className="h-6 w-6 mx-3 my-1.5" />
                    </div>
                    <div className="h-10 w-12 border border-blue-600 hover:bg-blue-600">
                      <BsFillFileTextFill className="h-6 w-6 mx-2.5 my-1.5" />
                    </div>
                  </div>
                  <div className="flex">
                    <div className="h-10 w-12 border border-blue-600 hover:bg-blue-600">
                      {" "}
                      <BsFillGearFill className="h-6 w-6 mx-3 my-1.5" />
                    </div>
                    <div className="h-10 w-12 border border-blue-600 hover:bg-blue-600">
                      <BsPeopleFill className="h-6 w-6 mx-3 my-1.5" />
                    </div>
                    <div className="h-10 w-12 border border-blue-600 hover:bg-blue-600">
                      <BsFillFileRichtextFill className="h-6 w-6 mx-3 my-1.5" />
                    </div>
                  </div>
                  <button className="bg-red-700 hover:bg-red-800text-black px-4 py-2 rounded-[5px] flex gap-1">
                    User <BsFillCaretDownFill className="mt-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <hr className=" h-[1px] bg-gray-400 border-1"></hr>
          <div className="w-full p-5 ">
            <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg text-black border border-yellow-500 rounded-[10px]">
              <div className="bg-slate-200 h-[60px] w-[100%] rounded-t-[10px] flex items-center justify-between">
                <p className="font-semibold text-xl px-4 flex items-center gap-2"> <FcAlphabeticalSortingAz className=" h-10 w-8" />Nationality</p>
                <div className="flex mx-5">
                  <button className="px-3 py-1 text-black border border-yellow-500 rounded hover:bg-black hover:text-white flex gap-1">
                    <FcPlus className="mt-1" /> Add New Test
                  </button>
                  <button className="px-3 mx-2 py-1 text-black border border-yellow-500 rounded hover:bg-black hover:text-white flex gap-1">
                    <FcPlus className="mt-1" /> Print
                  </button>
                </div>
              </div>
              <hr className="h-[1px] bg-gray-400 border-1"></hr>
              <div className="w-full overflow-x-auto rounded-b-[10px]">
                <div className="overflow-y-auto h-auto">
                  <table className="items-center w-full bg-transparent border-collapse">
                    <thead className="sticky top-0">
                      <tr>
                        <th className="px-6 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-yellow-500 text-black border-cyan-500">
                          #
                        </th>
                        <th className=" align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-yellow-500 text-black border-cyan-500">
                          Test No.
                        </th>
                        <th className="px-10 align-middle py-2 text-[16px]  uppercase whitespace-nowrap font-semibold text-left bg-yellow-500 text-black border-cyan-500">
                        description
                        </th>
                        {/* Add the new heading */}
                        <th className="px-4 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-yellow-500 text-black border-cyan-500">
                       Report Heading
                        </th>
                        <th className="px-4 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-yellow-500 text-black border-cyan-500">
                        charges
                        </th>
                        <th className="px-4 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-yellow-500 text-black border-cyan-500">
                        carry Out
                        </th>
                        <th className="px-4 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-yellow-500 text-black border-cyan-500">
                        report Delivery
                        </th>
                        <th className="px-6 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-yellow-500 text-black border-cyan-500">
                      type
                        </th>
                        <th className="px-4 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-yellow-500 text-black border-cyan-500">
                          Status
                        </th>
                        <th className="px-4 align-middle py-2 text-[16px] uppercase whitespace-nowrap font-semibold text-left bg-yellow-500 text-black border-cyan-500">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {dynamicData.map((item, index) => (
                        <tr
                          key={index}
                          className={
                            index % 2 === 0
                              ? "bg-green-200 border border-t-slate-500 border-b-slate-500 w"
                              : "bg-red-200"
                          }
                        >
                          <th className="px-3 p-2 flex items-center">
                            <img
                              src={item.users[0]}
                              className="h-8 w-8 "
                              alt="..."
                            />
                          </th>
                          <td className="px-6 text-[16px] whitespace-nowrap">
                            {count++} {/* Display and increment the count */}
                          </td>
                          <td className="border-t-0 px-9 text-[16px] whitespace-nowrap p-4">
                            {item.description}
                          </td>
                          <td className="border-t-0 px-6 text-[16px] whitespace-nowrap p-4">
                            {item.reportHeading}
                          </td>
                          <td className="border-t-0 px-6 text-[16px] whitespace-nowrap p-4">
                            {item.charges}
                          </td>
                          <td className="border-t-0 px-6 text-[16px] whitespace-nowrap p-4">
                            {item.carryOut}
                          </td>
                          <td className="border-t-0 px-12 text-[16px] whitespace-nowrap p-4">
                            {item.reportDelivery}
                          </td>
                          <td className="border-t-0 px-6 text-[16px] whitespace-nowrap p-4">
                            {item.type}
                          </td>
                          <td className=" text-[16px] whitespace-nowrap p-2">
                            <button className="bg-green-600 hover:bg-green-800 text-white px-3 py-1 rounded-lg mr-2">
                              Active
                            </button>
                          </td>
                          <td className=" text-[16px] whitespace-nowrap p-2">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg mr-2">
                              <AiFillEdit />
                            </button>
                            <button className="bg-red-600 hover:bg-red-700 text-white px-2 py-1 rounded-lg mr-2">
                              <AiFillDelete />
                            </button>
                          </td>
                        </tr>
                      ))}

                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
