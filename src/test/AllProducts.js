import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

const AllProducts = () => {
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        fetch(`https://berkshire-furniture.vercel.app/populer-product`)
            .then(res => res.json())
            .then(products => setAllProducts(products))
    }, [])

    return (
        <div className={`grid grid-cols-4 gap-5`}>
            {
                allProducts.map(product => <ProductCard key={product?.wcId} product={product}></ProductCard>)
            }
        </div>
    );
};

export default AllProducts;