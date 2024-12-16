import React from "react";
import Image from "next/image";

const Groupa = () => {
  return (
    <div className="text-gray-600 body-font w-full h-auto py-10 sm:pt-28 relative max-w-[1440px] mx-auto px-4 lg:px-8 xl:px-12">
      <h3 className="font-bold text-2xl sm:text-3xl lg:text-4xl mt-4 text-center">
        Top Picks For You
      </h3>
      <p className="text-sm sm:text-base lg:text-lg mt-4 text-center mx-auto max-w-md lg:max-w-2xl">
        Find a bright ideal to suit your taste with our great selection of suspension, floor, and table lights.
      </p>

      <div className="w-full py-12 grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-4">
    
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
          <a className="block relative rounded overflow-hidden w-full h-[200px]">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full"
              src="/Trenton modular sofa_3 1.png"
              width={400} 
              height={400} 
            />
          </a>
          <div className="mt-4 text-center">
            <p className="text-gray-900 title-font text-sm sm:text-base lg:text-lg font-medium">
              Trenton Modular Sofa
            </p>
            <h2 className="mt-1 font-bold text-sm sm:text-base lg:text-xl">Rs. 25,000.00</h2>
          </div>
        </div>

        
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
          <a className="block relative rounded overflow-hidden w-full h-[200px]">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full"
              src="/Granite dining table with dining chair 1.png"
              width={400}
              height={400}
            />
          </a>
          <div className="mt-4 text-center">
            <p className="text-gray-900 title-font text-sm sm:text-base lg:text-lg font-medium">
              Granite Dining Table
            </p>
            <h2 className="mt-1 font-bold text-sm sm:text-base lg:text-xl">Rs. 25,000.00</h2>
          </div>
        </div>

        
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
          <a className="block relative rounded overflow-hidden w-full h-[200px]">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full"
              src="/Outdoor bar table and stool 1.png"
              width={400}
              height={400}
            />
          </a>
          <div className="mt-4 text-center">
            <p className="text-gray-900 title-font text-sm sm:text-base lg:text-lg font-medium">
              Outdoor Bar Table
            </p>
            <h2 className="mt-1 font-bold text-sm sm:text-base lg:text-xl">Rs. 25,000.00</h2>
          </div>
        </div>

    
        <div className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
          <a className="block relative rounded overflow-hidden w-full h-[200px]">
            <Image
              alt="ecommerce"
              className="object-cover object-center w-full h-full"
              src="/Plain console with teak mirror 1.png"
              width={400}
              height={400}
            />
          </a>
          <div className="mt-4 text-center">
            <p className="text-gray-900 title-font text-sm sm:text-base lg:text-lg font-medium">
              Teak Console Mirror
            </p>
            <h2 className="mt-1 font-bold text-sm sm:text-base lg:text-xl">Rs. 25,000.00</h2>
          </div>
        </div>
      </div>

      <p className="text-center underline underline-offset-8 text-sm sm:text-lg lg:text-xl hover:text-gray-700">
        View All
      </p>
    </div>
  );
};

export default Groupa;