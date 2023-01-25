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
            <div className='mt-16'>
                <div className='grid grid-cols-3 gap-5'>
                    <div className='border p-5 text-sm leading-6 tracking-wide font-sans'>
                        <ul>
                            <li>Berkshire Furniture</li>
                            <li>1425 Dundas St. East</li>
                            <li>(N.E. Corner of Dixie Rd. Inside Mobilia bldng)</li>
                            <li>Mississauga, Ontario</li>
                            <li>L4X-2W4</li>
                            <li>905.602.4922</li>
                            <li>800.659.9574</li>
                            <li>sales@berkshirefurniture.com</li>
                        </ul>
                    </div>
                    <div className='border p-5 text-sm leading-6 tracking-wide font-sans'>
                        <b className='text-sm font-bold uppercase mb-2 block text-green-600'>YES, WE ARE OPEN (No Appointment Necessary)</b>
                        <ul>
                            <li>Monday: 10:30 AM–8:00 PM</li>
                            <li>Tuesday: 10:30 AM–8:00 PM</li>
                            <li>Wednesday: 10:30 AM–8:00 PM</li>
                            <li>Thursday: 10:30 AM–8:30 PM</li>
                            <li>Friday: 10:30 AM–8:30 PM</li>
                            <li>Saturday: 10:30 AM–6:00 PM</li>
                            <li>Sunday: 11:00 AM–5:00 PM</li>
                        </ul>
                    </div>
                    <div className='border p-5 text-sm leading-6 tracking-wide font-sans'>
                        <ul>
                            <li>Dec. 24th: Closing Early. Call for hours</li>
                            <li>Dec. 25th: Closed</li>
                            <li>Dec. 31st: Closing Early. Call for hours</li>
                            <li>Jan. 1st: Closed</li>
                            <li>(Family Day): Closed</li>
                            <li>(Labor Day): Closed</li>
                            <li>(Easter Sunday): Closed</li>
                            <li>(July 1st: Happy Canada Day): Closed</li>
                            <li>Major Snow Storm Days: Please call to make sure we are open.</li>
                            <li>-We follow government COVID Regulations-</li>
                        </ul>
                    </div>
                </div>
                <div className='mt-10'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5777.643488471995!2d-79.583582!3d43.610253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0d8497a82e1c0ca!2sBerkshire%20Furniture!5e0!3m2!1sen!2sbd!4v1673551185979!5m2!1sen!2sbd" title='Berkshire Furniture' width={'100%'} height={'400px'} style={{ border: 0 }} loading={'lazy'} referrerpolicy={"no-referrer-when-downgrade"}></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;