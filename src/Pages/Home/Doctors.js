import React, { useEffect, useState } from 'react';
import DocTeam from './DocTeam';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/imtiazazad/treatment-plus/imtiaz/public/doctors.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])

    return (
        <div >
            <div className='text-center mb-10'>
                <h3 className='text-primary text-xl font-bold uppercase'>Doctor Team</h3>
                <h2 className='text-4xl'>___</h2>
            </div>
            <div class="carousel w-full">
            <div id="item1" class="carousel-item w-full">
                    

                        {
                            doctors?.map(doctor => <DocTeam
                                key={doctor._id}
                                doctor={doctor}
                            ></DocTeam>)
                        }
                    </div>
                </div>

            <div class="flex justify-center w-full py-2 gap-2">
                <a href="#item1" class="btn btn-xs">1</a>
                <a href="#item2" class="btn btn-xs">2</a>
                <a href="#item3" class="btn btn-xs">3</a>
                <a href="#item4" class="btn btn-xs">4</a>
            </div>
        </div>

    );
};

export default Doctors;