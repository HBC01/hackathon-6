import React from "react";
import { FaUser, FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
const Header = (
  {bgColor}:{bgColor?:string}) => {
  return (
    <header style={{backgroundColor:bgColor||"transparent"}} className="flex justify-between items-center px-4 py-3 lg:py-4 bg-white ">
      
      <div className="flex w-full max-w-[1440px] mx-auto items-center md:ml-10 lg:ml-52 xl:ml-96  ">
        
        <nav className="flex space-x-2 sm:gap-10 md:space-x-6 text-xs sm:text-sm md:text-base lg:text-lg font-bold">
          <Link href="/" className="text-black hover:text-gray-600">Home</Link>
          <Link href="/Shop" className="text-black hover:text-gray-600">Shop</Link>
          <Link href="#about" className="text-black hover:text-gray-600">About</Link>
          <Link href="#contact" className="text-black hover:text-gray-600">Contact</Link>
        </nav>

    
        <div className="flex ml-auto space-x-3 sm:gap-10 md:space-x-6 items-center text-sm sm:text-base lg:text-lg">
          <a href="#profile" className="text-black hover:text-gray-600">
            <FaUser />
          </a>
          <a href="#search" className="text-black hover:text-gray-600">
            <FaSearch />
          </a>
          <a href="#wishlist" className="text-black hover:text-gray-600">
            <FaHeart />
          </a>
          <a href="#cart" className="text-black hover:text-gray-600">
            <FaShoppingCart />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;