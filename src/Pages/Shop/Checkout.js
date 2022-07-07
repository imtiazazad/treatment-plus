import React from 'react';

const Checkout = () => {
    return (
        <div className='grid grid-cols-1 md:flex gap-4 mt-12 md:px-12 px-2'>
            <div className='w-2/3'>
                <div className="bg-slate-100 px-2 flex align-middle justify-between">
                    <figure><img className='w-16' src="https://placeimg.com/400/400/arch" alt="Album" /></figure>
                    <div className="">
                        <h2 className="text-xl text-start font-semibold">Product Name</h2>
                        <p className='text-start font-semibold'>$ 50.2</p>
                        <div>
                            <input className='w-12' type="number" name="quantity" id="quantity" />
                        </div>
                        <div className="">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Card title!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;