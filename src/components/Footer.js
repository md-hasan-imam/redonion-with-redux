import React from 'react';
import footerLogo from '../assets/images/logo.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className=' bg-black text-white text-sm leading-7 sm:p-5 md:p-10 mx-auto mt-5'>
            <div className='sm:block  md:flex  justify-between mt-5'>
                <div className="header-logo w-48 sm:my-10 md:my-0"  >
                    <img src={footerLogo} alt="" className='w-100' />
                </div>
                <div className='sm:w-full md:w-3/5 lg:w-2/5'>
                    <div className='flex justify-between'>
                        <ul>
                            <li><Link to="#">About online food</Link> </li>
                            <li><Link to="#">Read our blog</Link> </li>
                            <li><Link to="#">Sign up to deliver</Link> </li>
                            <li><Link to="#">Add your restaurant</Link> </li>
                        </ul>
                        <ul>
                            <li><Link to="#">Get help</Link> </li>
                            <li><Link to="#">Read FAQs</Link> </li>
                            <li><Link to="#">View all cities</Link> </li>
                            <li><Link to="#">Restaurant near me</Link> </li>
                        </ul>
                    </div>
                    <ul>
                        <li><Link to="#">Privacy Policy</Link> </li>
                        <li><Link to="#">Terms of use</Link> </li>
                        <li><Link to="#">Pricing</Link> </li>
                    </ul>
                </div>
            </div>

            <div className='mt-12 text-center '><small>All right reserved by &copy; <span className='text-red'><Link to="#">Redonion </Link></span></small></div>
        </footer>
    );
};

export default Footer;