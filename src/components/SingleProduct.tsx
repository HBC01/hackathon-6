
import React from "react";
import Image from "next/image";
import { FaCircle, FaSquareFacebook, FaLinkedin, FaSquareTwitter, FaRegHeart } from "react-icons/fa6";
import Link from "next/link";


const page = () => {
  return (
<div className="flex lg:flex-row flex-col lg:max-w-[1440px] mx-auto lg:max-h-[825px]">
      
      <section className=" w-full flex gap-2 px-2 py-5 " >
        <div className="flex flex-col lg:gap-10 mx-2 gap-10">
          
          <div style={{ backgroundColor: "#FFF9E5" }} className="flex items-center justify-center rounded-lg">
            <Image
              alt="Outdoor sofa set 1"
              src="/Outdoor sofa set 1.png"
              width={50}
              height={50}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>

    
          <div style={{ backgroundColor: "#FFF9E5" }} className="flex items-center justify-center rounded-lg">
            <Image
              alt="Outdoor sofa set 2"
              src="/Outdoor sofa set_2 1.png"
              width={50}
              height={50}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain pb-2"
            />
          </div>

        
          <div style={{ backgroundColor: "#FFF9E5" }} className="flex items-center justify-center rounded-lg">
            <Image
              alt="Stuart sofa"
              src="/Stuart sofa 1.png"
              width={50}
              height={50}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain pb-1"
            />
          </div>

      
          <div style={{ backgroundColor: "#FFF9E5" }} className="flex items-center justify-center rounded-lg">
            <Image
              alt="Maya sofa three seater"
              src="/Maya sofa three seater (1) 1.png"
              width={50}
              height={50}
              className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain"
            />
          </div>
        </div>

        
        <div className=" w-full ">
          <div style={{ backgroundColor: "#FFF9E5" }} className="mx-auto lg:h-[600px] h-[500px]  rounded-lg flex items-center justify-center">
            <Image
              alt="Asgaard sofa"
              src="/Asgaard sofa 1.png"
              width={600}
              height={500}
            
            />
          </div>
        </div>
      </section>

    
      <section className="w-full text-gray-600 py-6 px-4 lg:px-6">
        <div className="w-full">
          <h1 className="text-gray-900 text-2xl sm:text-3xl font-medium mb-2">Asgaard Sofa</h1>
          <h2 className="text-sm text-gray-500 tracking-widest mb-4">Rs. 250,000.00</h2>
          <div className="flex items-center mb-4">
            {[...Array(4)].map((_, index) => (
              <svg
                key={index}
                fill="currentColor"
                className="w-4 h-4 text-yellow-400"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="ml-3 pl-3 py-2 border-l-2 border-gray-200 text-sm">4 Customer Reviews</span>
          </div>
          <p className="leading-relaxed text-sm sm:text-base mb-6">
            Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero
            with a well-balanced audio that boasts a clear midrange and extended highs.
          </p>

        
          <div className="flex flex-col gap-6 mb-6 border-b pb-6">
  
            <div>
              <span className="block text-base font-semibold mb-2">Size</span>
              <div className="flex gap-3">
                {["L", "XL", "XS"].map((size) => (
                  <label key={size} className="cursor-pointer">
                    <input type="radio" name="size" value={size} className="hidden peer" />
                    <span className="px-4 py-2 border rounded-xl bg-yellow-100 peer-checked:bg-yellow-200">
                      {size}
                    </span>
                  </label>
                ))}
              </div>
            </div>

        
            <div>
              <span className="block text-base font-semibold mb-2">Color</span>
              <div className="flex gap-6">
                {["text-purple-800", "text-black", "text-yellow-500"].map((color, index) => (
                  <label key={index} className="cursor-pointer">
                    <input type="radio" name="color" className="hidden peer" />
                    <FaCircle className={`text-2xl ${color} peer-hover:opacity-80`} />
                  </label>
                ))}
              </div>
            </div>
          </div>

      
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            <div className="flex items-center border rounded w-full lg:w-1/3 justify-between">
              <button type="button" className="p-3 text-xl font-bold hover:bg-gray-300">
                -
              </button>
              <input type="text" value="1" className="w-12 text-center" readOnly />
              <button type="button" className="p-3 text-xl font-bold hover:bg-green-100">
                +
              </button>
            </div>
           <button className="p-3 text-xl font-bold hover:bg-green-100">Add To Cart</button>
          
          </div>

    
          <div className="mt-6 text-sm flex flex-col gap-3">

            <label className="flex gap-12">SKU  <p> : SS001</p></label>
            <label className="flex gap-5"> Category<p> : Sofas</p></label>
            <label className="flex gap-12">Tags<p> : Sofa, Chair, Home, Shop</p></label>
            <label className="flex gap-12">Share  <div className="flex gap-10">
                {[FaSquareFacebook, FaLinkedin, FaSquareTwitter].map((Icon, index) => (
                  <Link key={index} href="#">
                    <Icon className="text-xl" />
                  </Link>
                ))}
                <FaRegHeart className="text-xl text-red-500 cursor-pointer" />
              </div> </label>

            
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;