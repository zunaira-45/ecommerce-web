import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Hero = () => {
  return (
    <div>
      
      <div className="relative">
        <Image
          src="images/canva.png" 
          alt="Summer Collection" 
          className="w-full h-auto object-cover"
        />
        

      <br />
      <br />

      
      <div className="bg-slate-800 w-full h-auto py-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
       
          <Image
            src="images/farz.png" 
            alt="Summer Collection" 
            className="w-72 h-72 md:w-96 md:h-96 object-contain"
          />

          
          <div className="text-white text-center md:text-left">
            <h1 className="text-xl md:text-2xl">SUMMER 2025</h1>
            <h2 className="text-3xl font-bold md:text-4xl">CLOTHING AND BAGS</h2>
            <p className="mt-4 text-sm md:text-lg">
              We know how large objects will act,
              <br />
              We know how objects will act, We know.
            </p>
            <div className="mt-5">
              <p className="text-lg font-semibold mb-3">$16.48</p>
              <button className="bg-black text-white font-bold px-6 py-3 rounded-md">
                <Link href="/shop">Shop Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Hero;

