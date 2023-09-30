import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FcCalendar } from 'react-icons/fc';

const Datepicker = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date) => {
        setStartDate(date);
    };

    return (
        <div className="p-3 relative">
            <div className="flex items-center">
                <div>
                    <DatePicker
                        selected={startDate}
                        onChange={handleChange}
                        dateFormat="MM/dd/yyyy"
                        className=" rounded p-1 pl-2 bg-slate-200 w-40 border border-yellow-400"
                    />
                </div>
                <div className="ml-32 absolute">
                    <FcCalendar className=" text-[24px]" />
                </div>
            </div>
        </div>
    );
};

export default Datepicker;
