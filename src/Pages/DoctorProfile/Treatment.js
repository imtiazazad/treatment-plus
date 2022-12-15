import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';

const Treatment = ({ treatment, setBook }) => {
    const { slots } = treatment;
    const [user, loading] = useAuthState(auth);
    const navigate = useNavigate();

    if (loading) {
        return <Loading />
    }

    const handleAppointment = () => {
        if (!user) {
            return navigate('/login')

        }
        setBook(treatment);
    }

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
                    for="booking-modal" disabled={slots.length === 0}
                    onClick={() => handleAppointment()}
                    class="btn btn-primary w-full">Book Appointment</label>

            </div>
        </div>


    );
};

export default Treatment;