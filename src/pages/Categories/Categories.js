import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CatCard from '../../components/CatCard/CatCard';

const Categories = () => {
    const {id} = useParams();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`https://berkshire-furniture.vercel.app/categories/${id}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [id])
    return (
        <div className='max-w-7xl mx-auto py-10'>
            <div className='grid grid-cols-5 gap-5'>
                {
                    categories.map(category => <CatCard category={category}></CatCard>)
                }
            </div>

            {/* <CatCard category={categories}></CatCard> */}
        </div>
    );
};

export default Categories;