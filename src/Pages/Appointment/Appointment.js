import React, { useState } from 'react'
import AvailableDate from './AvailableDate'
import Calender from './Calender'
import { format } from 'date-fns';


const Appointment = () => {
    const [date, setDate] = useState(new Date());

    let footer = <p>Please pick a day.</p>;
    if (date) {
        footer = <p className='text-xl font-bold pr-10 mt-10'>Your Appointment Date {format(date, 'PP')}</p>;
    }

    return (
        <>
        <Calender date={date} setDate={setDate}></Calender>
        <AvailableDate date={date} footer={footer}></AvailableDate>
        </>
    );
};

export default Appointment;