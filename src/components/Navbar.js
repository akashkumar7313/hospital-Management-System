import { Fragment, useState } from "react";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { BsStopwatch } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { BsPinMap } from "react-icons/bs";
import {
  FcAlphabeticalSortingZa,
  FcOrgUnit,
  FcBiotech,
  FcMindMap,
  FcCurrencyExchange,
  FcBusinessman,
  FcDepartment,
  FcStumbleupon,
  FcViewDetails,
  FcDebt,
  FcAddDatabase,
  FcPortraitMode,
  FcNook,
  FcDiploma2,
  FcDocument,
  FcDiploma1,
  FcRules,
  FcReadingEbook,
  FcList,
  FcReading,
  FcAddressBook,
  FcLibrary,
  FcAreaChart,
  FcConferenceCall,
  FcMoneyTransfer,
  FcPodiumWithSpeaker,
  FcPlanner,
  FcApproval
} from "react-icons/fc";
import logo from "../assets/70619297f45c3ba6ba0d29dd83c63c8b.jpg";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link, NavLink } from "react-router-dom";

const Masters = [
  {
    name: "| Category",
    to: "/Master/Category",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcAlphabeticalSortingZa,
  },
  {
    name: "| Units",
    to: "/Master/Unit",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcOrgUnit,
  },
  {
    name: "| Department",
    to: "/Master/Department",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcDepartment,
  },
  {
    name: "| Test",
    to: "/Master/Test",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcBiotech,
  },
  {
    name: "| Test Particulars",
    to: "/Master/TestParticulars",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcMindMap,
  },
  {
    name: "| Blood Groups",
    to: "/Master/BloodGroups",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcStumbleupon,
  },
  {
    name: "| Payment Mode",
    to: "/Master/PaymentMode",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcCurrencyExchange,
  },
  {
    name: "| Nationality",
    to: "/Master/Nationality",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcBusinessman,
  },
];

const Doctor = [
  {
    name: "| Add Doctor",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcAddDatabase,
  },
  {
    name: "| Doctor Commision",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcDebt,
  },
  {
    name: "| Report",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcViewDetails,
  },
];

const Patient = [
  {
    name: "| Patient",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcPortraitMode,
  },
  {
    name: "| Registration",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcAddDatabase,
  },
  {
    name: "| Visit Details",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcNook,
  },
  {
    name: "| Report Manager",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcViewDetails,
  },
];

const Invoice = [
  {
    name: "| Create Invoice",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcDocument,
  },
  {
    name: "| Bills",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcDiploma2,
  },
  {
    name: "| Bisiness Report",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcViewDetails,
  },
];

const Pathology = [
  {
    name: "| Pathology Report",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcDocument,
  },
  {
    name: "| Pnnding Report",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcDiploma2,
  },
  {
    name: "| Completed Report",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcApproval,
  },
  {
    name: "| Finding Report",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcRules,
  },
  {
    name: "| Report Manager",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcViewDetails,
  },
];

const Ledger = [
  {
    name: "| Group",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcDocument,
  },
  {
    name: "| Ledger Group",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcDiploma1,
  },
  {
    name: "| Ledger Report",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcDiploma2,
  },
];

const Supplier = [
  {
    name: "| Item Type",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcList,
  },
  {
    name: "| Vendor",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcReadingEbook,
  },
  {
    name: "| Item Master",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcDocument,
  },
];

const Purchase = [
  {
    name: "| Item Inward",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcDiploma2,
  },
  {
    name: "| Manage Purchase",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcReading,
  },
  {
    name: "| Purchase Report",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcRules,
  },
];

const Acount = [
  {
    name: "| Voucher Entry",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcAddressBook,
  },
  {
    name: "| Day Book",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcReading,
  },
  {
    name: "| Trial Balance",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcCurrencyExchange,
  },
  {
    name: "| Cash & Bank Book",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcLibrary,
  },
  {
    name: "| Pfofit & Loss",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcAreaChart,
  },
  {
    name: "| Balance Sheet",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcRules,
  },
  {
    name: "| Delete Voucher",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcDiploma2,
  },
];

