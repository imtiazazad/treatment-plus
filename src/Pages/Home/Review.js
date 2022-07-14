import React from 'react';
import CountUp from 'react-countup';
import cardiogram from '../../images/cardiogram.png'
import premolar from '../../images/premolar.png'
import lungs from '../../images/lungs.png'
import stomach from '../../images/stomach.png'


const Review = () => {
  return (
    <>
    <div className="hero" style={{ backgroundImage: "url(https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/benefits.jpg)", height: '420px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
      <div className="hero text-center font-thin">
        <div class="flex lg:flex-row sm:flex-col md:flex-row w-full text-white">

          <div class="stat justify-items-center">
          <img src={cardiogram} className='h-20 w-20'/>
          <div class="stat-title text-primary font-bold">OVER</div>
          <CountUp className="text-5xl font-bold" end={220}/>
            <div class="stat-desc text-2xl">Saved hearts</div>
          </div>

          <div class="stat justify-items-center">
          <img src={premolar} className='h-20 w-20'/>
          <div class="stat-title text-primary font-bold">OVER</div>
          <CountUp className="text-5xl font-bold" end={2598}/>
            <div class="stat-desc  text-2xl">Saved hearts</div>
          </div>

          <div class="stat justify-items-center">
          <img src={lungs} className='h-20 w-20'/>
          <div class="stat-title text-primary font-bold">OVER</div>
          <CountUp className="text-5xl font-bold" end={120}/>
            <div class="stat-desc  text-2xl">Saved hearts</div>
          </div>

          <div class="stat justify-items-center">
          <img src={stomach} className='h-20 w-20'/>
          <div class="stat-title text-primary font-bold">OVER</div>
          <CountUp className="text-5xl font-bold" end={190}/>
            <div class="stat-desc  text-2xl">Saved hearts</div>
          </div>
        </div>
      </div>
      </div>
      </>
      );
};

      export default Review;