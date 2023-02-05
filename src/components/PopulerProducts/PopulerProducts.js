import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const PopulerProducts = () => {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch(`https://berkshire-furniture.vercel.app/populer-product`)
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [])
    return (
        <div className={`grid grid-cols-4 gap-5`}>
            {
                products.map(product => <ProductCard key={product?.wcId} product={product}></ProductCard>)
            }
        </div>
    );
};

export default PopulerProducts;