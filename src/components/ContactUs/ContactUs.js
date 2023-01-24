import React from 'react';

const ContactUs = () => {
    return (
        <div>
            <h3 className='text-4xl font-sans mb-2'>Contact Us</h3>
            <p className='text-sm text-gray-500 leading-6 tracking-wide font-sans'>
                We are open for business. Please check our business hours on this page. Please note, Online products may Not be displayed at the store. If you want to make sure a product is available for viewing, please call or email us prior to your showroom visit. If you like to see specific item and it is not available in our store showroom, we maybe able to set up appointment for supplier showroom visits also. please call or email us to find out how and where you can see the item. Other wise just come in and we will be more than happy to help you find the right product.
            </p>
            <div className='mt-7'>
                <div className='flex gap-5 mb-5'>
                    <div className='w-1/2'>
                        <label htmlFor="name" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>Full Name*</label>
                        <input type="text" id='name' className="input input-bordered w-full" />
                    </div>
                    <div className='w-1/2'>
                        <label htmlFor="email" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>Email*</label>
                        <input type="email" id='email' className="input input-bordered w-full" />
                    </div>
                </div>
                <div className='mb-5'>
                    <label htmlFor="subject" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>Subject*</label>
                    <input type="text" id='subject' className="input input-bordered w-full" />
                </div>
                <div>
                    <label htmlFor="textarea" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>Message*</label>
                    <textarea id='textarea' className="textarea textarea-bordered w-full h-28"></textarea>
                </div>
                <button className='btn btn-black text-sm leading-6 tracking-wide font-sans text-white mt-5 block ml-auto'>Submit</button>
            </div>
        </div>
    );
};

export default ContactUs;