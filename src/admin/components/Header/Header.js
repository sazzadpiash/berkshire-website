import React from 'react';

const Header = ({title}) => {
    return (
        <div className='bg-[#2d3b42] p-5 text-white'>
            <div>
                {title}
            </div>
        </div>
    );
};

export default Header;