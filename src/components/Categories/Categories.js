import React from 'react';
import './Categories.css';

const Categories = () => {
    return (
        <div className='mt-24 text-center'>
            <h1 className='text-4xl font-medium'>Furniture Categories</h1>
            <span>Browse hunderds of products from our various categories.</span>
            <div className='max-w-7xl mx-auto py-5'>
                <div className='grid grid-cols-5 gap-7'>
                    <img src="https://berkshirefurniture.com/wp-content/uploads/2022/01/BEDROOM.jpg" alt="" />
                    <img src="https://berkshirefurniture.com/wp-content/uploads/2022/01/DINING-ROOM.jpg" alt="" />
                    <img src="https://berkshirefurniture.com/wp-content/uploads/2022/01/LIVING-ROOM.jpg" alt="" />
                    <img src="https://berkshirefurniture.com/wp-content/uploads/2022/01/OCCASIONALS.jpg" alt="" />
                    <img src="https://berkshirefurniture.com/wp-content/uploads/2022/01/ENTERTAINMENTS.jpg" alt="" />
                    <img src="https://berkshirefurniture.com/wp-content/uploads/2022/01/BAR-AND-COUNTER.jpg" alt="" />
                    <img src="https://berkshirefurniture.com/wp-content/uploads/2022/01/DECOR.jpg" alt="" />
                    <img src="https://berkshirefurniture.com/wp-content/uploads/2022/01/OFFICE.jpg" alt="" />
                    <img src="https://berkshirefurniture.com/wp-content/uploads/2022/01/MATTRESS.jpg" alt="" />
                    <img src="https://berkshirefurniture.com/wp-content/uploads/2022/01/YOUTH.jpg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Categories;