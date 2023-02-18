import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../components/Header/Header';

const BulkEdit = () => {
    const [allProducts, setAllProducts] = useState([]);
    useEffect(() => {
        fetch('https://berkshire-furniture.vercel.app/all-products')
            // fetch('http://localhost:5000/all-products')
            .then(res => res.json())
            .then(data => setAllProducts(data))
    }, [])
    console.log(allProducts)
    return (
        <div>
            <Header title='All Product'></Header>
            <div className="overflow-x-auto w-full p-10">
                <table className="table-normal w-full border border-gray-400">
                    {/* <!-- head --> */}
                    <thead className='bg-gray-200'>
                        <tr className='text-left'>
                            <th className='w-4'>
                                <label>
                                    <input type="checkbox" className="checkbox w-4 h-4" />
                                </label>
                            </th>
                            <th>Product</th>
                            <th className='w-80'>Categories</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* <!-- row 1 --> */}
                        {
                            allProducts.map(singleProduct =>
                                <tr className='border-b' key={singleProduct._id}>
                                    <th>
                                        <label>
                                            <input type="checkbox" className="checkbox w-4 h-4" />
                                        </label>
                                    </th>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="product-image">
                                                <div className="w-12 h-12">
                                                    <img src={singleProduct?.images[0]?.src} alt='' />
                                                </div>
                                            </div>
                                            <div>
                                                <p className='text-sm font-semibold text-blue-700'>{singleProduct.name}</p>
                                                <span className="text-white badge text-xs bg-red-600 border-0">Not Varified</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        <p className='text-xs'>
                                            {
                                                singleProduct.categories.map(category => `${category.name}`).join(', ')
                                            }
                                        </p>
                                    </td>
                                    <td className='text-sm'>${singleProduct.price}</td>
                                    <th>
                                        <button className='btn btn-success btn-xs bg-green-600 border-green-600 hover:bg-black hover:border-black text-xs text-white rounded'>Edit</button>
                                    </th>
                                </tr>
                            )
                        }


                    </tbody>

                    {/* foot */}
                    <tfoot>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Categories</th>
                            <th>Price</th>
                            <th></th>
                        </tr>
                    </tfoot>

                </table>
                <div className="mt-5 flex justify-end">
                    <button className="btn">«</button>
                    <input type="number" className='btn focus-visible:outline-0' defaultValue={1} />
                    <button className="btn">»</button>
                </div>
            </div>
            <div className='max-w-6xl mx-auto rounded-lg border overflow-hidden'>
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <thead>

                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox w-4 h-4" />
                                    </label>
                                </th>
                                <th>ID</th>
                                <th>SKU</th>
                                <th>Title</th>
                                <th>Tags</th>
                                <th>Reguler Price</th>
                                <th>Sale Price</th>
                                <th>Categories</th>
                                <th>Status</th>
                                <th>Price Show/Hide</th>
                                <th>Add To Quote</th>
                                <th>Wholesale Price</th>
                            </tr>

                        </thead>
                        <tbody>
                            {
                                allProducts.map((singleProduct, i) =>
                                    <tr key={singleProduct._id}>
                                        <th>
                                            <label>
                                                <input type="checkbox" className="checkbox w-4 h-4" />
                                            </label>
                                        </th>
                                        {/* <th className='border-r p-0'><input type="text" defaultValue='ID' className='text-center w-full h-fit py-1' /></th> */}
                                        <th className='border-r'>ID</th>
                                        <th className='border-r'>SKU</th>
                                        <th className='border-r'>{singleProduct.name}</th>
                                        <th className='border-r'>Tags</th>
                                        <th className='border-r'>Reguler Price</th>
                                        <th className='border-r'>Sale Price</th>
                                        <th className='border-r'>
                                            <p className='text-xs'>
                                                {
                                                    singleProduct.categories.map(category => `${category.name}`).join(', ')
                                                }
                                            </p>
                                        </th>
                                        <th className='border-r'>Status</th>
                                        <th className='border-r'>Price Show/Hide</th>
                                        <th className='border-r'>Add To Quote</th>
                                        <th>Wholesale Price</th>
                                    </tr>
                                )
                            }
                        </tbody>
                        <tfoot>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox w-4 h-4" />
                                    </label>
                                </th>
                                <th>ID</th>
                                <th>SKU</th>
                                <th>Title</th>
                                <th>Tags</th>
                                <th>Reguler Price</th>
                                <th>Sale Price</th>
                                <th>Categories</th>
                                <th>Status</th>
                                <th>Price Show/Hide</th>
                                <th>Add To Quote</th>
                                <th>Wholesale Price</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default BulkEdit;