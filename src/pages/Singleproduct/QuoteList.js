import React from 'react'
import { useLocation } from 'react-router-dom';

const QuoteList = () => {
    const { state } = useLocation();
    const { variation, product } = state;
    console.log(product?.images[0].src);



    return (
        <div className='p-4'>
            <h2 className='text-3xl mb-5 font-bold'>Request For a Quote</h2>
            <div className='max-w-7xl mx-auto'>
                <div>
                    <div className='flex py-10 relative'>
                        <div className="productImage w-1/2 h-full sticky top-10">
                            <div>
                                <img src={product?.images[0]?.src} alt="" />
                            </div>
                        </div>
                        <div className='w-1/2 pl-10'>
                            <h2 className='text-3xl mb-5'>{product.name}</h2>
                            <p className='text-sm mb-3 mt-5'><b>SKU: </b>{product?.sku}</p>
                            <div className="border p-3 mb-5">
                                <div className='flex gap-2'>
                                    {/* <b className='text-sm'>Info: </b> */}
                                    <p className='text-sm' dangerouslySetInnerHTML={{ __html: product.short_description }}></p>
                                </div>
                            </div>
                            {
                                variation.length !== 0 ? <>
                                    <div className="border p-4 mb-5">
                                        <div className='gap-2'>
                                            <p className='font-bold underline underline-offset-8 mb-3'>Selected Options: </p>
                                            {
                                                variation.map(value => <p className='text-sm leading-6'>{value}</p>)
                                            }

                                        </div>
                                    </div>
                                </>
                                    :
                                    <></>
                            }
                        </div>
                    </div>
                    <div className='mt-7'>
                        <div className='flex gap-5 mb-5'>
                            <div className='w-1/2'>
                                <label htmlFor="firstName" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>First Name*</label>
                                <input type="text" id='firstName' className="input input-bordered w-full" />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="lastName" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>Last Name*</label>
                                <input type="text" id='lastName' className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <div className='w-1/2'>
                                <label htmlFor="streetAddress" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>Street Address*</label>
                                <input type="text" id='streetAddress' className="input input-bordered w-full" />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="city" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>City*</label>
                                <input type="text" id='city' className="input input-bordered w-full" />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="spr" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>State / Province / Region*</label>
                                <input type="text" id='spr' className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <div className='w-1/2'>
                                <label htmlFor="country" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>Country*</label>
                                <input type="text" id='country' className="input input-bordered w-full" />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="zip" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>Zip*</label>
                                <input type="text" id='zip' className="input input-bordered w-full" />
                            </div>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <div className='w-1/2'>
                                <label htmlFor="email" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>Email*</label>
                                <input type="email" id='email' className="input input-bordered w-full" />
                            </div>
                            <div className='w-1/2'>
                                <label htmlFor="phone" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>Phone*</label>
                                <input type="text" id='phone' className="input input-bordered w-full" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="textarea" className='text-sm leading-6 tracking-wide font-sans mb-2 block'>Message*</label>
                            <textarea id='textarea' className="textarea textarea-bordered w-full h-28"></textarea>
                        </div>
                        <button className='btn btn-black text-sm leading-6 tracking-wide font-sans text-white mt-5 block ml-auto'>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QuoteList
