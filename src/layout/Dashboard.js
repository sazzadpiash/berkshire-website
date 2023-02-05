import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    let activeStyle = {
        backgroundColor: "#268ee8",
    };
    return (
        <div className='font-sans'>
            <div>
                <div className='w-44 text-sm p-5 h-screen fixed bg-[#2d3b42] text-white'>
                    <div>
                        <NavLink
                            to='/admin/dashboard'
                            className={`p-2 px-5 mb-1 block w-full text-left focus:bg-[#278fe9] rounded`}
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Dashboard
                        </NavLink>
                    </div>
                    <div>
                    <NavLink
                            to='/admin/all-product'
                            className={`p-2 px-5 mb-1 block w-full text-left focus:bg-[#278fe9] rounded`}
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            All Product
                        </NavLink>
                    </div>
                    <div>
                        <NavLink
                            to='/admin/categories'
                            className={`p-2 px-5 mb-1 block w-full text-left focus:bg-[#278fe9] rounded`}
                            style={({ isActive }) =>
                                isActive ? activeStyle : undefined
                            }
                        >
                            Categories
                        </NavLink>
                    </div>

                </div>
                <div className='ml-44 text-sm'>
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;