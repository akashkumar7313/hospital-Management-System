import React from 'react'
import {
    BsFillCaretDownFill,
    BsFillFileEarmarkMedicalFill,
    BsFillClipboard2CheckFill,
    BsFillFileTextFill,
    BsFillGearFill,
    BsPeopleFill,
    BsFillFileRichtextFill,
} from "react-icons/bs";
import TodayVisitBox from './MainBox/TodayVisitBox';
import RecentReportsBox from './MainBox/RecentReportsBox';
import Report from './Report';
import BottamBox from './BottamBox';
import MiddleBox from './MiddleBox';
import Footer from './Footer';


export default function MainBox() {
    return (
        <div className='p-3 '>
            <div className='h-auto w-[100%] bg-white border border-blue-600 rounded-[10px]'>
                <div className='bg-slate-200 h-[75px] w-full rounded-t-[10px] flex'>
                    <div className='flex items-center sm:gap-0 md:gap-[230px] lg:gap-[740px]'>
                        <div className='flex sm:px-6 lg:px-20'>
                            <img src="https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.1x.rsquare.w1400.jpg"
                                alt="admin" className='h-14 w-14 border-yellow-400 border-2 p-[3px]' />
                            <div className='px-2'>
                                <h2 className='text-2xl font-semibold'>Dashboard</h2>
                                <p>Super Admin</p>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            <div className='flex'>
                                <div className='h-10 w-12 border border-blue-600 hover:bg-blue-600'> <BsFillFileEarmarkMedicalFill className='h-6 w-6 mx-2.5 my-1.5' /></div>
                                <div className='h-10 w-12 border border-blue-600 hover:bg-blue-600'> <BsFillClipboard2CheckFill className='h-6 w-6 mx-3 my-1.5' /></div>
                                <div className='h-10 w-12 border border-blue-600 hover:bg-blue-600'><BsFillFileTextFill className='h-6 w-6 mx-2.5 my-1.5' /></div>
                            </div>
                            <div className='flex'>
                                <div className='h-10 w-12 border border-blue-600 hover:bg-blue-600'> <BsFillGearFill className='h-6 w-6 mx-3 my-1.5' /></div>
                                <div className='h-10 w-12 border border-blue-600 hover:bg-blue-600'><BsPeopleFill className='h-6 w-6 mx-3 my-1.5' /></div>
                                <div className='h-10 w-12 border border-blue-600 hover:bg-blue-600'><BsFillFileRichtextFill className='h-6 w-6 mx-3 my-1.5' /></div>
                            </div>
                            <button className='bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-[5px] flex gap-1'>User <BsFillCaretDownFill className='mt-1' /></button>
                        </div>
                    </div>
                </div>
                <hr className=" h-[1px] bg-gray-400 border-1"></hr>
                <div className='flex p-[15px] gap-5 '>
                    <TodayVisitBox />
                    <RecentReportsBox />
                </div>
                <Report />
                <MiddleBox/>
                <BottamBox/>
                <Footer/>
            </div>
        </div>
    )
}
