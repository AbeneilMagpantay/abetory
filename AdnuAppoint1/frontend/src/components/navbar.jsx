import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import adnulogo from '../assets/AdNU-Seal1.png';
import defaultpic from '../assets/profilepic.jpg';
import dropdown from '../assets/dropdown.png';

const Navbar = () => {
    const navigate = useNavigate();
    const [token, setToken] = useState(true); // Change this to true to test logged-in state

    return (
        <nav className='flex items-center justify-between px-8 py-4 bg-white shadow-md rounded-b-xl'>
            <div className='flex items-center'>
                <img src={adnulogo} alt="AdNU Logo" className='h-12 w-12 mr-4' />
                <span className='text-2xl font-bold text-blue-600 border-b-2 border-transparent hover:border-[#0670CB]'>
                    Ad<span className='text-yellow-500'>Now</span>
                </span>
            </div>
            <div className='flex items-center space-x-20'>
                <ul className='flex space-x-20'>
                    <NavLink to="/" className={({ isActive }) => 
                        isActive 
                            ? "text-blue-600 border-b-2 border-[#0670CB] font-bold text-[20px]" 
                            : "font-semibold text-gray-600 hover:text-blue-600 hover:font-bold text-[20px] transition"
                    }>
                        <li>Home</li>
                    </NavLink>
                    <NavLink to="/appointment" className={({ isActive }) => 
                        isActive 
                            ? "text-blue-600 border-b-2 border-[#0670CB] font-bold text-[20px]" 
                            : "font-semibold text-gray-600 hover:text-blue-600 hover:font-bold text-[20px] transition"
                    }>
                        <li>Appointment</li>
                    </NavLink>
                    <NavLink to="/news" className={({ isActive }) => 
                        isActive 
                            ? "text-blue-600 border-b-2 border-[#0670CB] font-bold text-[20px]" 
                            : "font-semibold text-gray-600 hover:text-blue-600 hover:font-bold text-[20px] transition"
                    }>
                        <li>News</li>
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => 
                        isActive 
                            ? "text-blue-600 border-b-2 border-[#0670CB] font-bold text-[20px]" 
                            : "font-semibold text-gray-600 hover:text-blue-600 hover:font-bold text-[20px] transition"
                    }>
                        <li>Contact Us</li>
                    </NavLink>
                </ul>
                <div className='flex items-center'>
                    {
                        token ? 
                            <div className='flex items-center gap-2 cursor-pointer group relative'>
                                <img className='w-8 rounded-full' src={defaultpic} alt="Profile" />
                                <img className='w-2.5' src={dropdown} alt="Dropdown" />
                                <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                    <div className='min-w-48 bg-white shadow-lg border border-gray-900 rounded flex flex-col gap-4 p-4'>
                                        <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                        <p onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                        <p onClick={()=>setToken(false)} className='hover:text-black cursor-pointer'>Log Out</p>
                                    </div>
                                </div>
                            </div>
                         : 
                            <button 
                                onClick={() => navigate('/login')} 
                                className='px-8 py-2 text-white bg-[#00396B] rounded-md shadow-md hover:bg-[#002a50] transition duration-300'>
                                Log In
                            </button>
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
