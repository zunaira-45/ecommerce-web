import React from 'react'
import Topbar from '../Components/Topbar'
import Navbar from '../Components/Navbar'
import Link from 'next/link'
import Image from 'next/image'
import Footer from '../Components/Footer'

const page = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0">
            <h1 className="title-font text-5xl text-gray-900 font-serif font-bold text-center">
    
            
           <Image
          src="images/canva.png" 
          alt="Summer Collection" 
          className="w-full h-auto object-cover"
        />
              WELCOME TO CLOTHING AND BAGS
            </h1>
            <p className="leading-relaxed mt-4 text-center">
              Sign up now to unlock exclusive features and start your journey with us<br />
              Join our community today—quick<br />
              easy sign-up awaits to help you get started!
            </p>

            <div className="flex items-center justify-center mt-6">
              <button className="text-center font-bold m-4 p-4 rounded-md bg-black text-white">
                <Link href="/shop">Shop Now</Link>
              </button>
            </div>
          </div>

          <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-8 md:mt-0">
            <h2 className="text-gray-900 text-4xl text-center font-bold mb-5">
              Sign Up
            </h2>
            <div className="relative mb-4">
              <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
                Full Name
              </label>
              <input
                type="text"
                id="full-name"
                name="full-name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-900 rounded text-lg w-full">
              Sign Up
            </button>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default page
