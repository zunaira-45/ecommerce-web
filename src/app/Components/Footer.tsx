import React from 'react';
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
     
      <div className="bg-gray-300 p-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <h1 className="font-bold text-2xl">Clothing & Bags</h1>
          <div className="flex gap-4">
            <p className="text-blue-500 text-xl cursor-pointer"><IoLogoInstagram /></p>
            <p className="text-blue-500 text-xl cursor-pointer"><FaFacebook /></p>
            <p className="text-blue-500 text-xl cursor-pointer"><FaTwitter /></p>
          </div>
        </div>
      </div>

      <br />
      <br />

     
      <div className="bg-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 p-6">
          
          <div>
            <h1 className="font-bold mb-2">Company Info</h1>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blogs</p>
          </div>

          <div>
            <h2 className="font-bold mb-2">Legal</h2>
            <p>About Us</p>
            <p>Carrier</p>
            <p>We are hiring</p>
            <p>Blog</p>
          </div>

       
          <div>
            <h3 className="font-bold mb-2">Features</h3>
            <p>Business Marketing</p>
            <p>User Analytic</p>
            <p>Live Chat</p>
            <p>Unlimited Support</p>
          </div>

          <div>
            <h2 className="font-bold mb-2">Resources</h2>
            <p>iOS & Android</p>
            <p>Watch a Demo</p>
            <p>Customers</p>
            <p>API</p>
          </div>

        
          <div>
            <h1 className="font-bold mb-2">Get in Touch</h1>
            <input
              type="email"
              placeholder="Enter your Email"
              className="border border-gray-400 p-2 w-full rounded mb-2"
            />
            <button className="bg-green-500 text-white px-4 py-2 rounded w-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
