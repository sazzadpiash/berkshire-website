import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({id, limit, cols}) => {
    const [products, setproducts] = useState([]);

    useEffect(() => {
        fetch(`https://berkshire-furniture.vercel.app/products/${id}?limit=${limit}`)
            .then(res => res.json())
            .then(data => setproducts(data))
    }, [id, limit])
    return (
        <div>
            <div className={`grid grid-cols-${cols} gap-5`}>
                {
                    products.map(product=><ProductCard key={product?.wcId} product={product}></ProductCard>)
                }
            </div>

            {/* <CatCard category={categories}></CatCard> */}
        </div>
    );
};

export default ProductList;