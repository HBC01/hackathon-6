import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaCalendarAlt, FaRegClock } from "react-icons/fa";

const Groupc = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 xl:h-[700px] py-10">
      <h1 className="text-center font-bold pt-10 text-3xl sm:text-4xl xl:text-5xl">Our Blogs</h1>
      <p className="pt-4 sm:pt-6 px-2 text-lg sm:text-xl xl:text-2xl text-center">
        Find a bright idea to suit your taste with our great selection
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-10">
        
        <div className="flex flex-col items-center">
          <Image
            src="/Rectangle 13.png"
            alt="Blog 1"
            width={280} 
            height={280} 
            className="object-cover"
          />
          <p className="text-gray-700 text-center pt-4">Going all-in with millennial design</p>
          <Link href="#" className="underline underline-offset-8 pt-2">
            Read More
          </Link>
          <div className="text-center flex items-center justify-center px-4 py-2 gap-2 mt-4">
            <FaRegClock />
            <span>5 min</span>
            <FaCalendarAlt />
            <p>
              12<sup>th</sup> Oct 2022
            </p>
          </div>
        </div>

      
        <div className="flex flex-col items-center">
          <Image
            src="/Rectangle 14.png"
            alt="Blog 2"
            width={280}
            height={280}
            className="object-cover"
          />
          <p className="text-gray-700 text-center pt-4">Going all-in with millennial design</p>
          <Link href="#" className="underline underline-offset-8 pt-2">
            Read More
          </Link>
          <div className="text-center flex items-center justify-center px-4 py-2 gap-2 mt-4">
            <FaRegClock />
            <span>5 min</span>
            <FaCalendarAlt />
            <p>
              12<sup>th</sup> Oct 2022
            </p>
          </div>
        </div>

    
        <div className="flex flex-col items-center">
          <Image
            src="/Rectangle 15.png"
            alt="Blog 3"
            width={280}
            height={280}
            className="object-cover"
          />
          <p className="text-gray-700 text-center pt-4">Going all-in with millennial design</p>
          <Link href="#" className="underline underline-offset-8 pt-2">
            Read More
          </Link>
          <div className="text-center flex items-center justify-center px-4 py-2 gap-2 mt-4">
            <FaRegClock />
            <span>5 min</span>
            <FaCalendarAlt />
            <p>
              12<sup>th</sup> Oct 2022
            </p>
          </div>
        </div>
      </div>

      
      <Link 
        href="#" 
        className="block mt-8 text-lg sm:text-xl text-center text-gray-700 underline underline-offset-4 hover:text-gray-900 transition-all"
      >
        View All Post
      </Link>
    </section>
  );
};

export default Groupc;