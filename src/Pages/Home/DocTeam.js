import React from 'react';




const DocTeam = ({ doctor }) => {
  const {name, position} = doctor;
 
    return (
      <>
       <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{position}</p>
                <div className="card-actions">
                <button  className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>


      {/* <div class="carousel w-full">
  <div id="item" class="carousel-item">
  <div class="card w-96 bg-base-100 shadow-xl ml-14">
  <figure><img src={img1} alt="Shoes" /></figure> */}
  {/* <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <h3 className='text-start font-bold mb-5'>{position}</h3>
    <p className='text-start'>Monday-Friday<span className='pl-32'>8:30-17:00</span></p>
    <p className='text-start'>Saturday   <span className='pl-40'>10:00-16:00</span></p>
    <p className='text-start'>Sunday<span className='pl-44'>12:00-14:00</span></p>
    <div class="card-actions justify-end">
      <button 
      
      class="btn btn-primary mt-5">Read More</button>
    </div>
  </div> */}
{/* </div>
</div>
</div> */}

{/* 
<div class="flex justify-center w-full py-2 gap-2">
  <a href="#item" class="btn btn-xs">1</a> 
</div> */}

</>
    );
}

export default DocTeam;