import React from 'react';
import { useNavigate } from 'react-router-dom';

const ShopCard = ({ arrival }) => {
    const { name, price, img, _id } = arrival;
    let navigate = useNavigate();

    return (
        <div className='shadow bg-white p-2 rounded'>
            <img className='mx-auto h-48' src={img} alt="" />
            <div>
                <h1 className='text-center'>{name}</h1>
                <p className='text-center text-cyan-400'>${price}</p>
            </div>
            <div className='flex justify-center mt-2 align-middle mb-2'>
                <button
                    onClick={() => navigate(`/shop/${_id}`)}
                    className='bg-green-400 hover:bg-green-500 rounded text-white px-2 py-1'>ADD TO CART</button>
            </div>
        </div>
    );
};

export default ShopCard;