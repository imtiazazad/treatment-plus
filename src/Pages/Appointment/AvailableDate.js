import React, { useEffect, useState } from 'react'
import { format } from 'date-fns';

const AvailableDate = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='m-20'>
            <h3 className='font-bold text-3xl text-center text-primary'>Available Appointment on {format(date, 'PP')}</h3>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body items-center text-center">
                    <h2 class="card-title">Appointment</h2>
                    <p>Date: </p>
                    <div class="card-actions">
                        <button class="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AvailableDate