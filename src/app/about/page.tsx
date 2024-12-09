import React from 'react';
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Topbar from '../Components/Topbar';


const Page = () => {
  return (
    <div className="container">
      <Topbar />
      
      <div className="header flex items-center justify-center gap-x-8">
        <h1 className="font-bold text-2xl">Bandage</h1>
        <nav className='mt-2'>
            <ul className="flex gap-x-4">
        
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/products">Pricing</a>
            </li>
            <li>
              <a href="/hoop">Products</a>
            </li>
            <li>
              <a href="/contacts">Contact</a>
            </li>
            <li>
              <button>Login</button>
            </li>
            <li>
            </li>
            </ul>
        </nav>
        <button className='text-blue-500'>
                    Login
                </button>
              <button className="bg-blue-500 m-2 p-2 text-white">
                Become a member
              </button>
      </div>

      <div className="bg-white">
        <div className="grid grid-cols-2">
          <div>
            <br />
            <br />
            <h1 className="font-bold text-center">About Company</h1>
            <br />
            <p className="text-2xl font-bold text-center">
              ABOUT US
              <br />
            </p>
            <p className="text-gray-500 text-center">
              We know how large objects will act, <br />
              but things on a small scale
            </p>
            <br />
            <p className="text-center">
              <button className="bg-blue-500 m-4 p-4 text-white text-center">
                Get Quote New
              </button>
            </p>
          </div>

          <div>
            <img src="images/save.png" alt="Save Image" />
          </div>
        </div>
      </div>

      <img src="images/try.png" alt="Try Image" />

      <div className="grid grid-cols-4">
        
        <div>
          <h1 className="font-bold text-2xl">15K</h1>
          <p>Happy Customers</p>
        </div>

        <div>
          <h2 className="font-bold text-2xl">150K</h2>
          <p>Monthly Visitors</p>
        </div>
        <div>
          <h3 className="font-bold text-2xl">15</h3>
          <p>Countries Worldwide</p>
        </div>
        <div>
          <h4 className="font-bold text-2xl">100+</h4>
          <p>Top Partners</p>
        </div>
      </div>
      <div>
        <br></br>
        <div className='w-full'>
        <img src="images/video.png"></img>
      </div>
      </div>
      <br></br>
      <br></br>
      <div>
        <h1 className='font-bold text-3xl text-center'>
            Meet Our Team
        </h1>
        <p className='text-gray-500 text-center'>
        Problems trying to resolve the conflict between 
        the two major realms of Classical physics: Newtonian mechanics 
        </p>
        <div>
            <img src="images/table.png"></img>
        </div>

      </div>
      <br></br>
      <br></br>
      <div className='text-center bg-slate-100'>
        <h1 className='font-bold text-2xl'>Big Companies are Here</h1>
        <br></br>
       <p className='text-gray-500'>
       Problems trying to resolve the conflict between 
       the two major realms of Classical physics: Newtonian mechanics 
       </p>
       <div>
         <img src="images/logo.png"></img>
       </div>
      </div>
      <div>
        <br></br>
        <br></br>
       <div>
         <img src="images/world.png" alt="Contact Image" />
             
        </div>
      </div>






    <br></br>
    <br></br>


      <div className='bg-gray-300'>
            <div className='  flex gap-1 flex items-center justify-between'>
      <h1 className='font-bold text-2xl'>Bandage</h1>
    <p className='text-blue-500'><IoLogoInstagram/></p>
    <p className='text-blue-500'><FaFacebook/></p>
    <p className='text-blue-500'><FaTwitter/></p>
    </div>
    </div>
    <br></br>
    <br></br>

      <div className='bg-white-600'>
    <div className='grid grid-cols-5'>
        <div className='col-span-1'><h1 className='font-bold'>Company Info</h1>
            <p>About US</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blogs</p>
        </div>

        <div className='col-span-1'>
            <h2 className='font-bold'>Legal</h2>
        <p>
            About Us
        </p>
        <p>
            Carrier
        </p>
        <p>
            We are hiring
        </p>
        <p>
            Blog
        </p>
        </div>

        <div>
            <h3 className='font-bold'>Features</h3>
            <p>
            Business Marketing</p>
                <p>
                User Analytic </p>
                    <p>
                    Live Chat</p>
                        <p>
                        Unlimited Support </p></div>

        <div><h2 className='font-bold'>Resources</h2>
        <p>
        IOS & Android </p>
            <p>
            Watch a Demo </p>
                <p>
                Customers </p>
                    <p>
                    API</p></div>


        <div> <h1 className='font-bold'>Get in Touch</h1>
            <input
            type="email"
            placeholder='Enter your Email'
            className='border border-black p-2 mt-2 mb-2'/>
            <button className='bg-green-500 text-white'>
                Subscribe
                </button>
        </div>
        </div>

    </div>

      

      </div>
      
    
  );
};

export default Page;