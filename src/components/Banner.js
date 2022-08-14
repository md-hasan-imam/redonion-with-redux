import React from 'react';
import bannerimg from '../assets/images/bannerbackground.png'


const Banner = () => {
    const searchFoodItem =(e)=>{
        e.preventDefault();
    }
    return (
        <div className="banner-container  relative">
            <div className="banner-image w-full overflow-hidden">
                <img src={bannerimg} alt="" className='w-full  scale-x-110 ' />
            </div>
            <div className="banner-content text-center absolute top-1/2 left-1/2 ">
                <div>
                    <h2 style={{ fontSize:'3vw'}} className='font-semi-bold mx-auto'>Best food waiting for your belly</h2>
                    
                    <form action="" onSubmit={searchFoodItem} className='bg-white rounded-full sm:my-5 md:my-8 w-3/5 mx-auto pl-3 flex justify-between'>
                        <input type="text" style={{ fontSize: '1.3vw' }} placeholder='Search food items ' className='bg-white text-md font-semi-bold py-1.5 flex-grow rounded-full  border-none focus:outline-none tracking-wide' />
                        <button type="submit" style={{ fontSize: '1vw' }} className='rounded-full px-5 bg-red text-white focus:outline-none'>Search</button>
                    </form >
                </div>
            </div>
        </div>
    );
};

export default Banner;