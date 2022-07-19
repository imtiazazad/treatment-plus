import React from 'react';
import { format } from 'date-fns';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({ date, book, setBook }) => {
    const { _id, name, slots } = book;
    const [user, loading, error] = useAuthState(auth);
    console.log(slots);

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setBook(null)
    }
    return (
        <div>

            <input type="checkbox" id="booking-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-primary mb-5">Booking for : {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-5 justify-items-center'>
                        <input type="text" disabled value={format(date, 'PP')} class="input input-bordered w-full max-w-xs" />
                        <select class="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option 
                                key={index}
                                value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email || ''} class="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Type Your Phone Number" class="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="Submit" placeholder="Type here" class="btn btn-primary w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;