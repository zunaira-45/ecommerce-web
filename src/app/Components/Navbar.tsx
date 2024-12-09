import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div className='flex justify-between items-center p-4 '>
        <h1 className='font-bold'>Bandages</h1>
        <nav>
          <ul className='flex gap-5 mr-4'>
            <li className='text-gray-500 hover:text-white-500 font-serif'><Link href='/'>Home</Link>
            </li>
            <li>
              <Link className=' text-gray-500 hover:text-blue-100 font-serif' href="/shop">Shop</Link>
            </li>
            <li>
              <Link className=' text-gray-500 hover:text-blue-100 font-serif' href="/hoop">Products</Link>
            </li>
            
            <li>
              <Link className='text-gray-500 hover:text-blue-100 font-serif' href="/about">About</Link>
            </li>
            <li>
              <Link className='text-gray-500 hover:text-blue-100 font-serif' href="/products">Pricing</Link>
            </li>
            <li>
              <Link className='text-gray-500 hover:text-blue-100 font-serif' href="/contacts">Contacts</Link>
            </li>
            <li>
              <Link className='text-gray-500 hover:text-blue-100 font-serif' href="/contactus">Contact Us</Link>
            </li>
          </ul>
        </nav>
    </div>
    </div>
  )
}

export default Navbar
