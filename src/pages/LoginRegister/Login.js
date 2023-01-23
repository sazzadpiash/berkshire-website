import React from 'react';
import {FcGoogle} from 'react-icons/fc'
import {FaFacebook} from 'react-icons/fa'

const Login = () => {
    return (
        <div>
            <div className='max-w-5xl mx-auto flex items-center gap-10' style={{ height: "80vh" }}>
                <div className='w-1/2 border'>
                    <h4 className='bg-primary text-lg font-bold text-white text-center py-3'>Login</h4>
                    <div className='p-7 pb-10'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <button type='submit' className='btn btn-primary btn-block text-white mt-5'>Login</button>
                        </div>
                        <div className="divider">OR</div>
                        <div className='flex flex-col'>
                            <button className='btn btn-ghost shadow-md border-2 gap-2'><FcGoogle className='w-8 h-8'></FcGoogle> Login with Google</button>
                            <button className='btn btn-ghost shadow-md border-2 gap-2 mt-4 text-white hover:bg-[#2F4779]  bg-[#3b5998]'><FaFacebook className='w-7 h-7 text-white'></FaFacebook> Login with facebook</button>
                        </div>
                        
                    </div>
                  
                </div>
                <div className='w-1/2 border'>
                    <h4 className='bg-primary text-lg font-bold text-white text-center py-3'>Registration</h4>
                    <div className='p-4'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Email Address</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                        </div>
                        <div>
                            <button type='submit' className='btn btn-primary btn-block text-white mt-5'>Register</button>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    );
};

export default Login;