import React from 'react';


const Services = () => {
    return (
        <div className="container bg-white mx-auto md:px-20 px-12 py-6">
        <h1 className="text-5xl text-primary text-center font-bold mt-10">
          OUR SERVICES
        </h1>
        <div className="grid md:grid-cols-2 sm:grid-cols-1 xl:grid-cols-2 sm:gap-16 md:gap-8 my-12 text-start">
          <div className="p-10 rounden dark:text-slate-200 flex">
          <div className='h-40 w-40'>
          <img src="https://i.ibb.co/zs09Cxh/Screenshot-2022-06-28-131336.png?"/>
          </div>
            <div>
            <h1 className="text-xl font-bold">Best Doctors</h1>
            <p className="text-sm  my-4">
            Find the best medical specialists on Top Doctors, read reviews from their patients and book your medical appointments online.
            </p>
            </div>
          </div>
          <div className="p-10 rounden dark:text-slate-200 flex">
          <div className='h-40 w-40'>
          <img src="https://i.ibb.co/0tJ1PHG/Screenshot-2022-06-28-131420.png?"/>
          </div>
            <div>
            <h1 className="text-xl font-bold">Best Medicine</h1>
            <p className="text-sm  my-4">
            Choose the best medicine specialist doctors from top medicine company in Dhaka 
            </p>
            </div>
          </div>
          <div className="p-10 rounden dark:text-slate-200 flex">
          <div className='h-40 w-40'>
          <img src="https://i.ibb.co/74sGPL0/Screenshot-2022-06-28-140342.png?"/>
          </div>
            <div>
            <h1 className="text-xl font-bold">Dental Care</h1>
            <p className="text-sm  my-4">
            General dentist and Cosmetic dentistry, Specially Cosmetic filling, Root canal treatment, Crown and bridge.
            </p>
            </div>
          </div>
          <div className="p-10 rounden dark:text-slate-200 flex">
          <div className='h-40 w-40'>
          <img src="https://i.ibb.co/DMW99XM/Screenshot-2022-06-28-140404.png?"/>
          </div>
            <div>
            <h1 className="text-xl font-bold">Heart Specialist</h1>
            <p className="text-sm  my-4">
            Bangladesh doesn't have a celebrity heart specialist like Dr. Devi Prasad Shetty, but it has some really passionate doctors in this field. 
            </p>
            </div>
          </div>
          <div className="p-10 rounden dark:text-slate-200 flex">
          <div className='h-40 w-40'>
          <img src="https://i.ibb.co/rpWz2Cq/Screenshot-2022-06-28-140714.png?"/>
          </div>
            <div>
            <h1 className="text-xl font-bold">COVID-19</h1>
            <p className="text-sm  my-4">
            Treatments are available that can reduce the chances of death.
            </p>
            </div>
          </div>
          <div className="p-10 rounden dark:text-slate-200 flex">
          <div className='h-40 w-40'>
          <img src="https://i.ibb.co/F0WJ0Rb/Screenshot-2022-06-28-140735.png?"/>
          </div>
            <div>
            <h1 className="text-xl font-bold">Eye Care</h1>
            <p className="text-sm  my-4">
            We are Here for Your Eye Care. Best Eye (Ophthalmology) Specialist Doctor in Dhaka with the promise and commitment in eye care.
            </p>
            </div>
          </div>
        </div>
        </div>
  );
};

export default Services;