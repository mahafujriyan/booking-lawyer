import React from 'react';
import { NavLink } from 'react-router';
import { Link } from 'react-router';


const Navbar = () => {
    return (
        <div className="  navbar mx-10 px-10 bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink>Home</NavLink></li>
      <li><NavLink className={({ isActive }) =>
        isActive ? 'text-green-500' : ''
      } to='/bookings'>My-Bookings</NavLink></li>
      <li><NavLink
       className={({ isActive }) =>
        isActive ? 'text-green-500' : ''
      } to='/blogs'>Blogs</NavLink></li>
      <li><NavLink  className={({ isActive }) =>
        isActive ? 'text-green-500' : ''
      }
       to='*' >Contact Us</NavLink></li>
      </ul>
    </div>
    <div className='flex gap-2'>
        <div>
            <img className='text-' src="/asset/logo.png" alt="" />
        </div>
        <div>
            <h1 className='text-[32px] font-bold text-black '>Law.BD</h1>
        </div>

    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><NavLink>Home</NavLink></li>
      <li><NavLink  className={({ isActive }) =>
        isActive ? 'text-green-500' : ''
      } to='/bookings'>My-Bookings</NavLink></li>
      <li><NavLink  className={({ isActive }) =>
        isActive ? 'text-green-500' : ''
      } to='/blogs'>Blogs</NavLink></li>
      <li><NavLink  className={({ isActive }) =>
        isActive ? 'text-green-500' : ''
      } to='/contacts'>Contact Us</NavLink></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="bg-[#0EA106] text-white rounded-4xl p-2">Contact Now</a>
  </div>
</div>
    );
};

export default Navbar;