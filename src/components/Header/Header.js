import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/berkshire-furniture-logo.png';
import { RiShoppingCart2Fill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';

const Header = () => {
    return (
        <header>
            <div className="top-header max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
                <div className="logo">
                    <Link to='/'><img className='w-36' src={logo} alt="" /></Link>
                </div>
                <div className="searchbar w-1/2">
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
                        <li className='flex items-center gap-1 mr-4'><FaUser className='text-primary'></FaUser><span>My Account</span></li>
                        <li className='indicator mr-4'>
                            <FiHeart className='text-primary text-xl'></FiHeart>
                            <span className="indicator-item indicator-top indicator-end badge badge-sm px-[4px] text-white">9</span>
                        </li>
                        <li className='indicator mr-3'>
                            <RiShoppingCart2Fill className="text-primary text-2xl"></RiShoppingCart2Fill>
                            <span className="indicator-item indicator-top indicator-end badge badge-sm px-[4px] text-white">9</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="bottom-header bg-primary text-white py-2">
                <ul className='flex justify-evenly max-w-7xl mx-auto'>
                    <li>Home</li>
                    <li>Categories</li>
                    <li>Top Categores</li>
                    <li>Bed</li>
                    <li>Chair</li>
                    <li>Table</li>
                    <li>Stand</li>
                    <li>Music</li>
                    <li>Bar</li>
                    <Link to='/test'><li>Test</li></Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;