import React, { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import ProductCard from '../components/ProductCard/ProductCard';

const Test = () => {
    // const productData = useLoaderData()
    // console.log(productData)
    const [loadmore, setLoadmore] = useState(1)
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        if (loadmore) {
            fetch(`http://localhost:5000/products/categories?page=${loadmore}`)
                .then(res => res.json())
                .then(data => {
                    if(data.length){
                        const tempCat = categories.concat(data)
                        setCategories(tempCat);
                        setLoadmore(loadmore + 1)
                    }
                    else{
                        setLoadmore(null)
                    }
                    
                })
                .catch(err => {
                })
        }
    }, [loadmore])


    return (
        <div className='mt-20 bg-[#f1f2ff] py-20'>
            <div className='max-w-7xl mx-auto'>
                <h1 className='text-4xl font-medium'>Totall Categories {categories.length}</h1>
                <div className='grid grid-cols-4 gap-5 mt-5'>
                    {/* {
                            productData.map(product=><ProductCard key={product.id} product={product}></ProductCard>)
                        } */
                        categories.map((category, index) => <p key={category.id}>{category.slug} id: {category.id}</p>)

                    }


                </div>
            </div>
        </div>
    );
};

export default Test;