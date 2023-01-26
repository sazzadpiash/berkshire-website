import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const InformationCenter = () => {
    return (
        <div >
            <div className='max-w-7xl mx-auto py-10 flex gap-10'>
                <div className='border-r-2 pr-8 w-56'>
                    <h2 className='text-2xl'>Information Center</h2>
                    <ul className='space-y-1 pt-5'>
                        <li><Link to='/information-center'>About Us</Link></li>
                        <li><Link to='/information-center/contact-us'>Contact Us</Link></li>
                        <li><Link to='/information-center/order-information'>Order Information</Link></li>
                        <li><Link to='/information-center/shipping-information'>Shipping Information</Link></li>
                        <li><Link to='/information-center/warranty'>Warranty</Link></li>
                        <li><Link to='/information-center/payment-method'>Payment Methods</Link></li>
                        <li><Link to=''>FAQ's</Link></li>
                        <li><Link to=''>Furniture Care</Link></li>
                        <li><Link to=''>Articles</Link></li>
                        <li><Link to=''>Feedbacks</Link></li>
                        <li><Link to=''>Return & Exchanges</Link></li>
                        <li><Link to=''>Privacy</Link></li>
                        <li><Link to=''>Terms and Conditions</Link></li>
                    </ul>
                </div>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default InformationCenter;