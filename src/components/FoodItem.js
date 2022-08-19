import React from 'react';
import { useNavigate } from 'react-router-dom';

const FoodItem = ({ item }) => {

    const { name,metaDescription, price, image,_id } = item;

    const navigate = useNavigate();

    return (
        <div onClick={() =>  navigate(`/checkout/${_id}`)}>
            <div className=' text-center hover:shadow-2xl transition-all ease-linear duration-400 w-4/5 mx-auto rounded-lg'>
                <div className='w-3/5 mx-auto pt-5'>
                    <img src={image} alt="" width='w-full' />
                </div>
                <div className='py-5'>
                    <h2 className='text-md font-semibold'>{name}</h2>
                    <p className='mb-2 mt-1' style={{ color: '#a09d9d' }}>{metaDescription}</p>
                    <h3 className='font-bold pb-2 text-lg'>${price}</h3>
                </div>
            </div>

        </div>
    );
};

export default FoodItem;