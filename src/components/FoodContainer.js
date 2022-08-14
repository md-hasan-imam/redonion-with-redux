import React, { useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { showAllFoods, showBreakfastFoods, showLunchFoods, showDinnerFoods } from '../features/menuItems/menuItemsSlice';
import FoodItem from './FoodItem';

const FoodContainer = () => {

    const foods = useSelector((store) => store.foods.menuItems);    
    const dispatch = useDispatch();
    
    useEffect(()=>{
        dispatch(showBreakfastFoods());
    },[])

    const handleBreakfastFoods = () => {
        dispatch(showBreakfastFoods());
    }
    const handleLunchFoods = () => {
        dispatch(showLunchFoods());
    }
    const handleDinnerFoods = () => {
        dispatch(showDinnerFoods());
    }
    

    return (
        <section className='mt-20 mb-16'>
            <div className='flex justify-center gap-16 mb-16 font-bold'>
                <button className='hover:text-red transition-all ease-in duration-200' onClick={handleBreakfastFoods}>Breakfast</button>
                <button className='hover:text-red transition-all ease-in duration-200' onClick={handleLunchFoods}>Lunch</button>
                <button className='hover:text-red transition-all ease-in duration-200' onClick={handleDinnerFoods}>Dinner</button>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  md:gap-10 sm:gap-5 ' >
                {foods.map(item=><FoodItem item={item} id={item.id}></FoodItem>)}
            </div>
            <div className='mt-16 mb-7 text-center'>
            <button className='bg-gray px-8 py-2 rounded-lg text-white font-semibold '>Checkout Your Food</button>
            </div>
        </section>
    );
};

export default FoodContainer;