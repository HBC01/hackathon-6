import React from 'react';
import Image from "next/image";

const Shopx = () => {
  return (
    <div 
      style={{
        backgroundImage: "url(/Rectangle.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full max-w-[1440px] mx-auto max-h-[316px] sm:h-auto flex flex-col justify-center items-center text-center px-4 sm:px-8
      py-24
      "
    >
      <div className="flex flex-col items-center justify-center h-full text-center">
        <Image 
          src="/Meubel House_Logos-05.png"
          alt="Meubel House Logo"
          width={70}
          height={70} 
          className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] lg:w-[100px] lg:h-[100px]"
        />

        <h3 className="mt-4 text-base sm:text-lg lg:text-2xl font-semibold">
          Shop
        </h3>

        <p className="mt-2 text-xs sm:text-sm lg:text-base">
          <strong>Home &gt; </strong>Shop
        </p>
      </div>
    </div>
  );
};

export default Shopx;