import React from 'react';
import { CiSearch } from 'react-icons/ci';
import { IoCartOutline } from 'react-icons/io5';
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from 'next/link';
import { IoMdHeartEmpty } from "react-icons/io";

const Topbar = () => {
  return (
    <div>
      
      <div className="bg-blue-950 p-3 text-white flex flex-col md:flex-row md:justify-between md:items-center gap-y-3">
       
        <div className="flex flex-col md:flex-row md:items-center gap-4">
          <div className="flex items-center gap-2">
            <CiPhone />
            <p>(225) 555-0118</p>
          </div>
          <div className="flex items-center gap-2">
            <MdOutlineEmail />
            <p>michelle.rivera@example.com</p>
          </div>
          <p className="hidden md:block">Follow Us and get a chance to win 80% off</p>
          <div className="flex items-center gap-3">
            <p className="hidden md:block">Follow Us:</p>
            <IoLogoInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>

       
        <div className="flex items-center gap-5 justify-between">
          <li className="list-none">
            <Link 
              className="text-gray-500 hover:text-blue-100 font-serif cursor-pointer" 
              href="/login"
            >
              Login/Register
            </Link>
          </li>

          <Link 
              className="text-gray-500 hover:text-blue-100 font-serif cursor-pointer" 
              href="/cart"
            >
              Login/Register
            </Link> <CiSearch className="cursor-pointer" />
          <IoCartOutline className="cursor-pointer" />
          <div className="flex items-center gap-1">
            <IoMdHeartEmpty />
            <span>1</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;


