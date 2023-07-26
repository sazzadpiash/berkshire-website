import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/berkshire-furniture-logo.png";
import { FaUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
    const navigate = useNavigate();
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setsearchResult] = useState([]);
    const searchOnChange = (event) => {
        const search = document.getElementById("searchBar");
        navigate(`/search?search=${search.value}`)
    };
    // useEffect(() => {
    //     if (searchQuery !== "") {
    //         fetch(`https://berkshire-furniture.vercel.app/search?searchQuery=${searchQuery}`)
    //             .then((res) => res.json())
    //             .then((data) => console.log(data));
    //     }
    // }, [searchQuery]);

    // Burger menus

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    return (
        <>
            <header className="hidden lg:block">
                <div className="top-header px-5 mx-auto py-3 lg:p-5 pt-6 pb-0 lg:py-6  flex justify-between items-center ">
                    <div className="logo">
                        <Link to="/">
                            <img className="w-36" src={logo} alt="" />
                        </Link>
                    </div>
                    <div className="searchbar w-2/5 hidden lg:block">
                        <div className="form-control">
                            <div className="input-group">
                                <form className="w-full relative">
                                    <input
                                        type="text"
                                        id="searchBar"
                                        placeholder="Search…"
                                        className="searchInput input px-3 h-10 input-bordered w-full focus:outline-0 focus:border-primary"
                                    />

                                </form>
                                <button onClick={searchOnChange} className="btn btn-primary text-white btn-sm h-[40px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <ul className="flex items-center">
                            <li className="flex items-center gap-1 mr-3">
                                <Link
                                    to="/login"
                                    className="flex items-center gap-2"
                                >
                                    <FaUser className="text-primary"></FaUser>
                                    <span>My Account</span>
                                </Link>
                            </li>
                            <button className="border border-gray-400 p-2 flex gap-1 mr-3">
                                <FiHeart className="text-primary w-[20px] h-[20px]"></FiHeart>
                                <span className="text-sm rounded-1">
                                    Wishlist (0)
                                </span>
                            </button>
                            <Link
                                to="/cart"
                                className="border border-gray-400 p-2 flex gap-1"
                            >
                                <BsCart3 className="text-primary w-[20px] h-[20px]"></BsCart3>
                                <span className="text-sm rounded-1">Cart (1)</span>
                            </Link>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className="searchbar w-full block lg:hidden p-3 lg:p-0">
                        <div className="form-control">
                            <div className="input-group">
                                <form className="w-full relative">
                                    <input
                                        type="text"
                                        id="searchBar"
                                        onChange={searchOnChange}
                                        placeholder="Search…"
                                        className="searchInput input px-3 h-10 input-bordered w-full focus:outline-0 focus:border-primary"
                                    />
                                    <div className="absolute h-max bg-white w-full z-10 hidden searchResult">
                                        <ul>
                                            <li>linksd</li>
                                        </ul>
                                    </div>
                                </form>


                                <button className="btn btn-primary text-white btn-sm h-[40px]">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bottom-header border-t border-b border-gray-200 text-black py-2 relative hidden lg:block">
                    <ul className="flex justify-center gap-10 max-w-7xl mx-auto">
                        <Link to="/">
                            <li>Home</li>
                        </Link>
                        <Link to="/brands/430">
                            <li>Brands</li>
                        </Link>
                        <Link to="/furniture/466">
                            <li>Furniture</li>
                        </Link>
                        <Link to="/furniture/room/468">
                            <li>Product Type</li>
                        </Link>
                        <Link to="/furniture/room/products/493">
                            <li>Sale</li>
                        </Link>
                        <Link to="/information-center">
                            <li>Info Center</li>
                        </Link>
                        <Link to="/allproducts">
                            <li>All Products</li>
                        </Link>
                        <Link to="/test">
                            <li>Test</li>
                        </Link>
                    </ul>
                </div>
            </header>
            <nav class="relative px-4 py-4 flex justify-between items-center bg-white lg:hidden">
                <Link to="/">
                    <img className="w-28" src={logo} alt="" />
                </Link>
                <div class="lg:hidden">
                    <button onClick={toggleMenu} class="navbar-burger flex items-center text-blue-600 p-3">
                        <svg class="block h-4 w-4 fill-current" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Mobile menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                        </svg>
                    </button>
                </div>
            </nav>
            <div class={`navbar-menu relative z-50 ${isMenuOpen && "hidden"}`}>
                <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
                    <div class="flex justify-between items-center mb-6">
                        <Link to="/" class="flex items-center">
                            <img className="w-28" src={logo} alt="" />
                        </Link>
                        <button onClick={toggleMenu} class="navbar-close">
                            <svg class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <div>
                        <ul>
                            <li class="mb-1">
                                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Home</a>
                            </li>
                            <li class="mb-1">
                                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">About Us</a>
                            </li>
                            <li class="mb-1">
                                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Services</a>
                            </li>
                            <li class="mb-1">
                                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Pricing</a>
                            </li>
                            <li class="mb-1">
                                <a class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mt-auto">
                        <div class="pt-6">
                            <a class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
                            <a class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
                        </div>
                        <p class="my-4 text-xs text-center text-gray-400">
                            <span>Copyright © 2021</span>
                        </p>
                    </div>
                </nav>
            </div>
        </>

    );
};

export default Header;
