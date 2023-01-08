import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Rooms from './Rooms';
import RoomsCategoryInner from './RoomsCategoryInner';

const RoomsCategory = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/categories/${id}`)
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [id])
    return (
        <div>
            this is category page 2
            <div className='grid grid-cols-4 gap-5'>
                {
                    categories.map(category => <RoomsCategoryInner category={category}></RoomsCategoryInner>)
                }
            </div>

            {/* <CatCard category={categories}></CatCard> */}
        </div>
    );
};

export default RoomsCategory;