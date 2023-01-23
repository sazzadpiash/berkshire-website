import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../ProductCard/ProductCard';

const ProductPage = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://berkshire-furniture.vercel.app/products/${id}/${null}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [id])
    return (
        <div className='max-w-7xl mx-auto py-10'>
            <div className={`grid grid-cols-4 gap-10`}>
                {
                    categories.map(product=><ProductCard key={product?.wcId} product={product}></ProductCard>)
                }
            </div>

            {/* <CatCard category={categories}></CatCard> */}
        </div>
    );
};

export default ProductPage;