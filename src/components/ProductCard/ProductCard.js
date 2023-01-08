import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    let productImage = product?.images[0]?.src

    if (product?.images.length > 0) {
        productImage = product?.images[0]?.src
    }
    else {
        productImage = 'https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg';
    }
    return (
        <Link to={`/product/${product?._id}`}>
            <div className="card card-compact w-full bg-base-100 shadow-xl">
                <figure><img className='max-h-48' src={productImage} alt="Shoes" /></figure>
                <div className="card-body gap-2">
                    <div className='grid grid-cols-5 gap-1 mb-3'>
                        {
                            product?.images.slice(0, 5).map((thumbImg, i) => <img key={i + 1} src={thumbImg?.src} className='max-w-12 max-h-12' alt='thumb-img' />)
                        }
                    </div>
                    <Link to={`/product/${product?._id}`}><h2 className="card-title text-lg font-bold justify-between items-center gap-4">{product?.name}
                    </h2></Link>

                    <span className='font-normal text-sm flex justify-between items-center'>{product?.categories[0]?.name}<span className='text-primary font-bold text-xl'>{product?.regular_price}$</span></span>
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