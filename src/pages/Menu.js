import React, { useState } from 'react';
import { useEffect } from 'react';
import FoodItem from '../components/FoodItem';
import Navbar from "../components/Navbar";


const Menu = () => {

    const [menuItems, setMenuItems] = useState([]);
    const [category, setCategory] = useState('');
    const [searchedtext,setSearchedText] =useState('');
    const [filteredResult,setFilteredResult] =useState([]);


    useEffect(() => {
        const url = 'http://localhost:5000/menuitems'
        fetch(url)
            .then(res => res.json())
            .then(data => setMenuItems(data))
    }, [category,searchedtext])

    const handleCategory= e =>{
        setCategory(e.target.value.toLowerCase());
        const matchedFoods = menuItems.filter((food)=>  food.keyIngredients.toLowerCase() === e.target.value.toLowerCase());
        setFilteredResult(matchedFoods);
    };

    const handleSearchedFood= e =>{
        setSearchedText(e.target.value.toLowerCase());
        const matchedFoods = menuItems.filter((food)=> food.keyIngredients.toLowerCase().includes(searchedtext) || food.name.toLowerCase().includes(searchedtext) || food.category.toLowerCase().includes(searchedtext));
        console.log(matchedFoods)
        setFilteredResult(matchedFoods);
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className='sm:px-5 md:px-10  mx-auto'>
                {/* filter container */}
                <hr />
                <div className='sm:block md:flex justify-between my-10'>
                    <h3 className='text-5xl font-semibold'>
                        { filteredResult.length > 0 ?  filteredResult.length :menuItems.length} Foods</h3>
                    <div className='sm:block lg:flex gap-y-3'>
                        <div className='flex'>
                            <div className=' h-10 w-10 bg-red flex items-center justify-center rounded-full mr-2'>
                                <svg style={{ backgroundColor: "#F91944" }} height='16px' width='16px' fill='white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z" /></svg>
                            </div>
                            <input id='searchedfood' onChange={handleSearchedFood} type="text" placeholder='Search food' className='text-xl outline-none rounded p-2 mb-1 bg-light-gray' />
                        </div>


                        <button className='block text-xl px-7 py-2 '>Cost: Low to High</button>
                        <button className='block text-xl px-7 py-2'>Cost: High to Low</button>
                        <select name="category" id="category" className='text-xl' onChange={handleCategory }>
                            <option value="" disabled selected >Select a Category</option>
                            <option value="chicken">Chicken</option>
                            <option value="eggs">Eggs</option>
                            <option value="beef">Beef</option>
                            <option value="fish">Fish</option>
                        </select>
                    </div>

                </div>
                <hr />

                {/* foods container */}
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4  md:gap-10 sm:gap-5 ' >
                    {filteredResult.length > 0 ? 
                    filteredResult.map(item => <FoodItem item={item} key={item.id}></FoodItem>)
                    :
                    menuItems.map(item => <FoodItem item={item} key={item.id}></FoodItem>)}

                </div>
            </div>
        </div>
    );
};

export default Menu;