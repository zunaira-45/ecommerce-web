import React from 'react'
import Topbar from '../Components/Topbar'


const page = () => {
  return (
    <div>
      <Topbar/>
      
      <br></br>
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
      <div>
        <br></br>
        <br></br>
        <h1 className='text-gray-500 text-center'>PRICING</h1>
        <br></br>
        <p className='font-bold text-2xl text-center'>
            SIMPLE PRICING
        </p>
        <br></br>
        <br></br>
       <div>
        <img src="images/price.png"></img>
       </div>
       <br></br>
       <br></br>
       <div className='flex items-center justify-center'>
       <img src="images/uearly.png"
       height={"200px"}
       width={"200px"}></img>
      </div>
      <br></br>
      <div className='w-full'>
        <img src="images/standard.png"></img>
      </div>
      <div className='w-full'>
        <img src="images/holi.png"></img>
        </div>
        <div className='w-full'>
            <img src="images/faq.png"></img>
        </div>
        <div className='w-full'>
            <img src="images/trial.png"></img>
        </div>
    
        <div className='w-full'>
            <img src="images/ban.png"></img>
        </div>
        
      </div>
    </div>
  )
}

export default page
