import React from 'react';
import useHospitals from '../../hooks/useHospitals';

const Hospitals = () => {
    const [hospitals] = useHospitals();
    return (
       <div>
         <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <div className="hero" style={{ backgroundImage: "url(https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/contact.jpg)", height: '450px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="hero-content text-center font-thin">
            <div className="max-w-md">
              <h1 className="text-3xl md:text-5xl font-bold mt-24 text-cyan-400">Helping You</h1>
              <h1 className='text-slate-800 mb-5 text-3xl md:text-5xl font-bold'>Stay Healthy</h1>
              <p className="mb-32 text-slate-800">Check Out Top Hospitals</p>           
            </div>
          </div>
        </div>
      </div>
    </div>
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
       </div>
    );
};

export default Hospitals;