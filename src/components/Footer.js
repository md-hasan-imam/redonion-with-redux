import React from 'react';
import footerLogo from '../assets/images/logo.png';

const Footer = () => {
    return (
        <footer className=' bg-black text-white text-sm leading-7 sm:p-5 md:p-10 mx-auto mt-5'>
            <div className='sm:block  md:flex  justify-between'>
                <div className="header-logo w-48 sm:my-10 md:my-0"  >
                    <img src={footerLogo} alt="" className='w-100' />
                </div>
                <div className='sm:w-full md:w-3/5 lg:w-2/5'>
                    <div className='flex justify-between'>
                        <ul>
                            <li><a href="#">About online food</a> </li>
                            <li><a href="#">Read our blog</a> </li>
                            <li><a href="#">Sign up to deliver</a> </li>
                            <li><a href="#">Add your restaurant</a> </li>
                        </ul>
                        <ul>
                            <li><a href="#">Get help</a> </li>
                            <li><a href="#">Read FAQs</a> </li>
                            <li><a href="#">View all cities</a> </li>
                            <li><a href="#">Restaurant near me</a> </li>
                        </ul>
                    </div>
                    <ul>
                        <li><a href="#">Privacy Policy</a> </li>
                        <li><a href="#">Terms of use</a> </li>
                        <li><a href="#">Pricing</a> </li>
                    </ul>
                </div>
            </div>

            <div className='mt-12 text-center '><small>All right reserved by &copy; <span className='text-red'><a href="#">Redonion </a></span></small></div>

        </footer>
    );
};

export default Footer;