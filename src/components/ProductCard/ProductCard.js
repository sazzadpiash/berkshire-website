import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    let productImage = product?.images[0]?.src;
    let productName = product?.name;

    if (product?.name.length > 20) {
        productName = product.name.slice(0, 20) + '...'
    }

    if (product?.images.length > 0) {
        productImage = product?.images[0]?.src
    }
    else {
        productImage = 'https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg';
    }
    return (
        <Link to={`/product/${product?._id}`}>
            <div className="card card-compact w-full bg-base-100 bordered rounded-lg" style={{ fontFamily: 'Poppins', }}>
                <div className='h-48 rounded-t-lg overflow-hidden'>
                    <img className='max-h-48 w-auto m-auto' src={productImage} alt="Shoes" />
                </div>
                <div className="card-body gap-2">
                    <div className='grid grid-cols-5 gap-1 mb-3 h-12'>
                        {
                            product?.images.slice(0, 5).map((thumbImg, i) => <img key={i + 1} src={thumbImg?.src} className='max-w-12 max-h-12' alt='thumb-img' />)
                        }
                    </div>
                    <h2 className="card-title text-base capitalize justify-between items-center gap-4 tooltip" data-tip={[product?.name]}>{productName}
                    </h2>

                    <span className='font-normal text-sm flex justify-between items-center'>{product?.categories[0]?.name}<span className='text-primary font-bold text-base'>
                        ${product?.price}
                        {
                            product?.on_sale && <span className='line-through text-sm text-right font-normal ml-2'>${product?.regular_price}</span>
                        }
                        
                    </span></span>
                    <div className="card-actions justify-end grow items-end">
                        <p className='flex gap-1 py-2'><FaStar className='text-warning'></FaStar><FaStar className='text-warning'></FaStar><FaStar className='text-warning'></FaStar><FaStar className='text-warning'></FaStar><FaStar className='text-warning'></FaStar></p>
                        <button className="btn-custom">Buy Now</button>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;