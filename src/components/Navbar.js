import React from 'react';
import { Link } from 'react-router-dom'
import headerLogo from '../assets/images/logo2.png';


const Navbar = () => {
    return (
        <header className='px-16 mb-10'>
            <nav className='bg-green-500 sm:block md:flex justify-between items-center my-5 '>
                <div className="header-logo w-48"  >
                    <img src={headerLogo} alt="" className='w-100' />
                </div>
                <div>
                    <ul className='text-lg font-semibold sm:block' >
                        <Link to='/home' className='mr-5'>Home</Link>
                        <Link to='/cart' className='mr-5'>Cart</Link>
                        <Link to='/signin' className='mr-5'>Sign in</Link>
                        <Link to='/signup' className=''><button className="rounded-full bg-red text-white px-7 py-2">Sign up</button></Link>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;