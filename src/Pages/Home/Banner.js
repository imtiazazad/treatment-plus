import React from 'react';


const Banner = () => {
  return (
    <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full">
        <div className="hero" style={{ backgroundImage: "url(https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/contact.jpg)", height: '450px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="hero-content text-center font-thin">
            <div className="max-w-md">
              <h1 className="text-3xl md:text-5xl font-bold mt-24 text-cyan-400">Helping Your Teeth</h1>
              <h1 className='text-slate-800 mb-5 text-3xl md:text-5xl font-bold'>Stay Healthy One</h1>
              <p className="mb-32 text-slate-800">Check Out Our Services!</p>
              
            </div>
          </div>
        </div>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a>
          {/* <div className='pr-96'><h1 className='text-primary text-5xl font-bold mb-5 mr-96'>Visit your doctor</h1><h1 className='text-neutral text-5xl font-bold mb-5 mr-96'>Stay Happy One</h1><button class="btn btn-primary mr-96">Button</button></div> */}
          {/* <img src="https://i.ibb.co/9cdZTfY/sander-sammy-38-Un6-Oi5be-E-unsplash-2.jpg?w=800&h=100&hash=8B7BCDC2"  class="w-full opacity-50" /> */}
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <div className="hero" style={{ backgroundImage: "url(https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/contact.jpg)", height: '450px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="hero-content text-center font-thin">
            <div className="max-w-md">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 text-cyan-400">Helping Your Teeth
              </h1>
              <h1 className='text-slate-800 mb-5 text-3xl md:text-5xl font-bold'>Stay Healthy One</h1>
              <p className="mb-5 text-slate-800">Check Out Our Services!</p>
              <button className="bg-cyan-500 text-white px-2 md:px-4 mr-2 py-1 md:py-2 hover:bg-cyan-600 md:font-semibold">CHECK OUT</button>
              <button className="bg-slate-800 md:font-semibold hover:bg-slate-900 text-white px-2 md:px-4 mr-2 py-1 md:py-2">MORE INFO</button>
            </div>
          </div>
        </div>

        {/* <img src="https://i.ibb.co/0t9SMST/national-cancer-institute-701-FJcj-LAQ-unsplash-1.jpg?w=800&h=100&hash=500B67FB" class="w-full opacity-50" /> */}
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a>
          {/* <div><h1 className='text-primary text-5xl font-bold mb-5'>Visit your doctor</h1><h1 className='text-neutral text-5xl font-bold mb-5'>Stay Happy One</h1><button class="btn btn-primary">Button</button></div> */}
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <div className="hero" style={{ backgroundImage: "url(https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/contact.jpg)", height: '450px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div className="hero-content text-center font-thin">
            <div className="max-w-md">
              <h1 className="text-3xl md:text-5xl font-bold mb-2 text-cyan-400">Helping Your Teeth
              </h1>
              <h1 className='text-slate-800 mb-5 text-3xl md:text-5xl font-bold'>Stay Healthy One</h1>
              <p className="mb-5 text-slate-800">Check Out Our Services!</p>
              <button className="bg-cyan-500 text-white px-2 md:px-4 mr-2 py-1 md:py-2 hover:bg-cyan-600 md:font-semibold">CHECK OUT</button>
              <button className="bg-slate-800 md:font-semibold hover:bg-slate-900 text-white px-2 md:px-4 mr-2 py-1 md:py-2">MORE INFO</button>
            </div>
          </div>
        </div>

        {/* <img src="https://i.ibb.co/TBCzksN/markus-frieauff-IJ0-Ki-Xl4uys-unsplash-1.jpg?w=800&h=100&hash=A89D0DE6" class="w-full opacity-50" /> */}
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">❮</a>
          {/* <div className='pl-96'><h1 className='text-primary text-5xl font-bold mb-5 ml-96'>Visit your doctor</h1><h1 className='text-neutral text-5xl font-bold mb-5 ml-96'>Stay Happy One</h1><button class="btn btn-primary ml-96">Button</button></div> */}
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Banner;