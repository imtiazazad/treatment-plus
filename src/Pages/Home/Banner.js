import React from 'react';


const Banner = () => {
  return (
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <div className="hero" style={{ backgroundImage: "url(https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/contact.jpg)", height: '450px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="hero-content text-center font-thin">
            <div className="max-w-md">
              <h1 className="text-3xl md:text-5xl font-bold mt-24 text-cyan-400">Helping You</h1>
              <h1 className='text-slate-800 mb-5 text-3xl md:text-5xl font-bold'>Stay Healthy</h1>
              <p className="mb-32 text-slate-800">Check Out Our Services!</p>           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;