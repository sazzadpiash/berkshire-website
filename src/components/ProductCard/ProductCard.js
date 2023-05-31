import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    let productImage = product?.images[0]?.src;
    let productName = product?.name;

    // if (product?.name.length > 17) {
    //     productName = product.name.slice(0, 17) + '...'
    // }

    if (product?.images.length > 0) {
        productImage = product?.images[0]?.src
    }
    else {
        productImage = 'https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg';
    }
    return (
        <Link to={`/product/${product?._id}`}>
            <div className="card card-compact w-full h-full bg-[#f5f5f5] bordered" style={{ fontFamily: 'Poppins', }}>
                <div className='h-32 md:h-60 p-3  overflow-hidden'>
                    <img className='h-full w-auto m-auto' src={productImage} alt="Shoes" />
                </div>
                <div className="flex flex-col p-4 pt-0 gap-0 md:gap-2">
                    {/* <div className='grid grid-cols-5 gap-1 mb-0 md:mb-3 h-auto md:h-12'>
                        {
                            product?.images.slice(0, 5).map((thumbImg, i) => <img key={i + 1} src={thumbImg?.src} className='max-w-12 max-h-12' alt='thumb-img' />)
                        }
                    </div> */}
                    <h2 className="mt-2 md:mt-0 text-sm md:text-base capitalize text-left justify-between items-center gap-4 tooltip" data-tip={[product?.name]}>{productName}
                    </h2>

                    <span className='font-normal text-xs text-center md:text-left md:text-sm flex flex-col md:flex-row justify-between items-center'>{product?.categories[0]?.name}</span>
                    
                </div>
                <div className="card-actions p-3 justify-center md:justify-between grow items-end">
                        <button className="btn-custom hidden md:block">Buy Now</button>
                        <span className='text-primary font-bold text-base mt-1 md:mt-0'>
                            ${product?.price}
                            {
                                product?.on_sale && <span className='line-through text-sm text-right font-normal ml-2'>${product?.regular_price}</span>
                            }

                        </span>
                    </div>
            </div>
        </Link>
    );
};

export default ProductCard;