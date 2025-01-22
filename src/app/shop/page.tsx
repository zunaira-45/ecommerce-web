import React from 'react'
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Navbar from '../Components/Navbar';
import Topbar from '../Components/Topbar';
import ProductCards from '../Product/page';
import Testimonial from '../Components/testimonials';

const page = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <br />
      <div className='bg-gray-100 w-full'>
        <img src="images/girlyy.png" className="w-full object-cover" />
        <br />
        <br />
      </div>

      <ProductCards />

      <Testimonial />

      <div className='bg-gray-300'>
        <div className='flex gap-4 flex-wrap items-center justify-between p-4'>
          <h1 className='font-bold text-2xl w-full md:w-auto'>Bandage</h1>
          <div className='flex gap-2'>
            <p className='text-blue-500'><IoLogoInstagram /></p>
            <p className='text-blue-500'><FaFacebook /></p>
            <p className='text-blue-500'><FaTwitter /></p>
          </div>
        </div>
      </div>
      <br />
      <br />

      <div className='bg-white-600'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6'>
          <div>
            <h1 className='font-bold'>Company Info</h1>
            <p>About Us</p>
            <p>Careers</p>
            <p>We are hiring</p>
            <p>Blogs</p>
          </div>

          <div>
            <h2 className='font-bold'>Legal</h2>
            <p>About Us</p>
            <p>Careers</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>

          <div>
            <h3 className='font-bold'>Features</h3>
            <p>Business Marketing</p>
            <p>User Analytics</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>

          <div>
            <h2 className='font-bold'>Resources</h2>
            <p>IOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>

          <div>
            <h1 className='font-bold'>Get in Touch</h1>
            <input
              type="email"
              placeholder='Enter your Email'
              className='border border-black p-2 mt-2 mb-2 w-full md:w-auto'
            />
            <button className='bg-green-500 text-white w-full md:w-auto'>
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <br />
      <br />

      <div className='flex justify-center items-center'>
        <img src="images/fir.png" className="h-48 w-48 object-contain" />
      </div>
    </div>
  )
}

export default page
