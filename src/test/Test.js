import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

const Test = () => {
    // const [wcProducts, setWcProducts] = useState();
    const [mongoProducts, setMongoProducts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/all-products')
        .then(res=>res.json())
        .then(data=>setMongoProducts(data))
    },[])

    return (
        <div className='grid grid-cols-4 gap-5'>
            {
                mongoProducts.map(product=><ProductCard key={product?.wcId} product={product}></ProductCard>)
            }
        </div>
    );
};

export default Test;