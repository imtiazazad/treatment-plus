import React from 'react';

import './Newsletter.css';

const Newsletter = () => (
  <div className="container py-10 px-5 w-full mx-auto">
    <div className="border flex flex-col md:flex-row gap-3 mx-auto w-full border-dotted rounded space-y-2 bg-accent border-[#F5C332] py-10 p-7">
      <div className="mx-auto w-full">
        <img draggable="false" src="https://i.ibb.co/TLLrnqh/Whats-App-Image-2022-12-15-at-10-59-51.jpg" alt="" className="object-cover rounded-xl" />
      </div>
      <div className="w-full mx-auto">
        <h1 className="text-3xl md:text-7xl font-bold fw-bold text-center capitalize" style={{ fontFamily: "Rajdhani" }}>Subscribe</h1>
        <div className="app__newsletter-input flex__center flex items-center justify-center">
          <input type="email" className=' outline-1' placeholder="Enter your email address" />
          <button type="button" className="bg-primary text-white px-7 text-md font-semibold py-4 rounded">Subscribe</button>
        </div>
        <p className="text-center pt-5 text-white">We hate spam and your email protected by us!</p>
      </div>
    </div>
  </div>
);

export default Newsletter;
