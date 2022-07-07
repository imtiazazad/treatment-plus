import React, { useEffect, useState } from 'react';
import DocTeam from './DocTeam';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])

    return (
        <div className='my-28'>
            <div className='text-center'>
            <h3 className='text-primary text-xl font-bold uppercase'>Our Electric Tools</h3>
            <h2 className='text-4xl'>Tools That will Be Useful</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
                        {
                            doctors.map(doctor => <DocTeam
                                key={doctor._id}
                                doctor={doctor}
                            ></DocTeam>)
                        }
                    </div>
                    </div>
            
    );
};

export default Doctors;