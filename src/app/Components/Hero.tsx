import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Import Next.js Image component

const Hero = () => {
  return (
    <div>
      <div className="relative">
        {/* Hero Banner Image */}
        <Image
          src="/images/canva.png" // Use the correct relative path or public folder
          alt="Summer Collection"
          layout="responsive" // Automatically adjusts size based on container
          width={1920} // Provide width (in pixels)
          height={600} // Provide height (in pixels)
          className="w-full h-auto object-cover"
        />

        <br />
        <br />

        {/* Content Section */}
        <div className="bg-slate-800 w-full h-auto py-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-4">
            {/* Product Image */}
            <Image
              src="/images/farz.png"
              alt="Summer Collection"
              width={400} // Adjust width as needed
              height={400} // Adjust height as needed
              className="object-contain"
            />

            {/* Text Section */}
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
