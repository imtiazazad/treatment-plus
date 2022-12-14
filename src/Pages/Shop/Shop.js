import React, { useState } from 'react';
import useArrival from '../../hooks/useArrival';
import ShopCard from '../Shared/ShopCard';

const Shop = () => {
    const [isActive, setIsActive] = useState(true);
    const [arrivalData] = useArrival();

    return (
        <div className='bg-slate-100'>
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
                <div className='px-2 pb-4'>
                    {
                        isActive ?
                            <div className='grid md:grid-cols-5 grid-cols-1 gap-8 mt-4'>
                                {
                                    arrivalData.slice(0, 8).map(arrival =>
                                        <ShopCard
                                            key={arrival._id}
                                            arrival={arrival}
                                        />
                                    )
                                }
                            </div>
                            :
                            <div>
                                <div className='grid md:grid-cols-5 grid-cols-1 gap-8 mt-4'>
                                    {
                                        arrivalData.slice(8, 11).map(sale =>
                                            <ShopCard
                                                key={sale._id}
                                                arrival={sale}
                                            />
                                        )
                                    }
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Shop;