import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import RoomsCategoryInner from './RoomsCategoryInner';

const RoomsCategory = () => {
    const { id } = useParams();
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch(`https://berkshire-furniture.vercel.app/categories/${id}`)
            .then(res => res.json())
            .then(data => {
                setCategories(data)
                setLoading(false)
            })
    }, [id])
    if (loading) {
        console.log('loading');
        return (
            <Spinner></Spinner>
        )
    }
    return (
        <div className='max-w-7xl mx-auto py-10 px-10'>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-5'>
                {
                    categories.map(category => <RoomsCategoryInner category={category}></RoomsCategoryInner>)
                }
            </div>
        </div>
    );
};

export default RoomsCategory;