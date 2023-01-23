import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { BsHeart } from 'react-icons/bs'

const SingleProduct = () => {
    let loading = true;
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`https://berkshire-furniture.vercel.app/product/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
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
                    <div>loading...</div>
                    :
                    <div className='flex py-10'>
                        <div className="productImage w-1/2">
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
                            {/* <div tabIndex={0} className="collapse collapse-plus border mt-10">
                                <input type="checkbox" />
                                <div className="text-sm p-3 min-h-full collapse-title font-medium">
                                    Product Details
                                </div>
                                <div className="collapse-content">
                                    <p className='text-sm' dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                </div>
                            </div> */}
                        </div>
                        <div className='w-1/2 pl-10'>
                            <h2 className='text-xl'>{product.name}</h2>
                            <h2 className='text-3xl my-3'>${product.price}</h2>
                            <p className='text-sm mb-3'><b>SKU: </b>{product?.sku}</p>
                            <div className="border p-3 mb-3">
                                <div className='flex gap-2'>
                                    {/* <b className='text-sm'>Info: </b> */}
                                    <p className='text-sm' dangerouslySetInnerHTML={{ __html: product.short_description }}></p>
                                </div>
                            </div>
                            <div tabIndex={0} className="collapse collapse-plus border">
                                <input type="checkbox" />
                                <div className="text-sm p-3 min-h-full collapse-title font-medium">
                                    Product Details
                                </div>
                                <div className="collapse-content">
                                    <p className='text-sm' dangerouslySetInnerHTML={{ __html: product.description }}></p>
                                </div>
                            </div>

                            <div className='singleProductpage-Btn flex mt-5'>
                                <select className="select w-full max-w-xs select-bordered mr-3 basis-1/5">
                                    <option selected>1</option>
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
                        </div>
                    </div>
            }
        </div>
    );
};

export default SingleProduct;