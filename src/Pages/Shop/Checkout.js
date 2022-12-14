import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import useArrival from '../../hooks/useArrival';

const Checkout = () => {
    const { productId } = useParams();
    const [arrivalData] = useArrival();
    const [totalPrice, setTotalPrice] = useState();

    const singleData = arrivalData.find(single => single._id === Number(productId));

    const handleInputValue = (e) => {
        let value = parseInt(e.target.value);

        if (value < 0) {
            alert('value can not be less than 0');
            value = 1;
        }
        else {
            setTotalPrice(value);
        }
    }

    return (
        <div className='grid grid-cols-1 py-10 md:grid-cols-2 gap-4 px-4'>
            <div className='flex flex-col md:flex-row justify-between align-middle shadow px-12 my-auto'>
                <img className='h-28' src={singleData?.img} alt=" " />
                <div className='my-auto'>
                    <h4>{singleData?.name}</h4>
                    <p>${singleData?.price}</p>
                </div>
                <div className='my-auto'>
                    <input onChange={handleInputValue}
                        onLoad={(e) => e.target.value = 1}
                        placeholder="Enter Quantity"
                        className='input focus:outline-none input-bordered w-3/5' type="text" name="quantity" id="quantity" />
                </div>
                <div className='my-auto'>
                    <h4 className='text-cyan-500'>${totalPrice ? singleData?.price * totalPrice : singleData?.price}</h4>
                </div>
            </div>
            <div className='mx-auto'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <div className="card-body">
                        <h2 className="card-title">Checkout</h2>
                        <p>Shipping</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;