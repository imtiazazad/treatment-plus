import React from 'react';
import { useNavigate } from 'react-router-dom';
import useHospitals from '../../hooks/useHospitals';

const HomeHospitals = () => {
    const [hospitals] = useHospitals();
    const navigate = useNavigate();
    return (
        <div className='bg-white h-full w-full py-10 mx-auto'>
            <div className="grid px-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                {
                    hospitals?.slice(0, 3)?.map(hospital => (
                        <div className="rounded-xl space-y-2 h-full w-full bg-gray-200 p-5">
                            <div className="h-[80%]">
                                <img src={hospital?.img} alt="" className="rounded h-[100%] w-[100%] object-cover" />
                            </div>
                            <h3 className="text-xl md:text-2xl font-bold">{hospital?.name}</h3>
                            <p className="text-md"><span className="font-bold">Address:</span>{hospital?.address}</p>
                        </div>
                    ))
                }
            </div>
            <div className="w-full mx-auto py-10 flex justify-center items-center">
                <button onClick={() => navigate(`/hospitals`)} className='text-xl rounded-xl font-semibold bg-green-500 text-white px-4 py-2'>See More</button>
            </div>
        </div>
    );
};

export default HomeHospitals;