import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { BsHeart } from 'react-icons/bs'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Spinner from '../../components/Spinner/Spinner';
import ProductCard from '../../components/ProductCard/ProductCard';
import OptionModal from '../../components/OptionModal/OptionModal';

const SingleProduct = () => {
    let loading = true;
    const { id } = useParams();
    const [product, setProduct] = useState({});
    const [similerProducts, setSimilerProducts] = useState([]);

    useEffect(() => {
        fetch(`https://berkshire-furniture.vercel.app/product/${id}`)
            .then(res => res.json())
            .then(data => {
                setProduct(data);
                fetch(`https://berkshire-furniture.vercel.app/products/${data.categories[0].id}?limit=8`)
                    .then(res => res.json())
                    .then(populerProducts => setSimilerProducts(populerProducts))
            })
    }, [id])


    let img = [];
    if (Object.keys(product).length !== 0) {
        img = product.images.map(img => {
            return ({
                original: img.src,
                thumbnail: img.src
            })
        })
        loading = false;
    }
    return (
        <div className='max-w-7xl mx-auto'>
            {
                loading ?
                    <div><Spinner></Spinner></div>
                    :
                    <div>
                        <div className='flex py-10 relative'>
                            <div className="productImage w-1/2 h-full sticky top-10">
                                <div>
                                    <ImageGallery
                                        // ref={i => this._imageGallery = i}
                                        items={img}
                                        // onClick={this._onImageClick.bind(this)}
                                        // onImageLoad={this._onImageLoad}
                                        // onSlide={this._onSlide.bind(this)}
                                        // onPause={this._onPause.bind(this)}
                                        // onScreenChange={this._onScreenChange.bind(this)}
                                        // onPlay={this._onPlay.bind(this)}
                                        // infinite={this.state.infinite}
                                        // showBullets={this.state.showBullets}
                                        showFullscreenButton={false}
                                        showPlayButton={false}
                                        // showThumbnails={this.state.showThumbnails}
                                        // showIndex={this.state.showIndex}
                                        // showNav={this.state.showNav}
                                        // isRTL={this.state.isRTL}
                                        thumbnailPosition={'bottom'}
                                    // slideDuration={parseInt(this.state.slideDuration)}
                                    // slideInterval={parseInt(this.state.slideInterval)}
                                    // slideOnThumbnailOver={this.state.slideOnThumbnailOver}
                                    // additionalClass="app-image-gallery"
                                    // useWindowKeyDown={this.state.useWindowKeyDown}
                                    />
                                </div>
                            </div>
                            <div className='w-1/2 pl-10'>
                                <h2 className='text-xl'>{product.name}</h2>
                                <h2 className='text-3xl my-3'>${product.price}</h2>
                                <p className='text-sm mb-3'><b>SKU: </b>{product?.sku}</p>
                                <div className="border p-3 mb-5">
                                    <div className='flex gap-2'>
                                        {/* <b className='text-sm'>Info: </b> */}
                                        <p className='text-sm' dangerouslySetInnerHTML={{ __html: product.short_description }}></p>
                                    </div>
                                </div>
                                <div className=''>
                                    {/* The button to open modal */}
                                    <label htmlFor="option-modal" className="btn w-full btn-outline hover:bg-black mr-3 justify-between">Select Product Option<AiOutlineArrowRight></AiOutlineArrowRight></label>                                    
                                </div>
                                <div className='singleProductpage-Btn my-8 flex'>
                                    <select className="select w-full select-bordered mr-3 basis-1/5">
                                        <option defaultValue>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                    </select>
                                    <div className='flex basis-4/5'>
                                        <button className='btn grow'>Add to Cart</button>
                                        <button className='w-[55px] basis-[48px] ml-3'><BsHeart className='w-[48px] h-[48px] p-3 border border-[#000]'></BsHeart></button>
                                    </div>
                                </div>
                                <div tabIndex={0} className="collapse collapse-plus border">
                                    <input type="checkbox" defaultChecked />
                                    <div className="text-sm p-3 min-h-full collapse-title font-medium">
                                        Product Details
                                    </div>
                                    <div className="collapse-content">
                                        <p className='text-sm' dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1 className='bg-gray-100 my-10 p-5 rounded text-lg'>Similer Products:</h1>
                        <div className={`grid grid-cols-4 gap-5 mb-20`}>
                            {
                                similerProducts.map(similerProduct => <ProductCard key={similerProduct._id} product={similerProduct}></ProductCard>)
                            }
                        </div>
                        <OptionModal optionId={'547856'}></OptionModal>
                    </div>
            }


        </div>
    );
};

export default SingleProduct;