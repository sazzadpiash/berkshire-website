import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black text-white'>
            <div className='max-w-7xl mx-auto py-16'>
                <div className='flex'>
                    <div className='basis-4/12'>
                        <img className='w-40 mb-4' src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673452745/Berkshire-Furniture-Horizontal-Logo-White-No-Background-200x76_cjey88.png" alt="" />
                        <p className='mb-3'>Berkshire Furniture is a Canadian dealer of Custom Made Solid Wood Furniture.</p>
                        <p className='mb-2'><strong>Address: </strong><a href="/">1425 Dundas St. East, Mississauga, Ontario</a></p>
                        <p className='mb-2'><strong>Phone: </strong><a href="tel:+19056024922">905-602-4922</a></p>
                        <p className='mb-2'><strong>Mail: </strong><a href="mailto:sales@berkshirefurniture.com">sales@berkshirefurniture.com</a></p>
                    </div>
                    <div className='ml-5'>
                        <h4 className='uppercase font-bold text-sm mb-2'>Information</h4>
                        <p className='mt-1'><a href="/">About Us</a></p>
                        <p className='mt-1'><a href="/">Contact Us</a></p>
                        <p className='mt-1'><a href="/">Order Information</a></p>
                        <p className='mt-1'><a href="/">Shipping Information</a></p>
                        <p className='mt-1'><a href="/">Warranty</a></p>
                        <p className='mt-1'><a href="/">Warranty</a></p>
                        <p className='mt-1'><a href="/">Furniture Care</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;