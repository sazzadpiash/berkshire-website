import React from 'react';
import { RxCross2 } from 'react-icons/rx'

const Cart = () => {
    return (
        <div>
            <div className='page-title py-20 bg-black text-white text-center text-5xl font-bold'>Shopping Cart</div>
            <div className='max-w-7xl mx-auto'>
                <div className='flex gap-5 my-24'>
                    <div className="overflow-x-auto basis-4/6">
                        <table className="table w-full">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th><RxCross2></RxCross2></th>
                                    <td className='flex items-center'>
                                        <img src="https://woodmart.xtemos.com/accessories/wp-content/uploads/sites/7/2022/09/green-case-back.jpg" className='w-24' alt="" />
                                        <span>Iphone 13 pro max green case</span>
                                    </td>
                                    <td>$149.00</td>
                                    <td><input type="text" className='border w-16 text-center px-4 py-2' /></td>
                                    <td>$149.00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='basis-2/6 '>
                        <div className='border-2 p-7 rounded-lg'>
                            <h3 className='text-xl uppercase font-semibold'>Cart Totals</h3>
                            <hr className='my-4' />
                            <p className="text-sm flex mb-2 justify-between"><span>Subtotal</span><span>$120</span></p>
                            <p className="text-sm flex justify-between"><span>Shipping</span><span>$10</span></p>
                            <hr className='my-4' />
                            <h3 className='uppercase font-semibold flex justify-between'><span>Total</span><span>$130</span></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;