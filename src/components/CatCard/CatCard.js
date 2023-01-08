import React from 'react';

const CatCard = ({ category }) => {
    const catImg = category?.image?.src

    // if(catImg!==null){
    //     catImg = category?.image?.src
    // }
    // else{
    //     catImg = 'https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg';
    // }
    return (
        <div className="card card-compact w-full bg-base-100 shadow-xl">
            <figure><img className='max-h-48' src={catImg ? catImg : 'https://leaveitwithme.com.au/wp-content/uploads/2013/11/dummy-image-square.jpg'} alt="" /></figure>
            <div className="card-body gap-2">
                <h2 className="card-title text-lg font-bold justify-between items-center gap-4">{category?.name}
                </h2>
            </div>
        </div>
    );
};

export default CatCard;