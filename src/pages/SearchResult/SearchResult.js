import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ProductCard from '../../components/ProductCard/ProductCard';

const SearchResult = () => {
    const [searchProduct, setSearchProduct] = useState([]);
    const search = useLocation().search
    const searchParams = new URLSearchParams(search)
    // console.log(searchParams.get('search'));
    useEffect(() => {
        fetch(`https://berkshire-furniture.vercel.app/search?searchQuery=${searchParams.get('search')}`)
            // fetch('https://berkshire-furniture.vercel.app/all-products')
            .then(res => res.json())
            .then(data => setSearchProduct(data))
    }, [])
    console.log(searchProduct);
    return (
        <div>
            <div className={`grid grid-cols-2  md:grid-cols-4 gap-5 p-10`}>
                {searchProduct.map((product) => (
                    <ProductCard
                        key={product?.wcId}
                        product={product}
                    ></ProductCard>
                ))}
            </div>
        </div>
    )
}

export default SearchResult
