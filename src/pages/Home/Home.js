import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../../components/ProductList/ProductList';
import HomeSlider from './HomeSlider/HomeSlider';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
// import { HiOutlineChevronRight } from 'react-icons/hi'
import PopulerProducts from '../../components/PopulerProducts/PopulerProducts';

const Home = () => {
    return (
        <div>

            <div className='max-w-7xl mx-auto mt-10 flex gap-5'>
                <div className='w-full rounded-lg'>
                    <HomeSlider></HomeSlider>
                    <div class="wrapper rounded-b-lg">
                        <p class="target">Yes, we do custom made furniture.</p>
                    </div>
                </div>
                
            </div>
            {/* Shop By Room */}
            <div>
                <div className='max-w-7xl mx-auto py-16 font-semibold'>
                    <h1 className='text-4xl uppercase'>Shop By Room</h1>
                    <div className='grid grid-cols-5 gap-5 mt-5 text-sm font-normal'>
                        <div>
                            <Link to='furniture/room/467'>
                                <img src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673327292/bedroom2_ynxkp2.jpg" className='rounded-lg' alt="" />
                                <p className='text-center -mt-9 mb-3'>BEDROOM</p>
                            </Link>

                        </div>
                        <div>
                            <Link to='furniture/room/237'>
                                <img src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673328002/dinning2_qdhtju.jpg" className='rounded-lg' alt="" />
                                <p className='text-center -mt-9 mb-3'>DINNING</p>
                            </Link>

                        </div>
                        <div>
                            <Link to='furniture/room/238'>
                                <img src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673328383/living_kvivny.jpg" alt="" className='rounded-lg' />
                                <p className='text-center -mt-9 mb-3'>LIVING</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='furniture/room/239'>
                                <img src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673328844/office_vggil6.jpg" alt="" className='rounded-lg' />
                                <p className='text-center -mt-9 mb-3'>OFFICE</p>
                            </Link>
                        </div>
                        <div>
                            <Link to='furniture/room/260'>
                                <img src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673329231/bar_and_counter_ijecxj.jpg" className='rounded-lg' alt="" />
                                <p className='text-center -mt-9 mb-3'>BAR AND COUNTER</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Customize Your Product Section */}
            <div className='max-w-7xl bg-[#eeeeee] mx-auto p-10 mb-20 rounded-lg'>
                <div className='flex'>
                    <div className='basis-1/2'>
                        <h2 className='font-[500] text-3xl mb-2'>DESIGN YOUR OWN</h2>
                        <h3 className='text-lg mb-5'>CHOOSE FROM A CURATED SELECTION OF FABRICS AND LEATHERS.</h3>
                        <p className='text-base font-[400] mb-5'>67 Leathers | 196 Fabrics | Endless Configuration</p>
                        <ul className='flex gap-4 mb-3'>
                            <li><img className='w-10' src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673670179/fotor_2023-1-14_10_19_0_chwgrq.png" alt="" /></li>
                            <li><img className='w-10' src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673670179/fotor_2023-1-14_10_19_53_roes4q.png" alt="" /></li>
                            <li><img className='w-10' src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673670179/fotor_2023-1-14_10_20_20_cnvg0m.png" alt="" /></li>
                            <li><img className='w-10' src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673670178/fotor_2023-1-14_10_21_13_fmsfqu.png" alt="" /></li>
                            <li><img className='w-10' src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673670178/fotor_2023-1-14_10_20_52_st2xkt.png" alt="" /></li>
                        </ul>
                        <Link to='/furniture/466'>
                            <button className='btn text-white btn-sm mt-5 font-normal rounded capitalize'>Start Customizing <HiOutlineArrowNarrowRight className='text-base ml-1'></HiOutlineArrowNarrowRight></button>
                        </Link>
                    </div>
                    <div className='basis-1/2 flex justify-center items-center'>
                        <img className='' src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673671022/102577_1-removebg-preview_wg9ere.png" alt="" />
                    </div>
                </div>

            </div>

            {/* Populer Products */}
            <div className='pb-20'>
                <div className='max-w-7xl mx-auto font-semibold'>
                    <h1 className='text-4xl uppercase'>Populer Products</h1>
                    <div className='gap-5 mt-5'>
                        <PopulerProducts></PopulerProducts>
                    </div>
                </div>
            </div>


            {/* On Sale */}
            <div className='pb-20'>
                <div className='max-w-7xl mx-auto font-semibold'>
                    <h1 className='text-4xl uppercase'>ON SALE</h1>
                    <div className='gap-5 mt-5'>
                        <ProductList id={493} limit={8} cols={4}></ProductList>
                    </div>
                </div>
            </div>

            {/* About Section */}
            <div className='about-section mb-5'>
                <div className='flex max-w-7xl mx-auto bg-[#eeeeee]'>

                    <div className='p-20 w-1/2 flex flex-col justify-center'>
                        <h1 className='text-5xl font-semibold'>Berkshire Furniture</h1>
                        <h3 className='text-2xl font-semibold mt-2'>About Berkshire Furniture</h3>
                        <div className='flex mt-3 gap-5'>
                            <p>
                                Berkshire Furniture is a Canadian dealer of Custom Made Solid Wood Furniture and Real Leather Sofas. Established
                            </p>
                        </div>
                    </div>
                    <div className='w-1/2'>
                        <iframe width="100%" height='450px' src="https://www.youtube.com/embed/bPKG_c3_wEY" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>

                    </div>
                </div>
                <div className='flex max-w-7xl mt-16 mx-auto bg-[#eeeeee]'>
                    <div className='w-1/2'>
                        <img src="https://res.cloudinary.com/dj6f8ywcl/image/upload/v1673204911/about-us_l33dtv.jpg" className='w-full' alt="" />
                    </div>
                    <div className='p-16 w-1/2 flex flex-col justify-center'>
                        <h1 className='text-5xl font-semibold'>Berkshire Furniture</h1>
                        <h3 className='text-2xl font-semibold mt-2'>About Berkshire Furniture</h3>
                        <div className='flex mt-3 gap-5'>
                            <p>
                                Berkshire Furniture is a Canadian dealer of Custom Made Solid Wood Furniture and Real Leather Sofas. Established in 1999 Berkshire Furniture has helped thousands of customers with their furnishing needs. Brand name furniture, mostly Canadian and some carefully chosen imports offered through Berkshire Furniture, has been adored and enjoyed by many households in Canada and even in the USA.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* map */}
            <div className='mt-20'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5777.643488471995!2d-79.583582!3d43.610253!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0d8497a82e1c0ca!2sBerkshire%20Furniture!5e0!3m2!1sen!2sbd!4v1673551185979!5m2!1sen!2sbd" title='Berkshire Furniture' width={'100%'} height={'400px'} style={{ border: 0 }} loading={'lazy'} referrerpolicy={"no-referrer-when-downgrade"}></iframe>
            </div>
        </div>
    );
};

export default Home;