import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/berkshire-furniture-logo.png';
import { FaUser } from 'react-icons/fa';
import { FiHeart } from 'react-icons/fi';
import { BsCart3 } from 'react-icons/bs';

const Header = () => {
    return (
        <header>
            <div className="top-header max-w-7xl mx-auto py-3 flex justify-between items-center">
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
            <div className="bottom-header bg-primary text-white py-2">
                <ul className='flex justify-start gap-10 max-w-7xl mx-auto'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/brands/430'><li>Brands</li></Link>
                    <Link to='/furniture/466'><li>Furniture</li></Link>
                    <Link to='/furniture/room/products/493'><li>Sale</li></Link>
                    {/* <li>Top Categores</li>
                    <li>Bed</li>
                    <li>Chair</li>
                    <li>Table</li>
                    <li>Stand</li>
                    <li>Music</li>
                    <li>Bar</li> */}
                    <Link to='/test'><li>Test</li></Link>
                </ul>
            </div>
        </header>
    );
};

export default Header;