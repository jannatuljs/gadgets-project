import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { WishListContext } from './Context/WishlistContext';
const Navbar = ( ) => {
  const { cartCount } = useContext(CartContext);
  const { wishListCount } = useContext(WishListContext);
    return (
        <div className="navbar   bg-base-100  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/Statistics'>Statistics</Link></li>
        <li><Link to='/Dashboard'>Dashboard</Link></li>
      </ul>
    </div>
    <Link to='/' className="text-xl">Gadget Heaven</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/Statistics'>Statistics</Link></li>
      <li><Link to='/Dashboard'>Dashboard</Link></li>
    </ul>
  </div>
  <div className="navbar-end gap-4">
  
    
  <div className=" relative">
              <button className="hover:bg-[#09080F0D] w-10 h-10 bg-slate-100 text-black border rounded-full flex justify-center items-center">
                <IoCartOutline />
              </button>
              <div className=" absolute size-6 -top-3 -right-3 bg-purple-100 w-7 h-7 rounded-full text-black flex justify-center items-center font-bold">
                {cartCount}
              </div>
            </div>
            <div className="relative">
              <button className="hover:bg-[#09080F0D] w-10 h-10 bg-slate-100 text-black border rounded-full flex justify-center items-center">
                <FaRegHeart />
              </button>
              <div className=" absolute -top-3 -right-3 bg-purple-100 w-7 h-7 rounded-full text-black flex justify-center items-center font-bold">
                {wishListCount}
              </div>
            </div>
  </div>
</div>
    );
};

export default Navbar;