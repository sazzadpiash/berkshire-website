import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';

const SingleProduct = () => {
    let loading = true;
    const { id } = useParams();
    const [product, setProduct] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/product/${id}`)
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
                                    thumbnailPosition={'left'}
                                // slideDuration={parseInt(this.state.slideDuration)}
                                // slideInterval={parseInt(this.state.slideInterval)}
                                // slideOnThumbnailOver={this.state.slideOnThumbnailOver}
                                // additionalClass="app-image-gallery"
                                // useWindowKeyDown={this.state.useWindowKeyDown}
                                />
                            </div>
                        </div>
                        <div className='w-1/2 pl-10'>
                            <h2 className='font-bold text-3xl'>{product.name}</h2>
                            <h2 className='font-bold text-3xl text-red-600 mt-2'>${product.price}</h2>
                            <button className='btn btn-primary mt-5'>Add to Cart</button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SingleProduct;