import React from 'react';
import { Link } from 'react-router-dom';

const Rooms = ({ category }) => {
    const catImg = category?.image?.src

    // if(catImg!==null){
    //     catImg = category?.image?.src
    // }
    // else{
    //     catImg = 'https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg';
    // }
    return (
        <Link to={`/furniture/room/${category?.id}`}>
            <div className="w-full bg-base-100 bg-white border-2 p-4 flex justify-between flex-col">
                <div className='h-48'>
                    <img className='max-h-48 w-full' src={catImg ? catImg : 'https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg'} alt="Shoes" />
                </div>
                <div className="gap-2 mt-3">
                    <h2 className="font-[600] text-center gap-4">{category?.name}
                    </h2>
                </div>
            </div>
        </Link>

    );
};

export default Rooms;