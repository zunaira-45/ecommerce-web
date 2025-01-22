'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import SearchBar from './searchbar';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
     
      <SearchBar />

      
      <div className="flex justify-between items-center p-4 bg-gray-100">
        
        <h1 className="font-bold text-lg">Clothing & Bags</h1>

        
        <button 
          className="md:hidden text-xl" 
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

       
        <nav>
          <ul
            className={`flex flex-col md:flex-row gap-5 absolute md:static bg-gray-100 w-full md:w-auto p-4 md:p-0 transition-transform duration-300 ${
              menuOpen ? 'top-16 left-0' : '-top-96'
            }`}
          >
            <li className="text-gray-500 hover:text-blue-100 font-serif">
              <Link href="/">Home</Link>
            </li>
            <li className="text-gray-500 hover:text-blue-100 font-serif">
              <Link href="/shop">Shop</Link>
            </li>
            <li className="text-gray-500 hover:text-blue-100 font-serif">
              <Link href="/login">Login/Sign Up</Link>
            </li>
            <li className="text-gray-500 hover:text-blue-100 font-serif">
              <Link href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
