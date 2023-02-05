import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const ProductPage = () => {
    const { id } = useParams();
    const [products, setProducts] = useState([]);
    const [productNumber, setProductNumber] = useState(16);
    const [totalProduct, setTotalProduct] = useState(0);

    useEffect(() => {
        // fetch(`https://berkshire-furniture.vercel.app/products/${id}/${null}`)
        fetch(`https://berkshire-furniture.vercel.app/products/${id}?limit=${productNumber}&skip=${0}`)
            .then(res => res.json())
            .then(data => {
                setProducts(data);
                setTotalProduct(data.length);
            })
    }, [id, productNumber])

    const fetchMoreData = () => {
        if (products.length !== 0) {
            console.log('more')
            fetch(`https://berkshire-furniture.vercel.app/products/${id}?limit=${productNumber}&skip=${totalProduct}`)
                .then(res => res.json())
                .then(data => {
                    const newProducts = [...products, ...data]
                    setProducts(newProducts)
                    setTotalProduct(products.length);
                    // console.log(data)
                })
        }
    }

    return (
        <div className='max-w-7xl mx-auto py-10'>

            <InfiniteScroll
                dataLength={products.length}
                next={fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
            >
                <div className={`grid grid-cols-4 gap-3`}>
                    {
                        products.map(product => <ProductCard key={product?.wcId} product={product}></ProductCard>)
                    }
                </div>
            </InfiniteScroll >



        </div >
    );
};

export default ProductPage;