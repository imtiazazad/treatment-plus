import React from 'react';

const Treatment = ({ treatment, setBook }) => {
    const {slots} = treatment;
    return (
    
            
            <div class="card-body">
               
                <p>
                    {
                        slots.length > 0
                        ? <span>{slots[0]}</span>
                        : <span className='text-red-400'>Sorry, we are booked today. Try next working day.</span> 
                    }
                </p>
                <p className='text-xl mb-3'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div class="card-actions justify-center">                    
                    <label 
                    for="booking-modal" disabled={slots.length===0} 
                    onClick={() => setBook(treatment)} 
                    class="btn btn-primary w-full">Book Appointment</label>

                </div>
            </div>
    
    
    );
};

export default Treatment;