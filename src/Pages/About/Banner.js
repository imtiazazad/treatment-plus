import React from 'react';


const Banner = () => {
  return (
    <div className="hero" style={{ backgroundImage: "url(https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/contact.jpg)", height: '420px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
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
  );
};

export default Banner;