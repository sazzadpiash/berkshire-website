import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard/ProductCard';

const Test = () => {
    const [pages, setPages] = useState(2)
    const [rowProducts, setRowProducts] = useState([]);
    const [uniqueProducts, setUniqueProducts] = useState([]);
    const [newp, setNewp] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:5000/all-products`)
        .then(res=>res.json())
        .then(uData=>setUniqueProducts(uData))
        .catch(console.log('error in loading mongoDb Products'))
    }, [])

    useEffect(() => {
        if (pages) {
            fetch(`http://localhost:5000/load-data/${pages}`)
                .then(res => res.json())
                .then(rData => setRowProducts(rData))
                .catch(console.log('error in loading wc Products'))
        }
    }, [pages])

    useEffect(()=>{
        if(rowProducts.length!==0 && uniqueProducts!==0){
            const filtered = rowProducts.map(rowProduct=>{
                setNewp(uniqueProducts.filter(f=>f.wcId!==rowProduct.wcId))
                
                // return (uniqueProducts.filter(uniqueProduct => rowProduct.wcId === uniqueProduct.wcId))
            })
            // console.log('This are duplicate: ', filtered)
        }
    },[rowProducts, uniqueProducts])

    // console.log('mongoDB:', uniqueProducts);
    // console.log('wordpress:', rowProducts);
    console.log('new:', newp);

    return (
        <div className='mt-20 bg-[#f1f2ff] py-20'>
            {/* <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl font-medium'>Totall Categories {products.length}</h1>
                <div className='grid grid-cols-4 gap-5 mt-5'>
                    {
                        uniqueProducts.map(product => <ProductCard key={uniqueProducts.wcId} uniqueProducts={uniqueProducts}></ProductCard>)
                    }
                </div>
            </div> */}
        </div>
    );
};

export default Test;