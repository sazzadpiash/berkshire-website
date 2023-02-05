import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/berkshire-furniture-logo.png';
import { FaUser } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';
import { useRef } from 'react';

const Header = () => {

    return (
        <header>
            <div className="top-header max-w-7xl mx-auto py-6 flex justify-between items-center">
                <div className="logo">
                    <Link to='/'><img className='w-36' src={logo} alt="" /></Link>
                </div>
                <div className="searchbar w-2/5">
                    <div className="form-control">
                        <div className="input-group">
                            <input type="text" id='searchBar' placeholder="Search…" className="input px-3 h-10 input-bordered w-full" />
                            <button className="btn btn-primary text-white btn-sm h-[40px]">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className='flex items-center'>
                        <li className='flex items-center gap-1 mr-3'><Link to='/login' className='flex items-center gap-2'><FaUser className='text-primary'></FaUser><span>My Account</span></Link></li>
                        <button className='border border-gray-400 p-2 flex gap-1 mr-3'>
                            <FiHeart className='text-primary w-[20px] h-[20px]'></FiHeart>
                            <span className='text-sm rounded-1'>
                                Wishlist (0)
                            </span>
                        </button>
                        <Link to='/cart' className='border border-gray-400 p-2 flex gap-1'>
                            <BsCart3 className='text-primary w-[20px] h-[20px]'></BsCart3>
                            <span className='text-sm rounded-1'>
                                Cart (1)
                            </span>
                        </Link>

                    </ul>
                </div>
            </div>
            <div className="bottom-header border-t border-b border-gray-200 text-black py-2 relative">
                <ul className='flex justify-start gap-10 max-w-7xl mx-auto'>

                    <Link to='/'><li>Home</li></Link>
                    <Link to='/brands/430'><li>Brands</li></Link>
                    <Link to='/furniture/466'><li>Furniture</li></Link>

                    <Link to='/furniture/room/products/493'><li>Sale</li></Link>
                    <Link to='/information-center'><li>Info Center</li></Link>
                    <Link to='/allproducts'><li>All Products</li></Link>
                    {/* <li>Top Categores</li>
                    <li>Bed</li>
                    <li>Chair</li>
                    <li>Table</li>
                    <li>Stand</li>
                    <li>Music</li>
                    <li>Bar</li> */}
                    <Link to='/test'><li>Test</li></Link>



                    {/* <!--Start Hoverable Link--> */}

                    <li className="hoverable">
                        <p className="relative">Hover to show</p>
                        <div className="p-6 mega-menu z-10 mb-16 sm:mb-0 shadow-xl bg-teal-700">
                            <div className="container mx-auto w-full flex flex-wrap justify-between mx-2">
                                <div className="w-full text-white mb-8 text-center">
                                    <h2 className="font-bold text-2xl">Listen, why don’t you wait out by the speeder.</h2>
                                    <p>our droids. They’ll have to wait outside. We don’t want them here.</p>
                                </div>
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                    <div className="flex items-center">
                                        <svg className="h-8 mb-3 mr-3 fill-current text-white"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M3 6c0-1.1.9-2 2-2h8l4-4h2v16h-2l-4-4H5a2 2 0 0 1-2-2H1V6h2zm8 9v5H8l-1.67-5H5v-2h8v2h-2z" />
                                        </svg>
                                        <h3 className="font-bold text-xl text-white text-bold mb-2">Tatooine</h3>
                                    </div>
                                    <p className="text-gray-100 text-sm">Thul klivian doldur thisspiasian calrissian. Garindan d8 aurra twi'lek tund polis gen'dai sola tarpals.</p>
                                    <div className="flex items-center py-3">
                                        <svg className="h-6 pr-3 fill-current text-teal-300"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                        </svg>
                                        <a href="/" className="text-white bold border-b-2 border-teal-300 hover:text-teal-900">Find out more...</a>
                                    </div>
                                </ul>
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-r-0 lg:border-r lg:border-b-0 pb-6 pt-6 lg:pt-3">
                                    <div className="flex items-center">
                                        <svg className="h-8 mb-3 mr-3 fill-current text-white"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M4.13 12H4a2 2 0 1 0 1.8 1.11L7.86 10a2.03 2.03 0 0 0 .65-.07l1.55 1.55a2 2 0 1 0 3.72-.37L15.87 8H16a2 2 0 1 0-1.8-1.11L12.14 10a2.03 2.03 0 0 0-.65.07L9.93 8.52a2 2 0 1 0-3.72.37L4.13 12zM0 4c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                                        </svg>
                                        <h3 className="font-bold text-xl text-white text-bold mb-2">Cantonica</h3>
                                    </div>
                                    <p className="text-gray-100 text-sm">Thul klivian doldur thisspiasian calrissian. Garindan d8 aurra twi'lek tund polis gen'dai sola tarpals.</p>
                                    <div className="flex items-center py-3">
                                        <svg className="h-6 pr-3 fill-current text-teal-300"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                        </svg>
                                        <a href="/" className="text-white bold border-b-2 border-teal-300 hover:text-teal-900">Find out more...</a>
                                    </div>
                                </ul>
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 border-b sm:border-b-0 sm:border-r md:border-b-0 pb-6 pt-6 lg:pt-3">
                                    <div className="flex items-center">
                                        <svg className="h-8 mb-3 mr-3 fill-current text-white"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M2 4v14h14v-6l2-2v10H0V2h10L8 4H2zm10.3-.3l4 4L8 16H4v-4l8.3-8.3zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                                        </svg>
                                        <h3 className="font-bold text-xl text-white text-bold mb-2">Yavin 4</h3>
                                    </div>
                                    <p className="text-gray-100 text-sm">Thul klivian doldur thisspiasian calrissian. Garindan d8 aurra twi'lek tund polis gen'dai sola tarpals.</p>
                                    <div className="flex items-center py-3">
                                        <svg className="h-6 pr-3 fill-current text-teal-300"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                        </svg>
                                        <a href="/" className="text-white bold border-b-2 border-teal-300 hover:text-teal-900">Find out more...</a>
                                    </div>
                                </ul>
                                <ul className="px-4 w-full sm:w-1/2 lg:w-1/4 border-gray-600 pb-6 pt-6 lg:pt-3">
                                    <div className="flex items-center">
                                        <svg className="h-8 mb-3 mr-3 fill-current text-white"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                                        </svg>
                                        <h3 className="font-bold text-xl text-white text-bold mb-2">Alderaan</h3>
                                    </div>
                                    <p className="text-gray-100 text-sm">Thul klivian doldur thisspiasian calrissian. Garindan d8 aurra twi'lek tund polis gen'dai sola tarpals.</p>
                                    <div className="flex items-center py-3">
                                        <svg className="h-6 pr-3 fill-current text-teal-300"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M20 10a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-2 0a8 8 0 1 0-16 0 8 8 0 0 0 16 0zm-8 2H5V8h5V5l5 5-5 5v-3z" />
                                        </svg>
                                        <a href="/" className="text-white bold border-b-2 border-teal-300 hover:text-teal-900">Find out more...</a>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </li>
                    {/* <!--end Hoverable Link--> */}
                </ul>
            </div>
        </header>
    );
};

export default Header;