import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/berkshire-furniture-logo.png";
import { FaUser } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [searchResult, setsearchResult] = useState([]);
    const searchOnChange = (event) => {
        setSearchQuery(event.target.value);
    };
    useEffect(() => {
        if (searchQuery !== "") {
            fetch(`http://localhost:5000/search?searchQuery=${searchQuery}`)
                .then((res) => res.json())
                .then((data) => console.log(data));
        }
    }, [searchQuery]);
    return (
        <header>
            <div className="top-header max-w-7xl mx-auto p-3 lg:p-0 pt-6 pb-0 lg:py-6  flex justify-between items-center ">
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
                            {/* <input type="text" id='searchBar' placeholder="Search…" className="input px-3 h-10 input-bordered w-full" /> */}

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
                            {/* <input type="text" id='searchBar' placeholder="Search…" className="input px-3 h-10 input-bordered w-full" /> */}

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
                <ul className="flex justify-start gap-10 max-w-7xl mx-auto">
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
    );
};

export default Header;
