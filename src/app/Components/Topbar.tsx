
import React from 'react'
import { CiSearch } from 'react-icons/ci'
import { IoCartOutline } from 'react-icons/io5'
import { CiPhone } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import Link from 'next/link';
import { IoMdHeartEmpty } from "react-icons/io";


const Topbar = () => {
    
        
   
  return (
    <div>
       
            <div className='bg-blue-950 p-3 text-white flex gap-x-6'>
                <div className='md:flex justify-end items-center flex gap-x-8'>
                <h1><CiPhone/></h1>
                <p>(225) 555-0118</p>
                <h2><MdOutlineEmail/></h2>
                <p>michelle.rivera@example.com</p>
                <p>Follow Us  and get a chance to win 80% off</p>
                <p>Follow Us:</p>
                <p><IoLogoInstagram/></p> <p><FaFacebook/></p> <p><FaTwitter/></p> <p><FaYoutube/></p>
                </div>

    
    
        <div className='flex gap-x-5'>
            <h1 className='text-blue font-bold'>Login/Register</h1>
            <CiSearch/>
            <IoCartOutline/>
            <IoMdHeartEmpty/>1
            </div>

       </div>
    

     

       
       </div>
        )}
       
      
  

  

export default Topbar

