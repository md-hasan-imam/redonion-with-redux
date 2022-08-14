import React from 'react';

const FoodItem = ({item}) => {

    const {name, image,id, price, notes}=item;

    return (
        <div>
            <div className=' text-center hover:shadow-2xl transition-all ease-linear duration-400 w-4/5 mx-auto rounded-lg'>
                <div className='w-3/5 mx-auto pt-5'>
                    <img src={image} alt="" width='w-full'/>
                </div>
                <div className='py-5'>
                <h2 className='text-md font-semibold'>{name}</h2>
                <p className='mb-2 mt-1' style={{color:'#a09d9d'}}>{notes}</p>
                 <h3 className='font-bold pb-2 text-lg'>${price}</h3>
                </div>
            </div>
            
        </div>
    );
};

export default FoodItem;