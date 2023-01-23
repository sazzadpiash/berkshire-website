import React, { useEffect, useState } from 'react';
import RoomsCategoryInner from '../components/Furniture/RoomsCategoryInner';

const Test = () => {
    // const [wcProducts, setWcProducts] = useState();
    const [mongoProducts, setMongoProducts] = useState([]);

    useEffect(()=>{
        fetch(`https://berkshire-furniture.vercel.app/categories/0`)
        .then(res=>res.json())
        .then(data=>setMongoProducts(data))
    },[])

    return (
        <div className='grid grid-cols-4 gap-5'>
            {
                mongoProducts.map(category => <RoomsCategoryInner category={category}></RoomsCategoryInner>)
            }
        </div>
    );
};

export default Test;