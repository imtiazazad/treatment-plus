import React from 'react';
import { useNavigate } from 'react-router-dom';

const DocTeam = ({ doctor }) => {
  const { name, position } = doctor;
  const navigate = useNavigate();

  return (
      <>
      <div class="card w-96 bg-base-100 shadow-xl ml-14">
            <figure><img src={doctor.img} alt="Doctor" /></figure>
            <div class="card-body">
              <h2 class="card-title">{name}</h2>
              <h3 className='text-start font-bold mb-5'>{position}</h3>
              <p className='text-start'>Monday-Friday<span className='pl-32'>8:30-17:00</span></p>
              <p className='text-start'>Saturday   <span className='pl-40'>10:00-16:00</span></p>
              <p className='text-start'>Sunday<span className='pl-44'>12:00-14:00</span></p>
              <div class="card-actions justify-end">
                <button onClick={()=> navigate(`/doctor`)} class="btn btn-primary mt-5">Read More</button>
              </div>
            </div>
            </div>
      </>
      );
}

 export default DocTeam;