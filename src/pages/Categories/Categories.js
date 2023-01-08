import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CatCard from '../../components/CatCard/CatCard';

const Categories = () => {
    const {id} = useParams();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/categories/${id}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [id])
    return (
        <div>
            this is category page
            <div className='grid grid-cols-4 gap-5'>
                {
                    categories.map(category => <CatCard category={category}></CatCard>)
                }
            </div>

            {/* <CatCard category={categories}></CatCard> */}
        </div>
    );
};

export default Categories;