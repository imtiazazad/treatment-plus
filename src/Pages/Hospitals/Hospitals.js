import React from 'react';
import useHospitals from '../../hooks/useHospitals';

const Hospitals = () => {
    const [hospitals] = useHospitals();
    return (
        <div className='bg-white h-full w-full py-10 mx-auto grid px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3'>
            {
                hospitals?.map(hospital => (
                    <div className="rounded-xl space-y-2 h-full w-full bg-gray-200 p-5">
                        <div className="h-[85%]">
                            <img src={hospital?.img} alt="" className="rounded h-[100%] w-[100%] object-cover" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">{hospital?.name}</h3>
                    </div>
                ))
            }
        </div>
    );
};

export default Hospitals;