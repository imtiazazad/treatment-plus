import React from 'react';


const Banner = () => {
    return (
      <div class="carousel w-full">
      <div id="slide1" class="carousel-item relative w-full"> 
        <img src="https://i.ibb.co/CVsgKM4/national-cancer-institute-701-FJcj-LAQ-unsplash.jpg?w=800&h=300&hash=8B7BCDC2"  class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-circle">❮</a> 
          <div className='pe-100'><h1 className='text-primary text-5xl font-bold mb-5'>Visit your doctor</h1><h1 className='text-accent text-5xl font-bold mb-5'>Stay Happy One</h1><button class="btn btn-primary">Button</button></div>
          <a href="#slide2" class="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide2" class="carousel-item relative w-full">
        <img src="https://i.ibb.co/s2sdcxJ/sander-sammy-38-Un6-Oi5be-E-unsplash.jpg?w=800&h=300&hash=500B67FB" class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-circle">❮</a> 
          <a href="#slide3" class="btn btn-circle">❯</a>
        </div>
      </div> 
      <div id="slide3" class="carousel-item relative w-full">
        <img src="https://i.ibb.co/n8HcXGj/markus-frieauff-IJ0-Ki-Xl4uys-unsplash.jpg?w=800&h=300&hash=A89D0DE6" class="w-full" />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-circle">❮</a> 
          <a href="#slide4" class="btn btn-circle">❯</a>
        </div>
      </div> 
    </div>
    );
};

export default Banner;