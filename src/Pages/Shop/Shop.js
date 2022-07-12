import React, { useState } from 'react';

const Shop = () => {
    const [isActive, setIsActive] = useState(true);

    const handleArrival = () => {

    }

    return (
        <div>
            <div className="hero" style={{ backgroundImage: "url(https://promo-theme.com/medina-wp/wp-content/uploads/2016/10/contact.jpg)", height: '420px', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
                <div className="hero-content text-center font-thin">
                    <div className="max-w-md">
                        <h1 className="text-sm">ENTER YOUR EMAIL AND GET
                        </h1>
                        <h1 className='text-cyan-400 text-3xl md:text-5xl font-bold'>50% OFF</h1>
                        <p className='text-sm my-1'>YOUR FIRST PURCHASE</p>
                        <input type="email" placeholder='Enter email address here' className='input border-0 mr-2 focus:outline-none mt-4' />
                        <button className="bg-cyan-500 text-white px-2 md:px-4 mr-2 py-1 md:py-2 hover:bg-cyan-600 md:font-semibold">SEND</button>
                    </div>
                </div>
            </div>
            <div className='mt-2 px-4'>
                <div className="tabs">
                    <button onClick={() => setIsActive(true)}
                        className={`tab tab-bordered ${isActive ? 'tab-active' : ''}`}>NEW ARRIVAL</button>
                    <button onClick={() => setIsActive(false)}
                        className={`tab tab-bordered ${isActive ? '' : 'tab-active'}`}>SALE PRODUCTS</button>
                </div>
                <div>
                    {
                        isActive ?
                            <div>

                            </div>
                            :
                            <div>

                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;