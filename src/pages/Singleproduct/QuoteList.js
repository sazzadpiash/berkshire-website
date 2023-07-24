import React, { useContext } from 'react'
import { RxCross2 } from 'react-icons/rx';
import { useLocation } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalContext';

const QuoteList = () => {
    const { cart, setCart } = useContext(GlobalContext)
    const { state } = useLocation();
    const { variation, product } = state;
    console.log(cart);



    return (
        <div>
            <div className='page-title py-20 bg-black text-white text-center text-5xl font-bold'>Request For a Quote</div>
            <div className='max-w-7xl mx-auto'>
                <div>
                    <div className="overflow-x-auto basis-4/6 mt-10 ">
                        <table className="table w-full border rounded-xl">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    {/* <th>Price</th> */}
                                    {/* <th>Quantity</th>
                                    <th>Subtotal</th> */}
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item, i) => (<tr>
                                        <th><RxCross2></RxCross2></th>
                                        <td className='flex items-center'>
                                            <img src={item?.images[0]?.src} className='w-24' alt="" />
                                            <span className='ml-5'>{item?.name}</span>
                                        </td>
                                        {/* <td>${item?.price}</td> */}
                                        {/* <td><input type="text" className='border w-16 text-center px-4 py-2' /></td>
                                        <td>$149.00</td> */}
                                    </tr>))}
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <button className='btn btn-black text-sm leading-6 tracking-wide font-sans text-white mt-5 block ml-auto'>Add More Product</button>
                    </div>
                    {/* <div className='flex py-10 relative'>
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
                    </div> */}
                    <div className='my-7'>
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
