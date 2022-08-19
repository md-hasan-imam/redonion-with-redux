import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Checkout = () => {

    const [menuItem, setMenuItem] = useState({})
    const { name, description, price ,quantity, image, _id} = menuItem;
    const { id } = useParams();

    useEffect(() => {
        const url = `http://localhost:5000/checkout/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMenuItem(data))
    }, [])

    const handleAddToCart = id => {
        console.log('added')
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className='sm:block md:block lg:flex justify-center sm:mx-5 md:mx-16 mt-20'>
                <div className='sm:w-full md:w-full lg:w-2/5 flex justify-center items-center '>
                    <div>
                        <div className='text-center'>
                            <h3 className='text-4xl font-semibold'>{name}</h3>
                            <p className='text-md my-8 leading-8'>{description}</p>
                            <div className='flex justify-center items-center mt-8 mb-5'>
                                <h5 className='text-4xl font-semibold'>${price}</h5>
                                <div className='ml-6 text-xl border-2 border-solid border-black py-2 px-4 rounded-full'>
                                    <button>-</button>
                                    <h4 className=' mx-5 inline-block'>{quantity}</h4>
                                    <button>+</button>
                                </div>
                            </div>
                            <button className='rounded-full bg-red text-xl text-white px-7 py-3 my-4' onClick={() => handleAddToCart(_id)}>Add to cart</button>
                        </div>
                        <div className='mt-10'>
                            <h5 className='text-5xl'>food slider</h5>
                        </div>

                    </div>
                </div>
                <div className='sm:w-full md:w-2/3 lg:w-2/5 mx-auto '>
                    <img src={image} alt={name} className='w-full' />
                </div>

            </div>
        </div>
    );
};

export default Checkout;