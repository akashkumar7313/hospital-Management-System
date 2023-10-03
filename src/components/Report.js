import React from 'react'
import { FcBullish, FcCurrencyExchange, FcDebt } from 'react-icons/fc'

export default function Report() {
    return (
        <div>
            <div className='flex px-[15px] gap-3'>
                <div className='bg-slate-100 h-[150px] w-[25%] border border-red-400 rounded-[10px]'>
                    <h2 className='font-bold text-pink-700 text-[20px] flex justify-center mt-2'>CASH IN HAND</h2>
                    <div className='flex items-center font-bold px-4 py-2'>
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/holding-money-6606807-5498859.png?f=webp"
                            alt="" className='h-20 w-20' />
                        <div>
                            <h2 className='text-green-800'>33358.00</h2>
                            <h2 className='text-blue-500'>As on 2021-30-23</h2>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-200 h-[150px] w-[25%] border border-green-400 rounded-[10px]'>
                    <h2 className='font-bold text-pink-700 text-[20px] flex justify-center mt-2'>TOTAL INCOME</h2>
                    <div className='flex items-center font-bold px-4 py-2'>
                        <FcCurrencyExchange className='h-20 w-20' />
                        <div className='px-4'>
                            <h2 className='text-green-800'>33358.00</h2>
                            <h2 className='text-blue-500'>As on 2021-30-23</h2>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-100 h-[150px] w-[25%] border border-yellow-400 rounded-[10px]'>
                    <h2 className='font-bold text-pink-700 text-[20px] flex justify-center mt-2'>TOTAL EXPENSES</h2>
                    <div className='flex items-center font-bold px-4 py-2'>
                        <FcDebt className='h-20 w-20' />
                        <div className='px-4'>
                            <h2 className='text-green-800'>33358.00</h2>
                            <h2 className='text-blue-500'>As on 2021-30-23</h2>
                        </div>
                    </div>
                </div>
                <div className='bg-slate-200 h-[150px] w-[25%] border border-cyan-400 rounded-[10px]'>
                    <h2 className='font-bold text-pink-700 text-[20px] flex justify-center mt-2'>PROFIT</h2>
                    <div className='flex items-center font-bold px-4 py-2'>
                        <FcBullish className='h-20 w-20' />
                        <div className='px-4'>
                            <h2 className='text-green-800'>33358.00</h2>
                            <h2 className='text-blue-500'>As on 2021-30-23</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
