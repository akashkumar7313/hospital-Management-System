import { Fragment, useState } from 'react'
import React from 'react';
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
    FcPlus,
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
} from "react-icons/fc";
import logo from "../assets/70619297f45c3ba6ba0d29dd83c63c8b.jpg";
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react'
import {
    Bars3Icon,
    ChevronDownIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import { Link, NavLink } from 'react-router-dom';

const Masters = [
    {
        name: "| Category",
        href: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors",
        icon: FcAlphabeticalSortingZa,
    },
    {
        name: '| Units', href: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcOrgUnit
    },
    {
        name: '| Department', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDepartment
    },
    {
        name: '| Test', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcBiotech
    },
    {
        name: '| Test Particulars', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcMindMap
    },
    {
        name: '| Blood Groups', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcStumbleupon
    },
    {
        name: '| Payment Mode', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcCurrencyExchange
    },
    {
        name: '| Nationality', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcBusinessman
    },
]

const Doctor = [
    {
        name: '| Doctor', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcPlus
    },
    {
        name: '| Add Doctor', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcAddDatabase
    },
    {
        name: '| Doctor Commision', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDebt
    },
    {
        name: '| Report', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcViewDetails
    },
]

const Patient = [
    {
        name: '| Patient', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcPortraitMode
    },
    {
        name: '| Registration', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcAddDatabase
    },
    {
        name: '| Visit Details', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcNook
    },
    {
        name: '| Report Manager', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcViewDetails
    },
]

const Invoice = [
    {
        name: '| Create Invoice', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDocument
    },
    {
        name: '| Bills', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDiploma2
    },
    {
        name: '| Bisiness Report', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcViewDetails
    },
]

const Pathology = [
    {
        name: '| Pathology Report', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDocument
    },
    {
        name: '| Pnnding Report', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDiploma2
    },
    {
        name: '| Completed Report', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDiploma1
    },
    {
        name: '| Finding Report', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcRules
    },
    {
        name: '| Report Manager', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcViewDetails
    },
]

const Ledger = [
    {
        name: '| Group', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDocument
    },
    {
        name: '| Ledger Group', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDiploma1
    },
    {
        name: '| Ledger Report', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDiploma2
    },
]

const Supplier = [
    {
        name: '| Item Type', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcList
    },
    {
        name: '| Vendor', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcReadingEbook
    },
    {
        name: '| Item Master', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDocument
    },
]

const Purchase = [
    {
        name: '| Item Inward', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDiploma2
    },
    {
        name: '| Manage Purchase', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcReading
    },
    {
        name: '| Purchase Report', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcRules
    },
]

const Acount = [
    {
        name: '| Voucher Entry', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcAddressBook
    },
    {
        name: '| Day Book', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcReading
    },
    {
        name: '| Trial Balance', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcCurrencyExchange
    },
    {
        name: '| Cash & Bank Book', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcLibrary
    },
    {
        name: '| Pfofit & Loss', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcAreaChart
    },
    {
        name: '| Balance Sheet', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcRules
    },
    {
        name: '| Delete Voucher', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDiploma2
    },
]

const HRM = [
    {
        name: '| Employee Registration', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcConferenceCall
    },
    {
        name: '| Employee Details', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcReadingEbook
    },
    {
        name: '| Employee Import', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcRules
    },
    {
        name: '| Dept/Designation', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDiploma2
    },
    {
        name: '| Employee Attendance', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcReading
    },
    {
        name: '| Salary Scheme', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcRules
    },
    {
        name: '| Employee Salary Scheme', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDebt
    },
    {
        name: '| Salary Scheme', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcCurrencyExchange
    },
    {
        name: '| Salary Generation', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcMoneyTransfer
    },
    {
        name: '| Salary Slip/Payment', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDiploma2
    },
    {
        name: '| Daily Attendence', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcReading
    },
    {
        name: '| Leave Assign', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcRules
    },
    {
        name: '| Employee Leave Assign', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcPodiumWithSpeaker
    },
    {
        name: '| Leave Application', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcPlanner
    },
    {
        name: '| Advance Paid', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcRules
    },
    {
        name: '| Security Deposit', tohref: "/",
        component: Link,
        className:
            "text-sm font-semibold leading-6 hover:text-blue-500 text-gray-900",
        content: "Our Directors", icon: FcDiploma2
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <div>
            <div>
                <div className="bg-blue-500 h-[75px] lg:h-[30px] w-[100%]">
                    <ul className='md:ml-8 flex flex-wrap md:gap-0 lg:gap-14 pt-1 sm:ml-2 text-[12px] sm:text-[14px] font-semibold justify-center  text-white drop-shadow-md'>
                        <li className=' flex items-center gap-2'>
                            <BsTelephone />
                            <span className='text-black'>Phone: <a className='text-white' href="tel:+91 8081405950">+91 5597892463</a></span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <AiOutlineMail />
                            <span className='text-black'>Email: <a className='text-white' href="mailto:support@itgrowing.in">support@gmail.in</a></span>
                        </li>
                        <li className='flex items-center gap-2'>
                            <BsStopwatch />
                            <span className='text-black'>Support Time: </span> We Provide 24x7 Services
                        </li>
                        <li className='flex items-center gap-2'>
                            <BsPinMap />
                            <span className='text-black'>Address:</span> Lucknow,Uttar Pradesh,208002
                        </li>
                    </ul>
                </div>
            </div>
            <hr />
            <header className="bg-blue-500">
                <nav className="mx-auto flex max-w-10xl items-center justify-between p-3" aria-label="Global">
                    {/* logo */}
                    <div className="flex lg:flex-1">
                        <a href="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img className="h-10 w-18" src={logo} alt="" />
                        </a>
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
                        <a href="/" className="text-sm font-semibold leading-6 text-white">
                            Dashboard
                        </a>
                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                Masters
                                <ChevronDownIcon className="h-4 w-4 flex-none text-white" aria-hidden="true" />
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
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                            >
                                                <div className="flex-auto">
                                                    {item.component ? (
                                                        <item.component
                                                            to={item.href}
                                                            className={item.className}
                                                        >
                                                            {item.content}
                                                        </item.component>
                                                    ) : (
                                                        <a href={item.href} className="block font-semibold">
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                Doctor
                                <ChevronDownIcon className="h-4 w-4 flex-none text-white" aria-hidden="true" />
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
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                            >
                                                <div className="flex-auto">
                                                    {item.component ? (
                                                        <item.component
                                                            to={item.href}
                                                            className={item.className}
                                                        >
                                                            {item.content}
                                                        </item.component>
                                                    ) : (
                                                        <a href={item.href} className="block font-semibold">
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                Patient
                                <ChevronDownIcon className="h-4 w-4 flex-none text-white" aria-hidden="true" />
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
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                            >
                                                <div className="flex-auto">
                                                    {item.component ? (
                                                        <item.component
                                                            to={item.href}
                                                            className={item.className}
                                                        >
                                                            {item.content}
                                                        </item.component>
                                                    ) : (
                                                        <a href={item.href} className="block font-semibold">
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                Invoice
                                <ChevronDownIcon className="h-4 w-4 flex-none text-white" aria-hidden="true" />
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
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                            >
                                                <div className="flex-auto">
                                                    {item.component ? (
                                                        <item.component
                                                            to={item.href}
                                                            className={item.className}
                                                        >
                                                            {item.content}
                                                        </item.component>
                                                    ) : (
                                                        <a href={item.href} className="block font-semibold">
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                Pathology
                                <ChevronDownIcon className="h-4 w-4 flex-none text-white" aria-hidden="true" />
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
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                            >
                                                <div className="flex-auto">
                                                    {item.component ? (
                                                        <item.component
                                                            to={item.href}
                                                            className={item.className}
                                                        >
                                                            {item.content}
                                                        </item.component>
                                                    ) : (
                                                        <a href={item.href} className="block font-semibold">
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                Ledger
                                <ChevronDownIcon className="h-4 w-4 flex-none text-white" aria-hidden="true" />
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
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                            >
                                                <div className="flex-auto">
                                                    {item.component ? (
                                                        <item.component
                                                            to={item.href}
                                                            className={item.className}
                                                        >
                                                            {item.content}
                                                        </item.component>
                                                    ) : (
                                                        <a href={item.href} className="block font-semibold">
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                Supplier
                                <ChevronDownIcon className="h-4 w-4 flex-none text-white" aria-hidden="true" />
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
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                            >
                                                <div className="flex-auto">
                                                    {item.component ? (
                                                        <item.component
                                                            to={item.href}
                                                            className={item.className}
                                                        >
                                                            {item.content}
                                                        </item.component>
                                                    ) : (
                                                        <a href={item.href} className="block font-semibold">
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                Purchase
                                <ChevronDownIcon className="h-4 w-4 flex-none text-white" aria-hidden="true" />
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
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                            >
                                                <div className="flex-auto">
                                                    {item.component ? (
                                                        <item.component
                                                            to={item.href}
                                                            className={item.className}
                                                        >
                                                            {item.content}
                                                        </item.component>
                                                    ) : (
                                                        <a href={item.href} className="block font-semibold">
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                Acount
                                <ChevronDownIcon className="h-4 w-4 flex-none text-white" aria-hidden="true" />
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
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                            >
                                                <div className="flex-auto">
                                                    {item.component ? (
                                                        <item.component
                                                            to={item.href}
                                                            className={item.className}
                                                        >
                                                            {item.content}
                                                        </item.component>
                                                    ) : (
                                                        <a href={item.href} className="block font-semibold">
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <Popover className="relative">
                            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                HRM
                                <ChevronDownIcon className="h-4 w-4 flex-none text-white" aria-hidden="true" />
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
                                            <div
                                                key={item.name}
                                                className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-200"
                                            >
                                                <div className="flex-auto">
                                                    {item.component ? (
                                                        <item.component
                                                            to={item.href}
                                                            className={item.className}
                                                        >
                                                            {item.content}
                                                        </item.component>
                                                    ) : (
                                                        <a href={item.href} className="block font-semibold">
                                                            {item.name}
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </Popover.Panel>
                            </Transition>
                        </Popover>

                        <a href="/" className="text-sm font-semibold leading-6 text-white">
                            Setting
                        </a>
                        <a href="/" className="text-sm font-semibold leading-6 text-white">
                            User Management
                        </a>
                        <a href="/" className="text-sm font-semibold leading-6 text-white">
                            Log in <span aria-hidden="true">&rarr;</span>
                        </a>
                    </Popover.Group>
                </nav>
                <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10" />
                    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <a href="/" className="-m-1.5 p-1.5">
                                <span className="sr-only">Your Company</span>
                                <img
                                    className="h-10 w-auto"
                                    src={logo}
                                    alt=""
                                />
                            </a>
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
                                    <a
                                        href="/"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black  hover:text-blue-500"
                                    >
                                        Dashboard
                                    </a>
                                    <Disclosure as="div" className="-mx-3">
                                        {({ open }) => (
                                            <>
                                                <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:text-blue-500">
                                                    Masters
                                                    <ChevronDownIcon
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...Masters].map((item) => (
                                                        <>
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                activeClassName="active"
                                                            >
                                                                {item.name}
                                                            </NavLink>
                                                        </>
                                                    ))}
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
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...Doctor].map((item) => (
                                                        <>
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                activeClassName="active"
                                                            >
                                                                {item.name}
                                                            </NavLink>
                                                        </>
                                                    ))}
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
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...Patient].map((item) => (
                                                        <>
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                activeClassName="active"
                                                            >
                                                                {item.name}
                                                            </NavLink>
                                                        </>
                                                    ))}
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
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...Invoice].map((item) => (
                                                        <>
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                activeClassName="active"
                                                            >
                                                                {item.name}
                                                            </NavLink>
                                                        </>
                                                    ))}
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
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...Pathology].map((item) => (
                                                        <>
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                activeClassName="active"
                                                            >
                                                                {item.name}
                                                            </NavLink>
                                                        </>
                                                    ))}
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
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...Ledger].map((item) => (
                                                        <>
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                activeClassName="active"
                                                            >
                                                                {item.name}
                                                            </NavLink>
                                                        </>
                                                    ))}
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
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...Supplier].map((item) => (
                                                        <>
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                activeClassName="active"
                                                            >
                                                                {item.name}
                                                            </NavLink>
                                                        </>
                                                    ))}
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
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...Purchase].map((item) => (
                                                        <>
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                activeClassName="active"
                                                            >
                                                                {item.name}
                                                            </NavLink>
                                                        </>
                                                    ))}
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
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...Acount].map((item) => (
                                                        <>
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                activeClassName="active"
                                                            >
                                                                {item.name}
                                                            </NavLink>
                                                        </>
                                                    ))}
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
                                                        className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
                                                        aria-hidden="true"
                                                    />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="mt-2 space-y-2">
                                                    {[...HRM].map((item) => (
                                                        <>
                                                            <NavLink
                                                                key={item.name}
                                                                to={item.href}
                                                                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                                                activeClassName="active"
                                                            >
                                                                {item.name}
                                                            </NavLink>
                                                        </>
                                                    ))}
                                                </Disclosure.Panel>

                                            </>
                                        )}
                                    </Disclosure>

                                    <a
                                        href="/"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:text-blue-500"
                                    >
                                        Setting
                                    </a>
                                    <a
                                        href="/"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-black  hover:text-blue-500"
                                    >
                                        User Management
                                    </a>
                                </div>
                                <div className="py-2">
                                    <a
                                        href="/"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-black  hover:text-blue-500"
                                    >
                                        Log in
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </div>
    )
}