const HRM = [
  {
    name: "| Employee Registration",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcConferenceCall,
  },
  {
    name: "| Employee Details",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcReadingEbook,
  },
  {
    name: "| Employee Import",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcRules,
  },
  {
    name: "| Dept/Designation",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcDiploma2,
  },
  {
    name: "| Employee Attendance",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcReading,
  },
  {
    name: "| Salary Scheme",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcRules,
  },
  {
    name: "| Employee Salary Scheme",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcDebt,
  },
  {
    name: "| Salary Scheme",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcCurrencyExchange,
  },
  {
    name: "| Salary Generation",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcMoneyTransfer,
  },
  {
    name: "| Salary Slip/Payment",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcDiploma2,
  },
  {
    name: "| Daily Attendence",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcReading,
  },
  {
    name: "| Leave Assign",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcRules,
  },
  {
    name: "| Employee Leave Assign",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
    icon: FcPodiumWithSpeaker,
  },
  {
    name: "| Leave Application",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcPlanner,
  },
  {
    name: "| Advance Paid",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcRules,
  },
  {
    name: "| Security Deposit",
    to: "/",
    component: Link,
    className:
      "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
     
    icon: FcDiploma2,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div>
      <div>
        <div className="bg-blue-500 h-[75px] lg:h-[30px] w-[100%]">
          <ul className="md:ml-8 flex flex-wrap md:gap-0 lg:gap-7 pt-1 sm:ml-2 text-[12px] sm:text-[14px] font-semibold justify-center  text-white drop-shadow-md">
            <li className=" flex items-center gap-2">
              <BsTelephone />
              <span className="text-black">
                Phone:{" "}
                <NavLink className="text-white" to="tel:+91 8081405950">
                  +91 5597892463
                </NavLink>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <AiOutlineMail />
              <span className="text-black">
                Email:{" "}
                <NavLink className="text-white" to="mailto:support@itgrowing.in">
                  support@gmail.in
                </NavLink>
              </span>
            </li>
            <li className="flex items-center gap-2">
              <BsStopwatch />
              <span className="text-black">Support Time: </span> We Provide 24x7
              Services
            </li>
            <li className="flex items-center gap-2">
              <BsPinMap />
              <span className="text-black">Address:</span> Lucknow,Uttar
              Pradesh,208002
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <header className="bg-blue-500">
        <nav
          className="mx-auto flex max-w-10xl items-center justify-between p-3"
          aria-label="Global"
        >
          {/* logo */}
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-10 w-18" src={logo} alt="" />
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-4">
            <NavLink to="/" className="text-sm font-semibold leading-6 text-white">
              Dashboard
            </NavLink>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Masters
                <ChevronDownIcon
                  className="h-4 w-4 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-10 top-full z-10 mt-3 w-[200px]  overflow-hidden rounded-[10px] bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className=" divide-black bg-white ">
                    {Masters.map((item) => (
                      <item.component
                        key={item.name}
                        to={item.to}
                        className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                        activeClassName="text-blue-500" // Apply active styles if using NavLink
                      >
                        <item.icon
                          className="h-5 w-5 ml-2 flex-none"
                          aria-hidden="true"
                        />
                        {item.name}
                      </item.component>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Doctor
                <ChevronDownIcon
                  className="h-4 w-4 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-10 top-full z-10 mt-3 w-[200px]  overflow-hidden rounded-[10px] bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className=" divide-black bg-white ">
                    {Doctor.map((item) => (
                      <item.component
                        key={item.name}
                        to={item.to}
                        className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                        activeClassName="text-blue-500" // Apply active styles if using NavLink
                      >
                        <item.icon
                          className="h-5 w-5 ml-2 flex-none"
                          aria-hidden="true"
                        />
                        {item.name}
                      </item.component>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Patient
                <ChevronDownIcon
                  className="h-4 w-4 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-10 top-full z-10 mt-3 w-[200px]  overflow-hidden rounded-[10px] bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className=" divide-black bg-white ">
                    {Patient.map((item) => (
                      <item.component
                        key={item.name}
                        to={item.to}
                        className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                        activeClassName="text-blue-500" // Apply active styles if using NavLink
                      >
                        <item.icon
                          className="h-5 w-5 ml-2 flex-none"
                          aria-hidden="true"
                        />
                        {item.name}
                      </item.component>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Invoice
                <ChevronDownIcon
                  className="h-4 w-4 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-10 top-full z-10 mt-3 w-[200px]  overflow-hidden rounded-[10px] bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className=" divide-black bg-white ">
                    {Invoice.map((item) => (
                      <item.component
                        key={item.name}
                        to={item.to}
                        className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                        activeClassName="text-blue-500" // Apply active styles if using NavLink
                      >
                        <item.icon
                          className="h-5 w-5 ml-2 flex-none"
                          aria-hidden="true"
                        />
                        {item.name}
                      </item.component>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Pathology
                <ChevronDownIcon
                  className="h-4 w-4 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-10 top-full z-10 mt-3 w-[200px]  overflow-hidden rounded-[10px] bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className=" divide-black bg-white ">
                    {Pathology.map((item) => (
                      <item.component
                        key={item.name}
                        to={item.to}
                        className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                        activeClassName="text-blue-500" // Apply active styles if using NavLink
                      >
                        <item.icon
                          className="h-5 w-5 ml-2 flex-none"
                          aria-hidden="true"
                        />
                        {item.name}
                      </item.component>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Ledger
                <ChevronDownIcon
                  className="h-4 w-4 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-10 top-full z-10 mt-3 w-[200px]  overflow-hidden rounded-[10px] bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className=" divide-black bg-white ">
                    {Ledger.map((item) => (
                      <item.component
                        key={item.name}
                        to={item.to}
                        className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                        activeClassName="text-blue-500" // Apply active styles if using NavLink
                      >
                        <item.icon
                          className="h-5 w-5 ml-2 flex-none"
                          aria-hidden="true"
                        />
                        {item.name}
                      </item.component>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Supplier
                <ChevronDownIcon
                  className="h-4 w-4 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-10 top-full z-10 mt-3 w-[200px]  overflow-hidden rounded-[10px] bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className=" divide-black bg-white ">
                    {Supplier.map((item) => (
                      <item.component
                        key={item.name}
                        to={item.to}
                        className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                        activeClassName="text-blue-500" // Apply active styles if using NavLink
                      >
                        <item.icon
                          className="h-5 w-5 ml-2 flex-none"
                          aria-hidden="true"
                        />
                        {item.name}
                      </item.component>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Purchase
                <ChevronDownIcon
                  className="h-4 w-4 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-10 top-full z-10 mt-3 w-[200px]  overflow-hidden rounded-[10px] bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className=" divide-black bg-white ">
                    {Purchase.map((item) => (
                      <item.component
                        key={item.name}
                        to={item.to}
                        className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                        activeClassName="text-blue-500" // Apply active styles if using NavLink
                      >
                        <item.icon
                          className="h-5 w-5 ml-2 flex-none"
                          aria-hidden="true"
                        />
                        {item.name}
                      </item.component>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                Acount
                <ChevronDownIcon
                  className="h-4 w-4 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-10 top-full z-10 mt-3 w-[200px]  overflow-hidden rounded-[10px] bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className=" divide-black bg-white ">
                    {Acount.map((item) => (
                      <item.component
                        key={item.name}
                        to={item.to}
                        className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                        activeClassName="text-blue-500" // Apply active styles if using NavLink
                      >
                        <item.icon
                          className="h-5 w-5 ml-2 flex-none"
                          aria-hidden="true"
                        />
                        {item.name}
                      </item.component>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                HRM
                <ChevronDownIcon
                  className="h-4 w-4 flex-none text-white"
                  aria-hidden="true"
                />
              </Popover.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-10 top-full z-10 mt-3 w-[250px]  overflow-hidden rounded-[10px] bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className=" divide-black bg-white ">
                    {HRM.map((item) => (
                      <item.component
                        key={item.name}
                        to={item.to}
                        className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                        activeClassName="text-blue-500" // Apply active styles if using NavLink
                      >
                        <item.icon
                          className="h-5 w-5 ml-2 flex-none"
                          aria-hidden="true"
                        />
                        {item.name}
                      </item.component>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>

            <NavLink to="/" className="text-sm font-semibold leading-6 text-white">
              Setting
            </NavLink>
            <NavLink to="/" className="text-sm font-semibold leading-6 text-white">
              User Management
            </NavLink>
            <NavLink to="/" className="text-sm font-semibold leading-6 text-white">
              Log in <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </Popover.Group>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-10" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-10 w-auto" src={logo} alt="" />
              </NavLink>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <NavLink
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black  hover:text-blue-500"
                  >
                    Dashboard
                  </NavLink>
                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500">
                          Masters
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                          {Masters.map((item) => {
                            const Icon = item.icon;
                            return (
                              <item.component
                                key={item.name}
                                to={item.to}
                                className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                                activeClassName="text-blue-500"
                              >
                                <Icon
                                  className="h-5 w-5 ml-2 flex-none"
                                  aria-hidden="true"
                                />{" "}
                                {item.name}
                              </item.component>
                            );
                          })}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500">
                          Doctor
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                        {Doctor.map((item) => {
                            const Icon = item.icon;
                            return (
                              <item.component
                                key={item.name}
                                to={item.to}
                                className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                                activeClassName="text-blue-500"
                              >
                                <Icon
                                  className="h-5 w-5 ml-2 flex-none"
                                  aria-hidden="true"
                                />{" "}
                                {item.name}
                              </item.component>
                            );
                          })}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500">
                          Patient
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                        {Patient.map((item) => {
                            const Icon = item.icon;
                            return (
                              <item.component
                                key={item.name}
                                to={item.to}
                                className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                                activeClassName="text-blue-500"
                              >
                                <Icon
                                  className="h-5 w-5 ml-2 flex-none"
                                  aria-hidden="true"
                                />{" "}
                                {item.name}
                              </item.component>
                            );
                          })}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500">
                          Invoice
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                        {Invoice.map((item) => {
                            const Icon = item.icon;
                            return (
                              <item.component
                                key={item.name}
                                to={item.to}
                                className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                                activeClassName="text-blue-500"
                              >
                                <Icon
                                  className="h-5 w-5 ml-2 flex-none"
                                  aria-hidden="true"
                                />{" "}
                                {item.name}
                              </item.component>
                            );
                          })}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500">
                          Pathology
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                        {Pathology.map((item) => {
                            const Icon = item.icon;
                            return (
                              <item.component
                                key={item.name}
                                to={item.to}
                                className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                                activeClassName="text-blue-500"
                              >
                                <Icon
                                  className="h-5 w-5 ml-2 flex-none"
                                  aria-hidden="true"
                                />{" "}
                                {item.name}
                              </item.component>
                            );
                          })}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500">
                          Ledger
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                        {Ledger.map((item) => {
                            const Icon = item.icon;
                            return (
                              <item.component
                                key={item.name}
                                to={item.to}
                                className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                                activeClassName="text-blue-500"
                              >
                                <Icon
                                  className="h-5 w-5 ml-2 flex-none"
                                  aria-hidden="true"
                                />{" "}
                                {item.name}
                              </item.component>
                            );
                          })}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500">
                          Supplier
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                        {Supplier.map((item) => {
                            const Icon = item.icon;
                            return (
                              <item.component
                                key={item.name}
                                to={item.to}
                                className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                                activeClassName="text-blue-500"
                              >
                                <Icon
                                  className="h-5 w-5 ml-2 flex-none"
                                  aria-hidden="true"
                                />{" "}
                                {item.name}
                              </item.component>
                            );
                          })}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500">
                          Purchase
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                        {Purchase.map((item) => {
                            const Icon = item.icon;
                            return (
                              <item.component
                                key={item.name}
                                to={item.to}
                                className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                                activeClassName="text-blue-500"
                              >
                                <Icon
                                  className="h-5 w-5 ml-2 flex-none"
                                  aria-hidden="true"
                                />{" "}
                                {item.name}
                              </item.component>
                            );
                          })}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500">
                          Acount
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                        {Acount.map((item) => {
                            const Icon = item.icon;
                            return (
                              <item.component
                                key={item.name}
                                to={item.to}
                                className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                                activeClassName="text-blue-500"
                              >
                                <Icon
                                  className="h-5 w-5 ml-2 flex-none"
                                  aria-hidden="true"
                                />{" "}
                                {item.name}
                              </item.component>
                            );
                          })}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <Disclosure as="div" className="-mx-3">
                    {({ open }) => (
                      <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500">
                          HRM
                          <ChevronDownIcon
                            className={classNames(
                              open ? "rotate-180" : "",
                              "h-5 w-5 flex-none"
                            )}
                            aria-hidden="true"
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className="mt-2 space-y-2">
                        {HRM.map((item) => {
                            const Icon = item.icon;
                            return (
                              <item.component
                                key={item.name}
                                to={item.to}
                                className="flex items-start gap-x-1 p-3 text-sm font-semibold leading-5 text-gray-800 hover:bg-blue-100 hover:text-blue-500"
                                activeClassName="text-blue-500"
                              >
                                <Icon
                                  className="h-5 w-5 ml-2 flex-none"
                                  aria-hidden="true"
                                />{" "}
                                {item.name}
                              </item.component>
                            );
                          })}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>

                  <NavLink
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:text-blue-500"
                  >
                    Setting
                  </NavLink>
                  <NavLink
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black  hover:text-blue-500"
                  >
                    User Management
                  </NavLink>
                </div>
                <div className="py-2">
                  <NavLink
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black  hover:text-blue-500"
                  >
                    Log in
                  </NavLink>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
