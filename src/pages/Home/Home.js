import React from 'react';
import Categories from '../../components/Categories/Categories';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {
    return (
        <div>
           <HomeSlider></HomeSlider>
           <Categories></Categories>
        </div>
    );
};

export default Home;