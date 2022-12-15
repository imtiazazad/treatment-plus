import React from 'react';
import useHospitals from '../../hooks/useHospitals';

const Hospitals = () => {
    const [hospitals] = useHospitals();
    return (
        <div className='bg-white h-full w-full py-10 mx-auto grid px-5 grid-cols-1 gap-3'>
            {
                hospitals?.map(hospital => (
                    <div className="rounded-xl space-y-2 h-full w-full bg-gray-200 p-5">
                        <div className="h-fit flex justify-center">
                            <img src={hospital?.img} alt="" className="rounded h-[50%] w-[50%] object-cover" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold">{hospital?.name}</h3>
                        <p className="text-md md:text-xl"><span className="font-bold">Description:</span>{hospital?.description}</p>
                        <p className="text-md md:text-xl"><span className="font-bold">Address:</span>{hospital?.address}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Hospitals;