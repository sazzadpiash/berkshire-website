import React from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import Categories from '../Categories/Categories';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {
    return (
        <div>
            <HomeSlider></HomeSlider>
            <Categories></Categories>
            <div className='mt-20 bg-[#f1f2ff] py-20'>
                <div className='max-w-7xl mx-auto'>
                    <h1 className='text-4xl font-medium'>Our Top 10 Bestsellers</h1>
                    <div className='grid grid-cols-4 gap-5 mt-5'>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                        <ProductCard></ProductCard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;