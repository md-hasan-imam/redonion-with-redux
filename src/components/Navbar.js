import React from 'react';
import { Link } from 'react-router-dom'
import headerLogo from '../assets/images/logo2.png';


const Navbar = () => {


    return (
        <header className='navbar sm:px-2 md:px-16 mb-10'>
            <nav className='bg-green-500 flex justify-between items-center my-5 '>
                <div className="header-logo w-48"  >
                    <img src={headerLogo} alt="" className='w-100' />
                </div>
                <div className='sm:hidden md:block'>
                    <ul className='sm:text-lg md:text-xl font-semibold sm:block' >
                        <Link to='/home' className='mr-10'>Home</Link>
                        <Link to='/menuitems' className='mr-10'>Menu</Link>
                        <Link to='/cart' className='mr-10'>Cart</Link>
                        <Link to='/signin' className='mr-10'>Sign in</Link>
                        <Link to='/signup' className=''><button className="rounded-full bg-red text-white px-7 py-2">Sign up</button></Link>
                    </ul>
                </div>
                {/* <div className='sm:block md:hidden  bg-light-gray rounded-lg'>
                    <div>
                        <ul className='sm:text-lg md:text-xl font-semibold  flex flex-col p-2 sm:gap-y-2' >
                            <Link to='/home' className=''>Home</Link>
                            <Link to='/cart' className=''>Cart</Link>
                            <Link to='/signin' className=''>Sign in</Link>
                            <Link to='/signup' className=''><button className="rounded bg-red text-white px-7 py-2">Sign up</button></Link>
                        </ul>
                    </div>
                </div> */}
            </nav>
        </header>
    );
};

export default Navbar;