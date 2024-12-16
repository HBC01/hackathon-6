import React from 'react';
import Image from "next/image";

const Hero = () => {
  return (
    <div className="max-w-[1440px] mx-auto">
      
      <section
        style={{ backgroundColor: "rgba(251, 235, 181, 1)" }}
        className="flex flex-col-reverse items-center justify-between px-4 py-10 md:px-10 md:flex-row xl:px-36"
      >
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl">Rocket single seater</h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-bold">Shop Now</p>
        </div>
        <div className="flex-shrink-0">
          <Image
            src="/seat.png"
            alt="Rocket Single Seater"
            width={500}
            height={500}
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
          />
        </div>
      </section>

    
      <section
        className="flex flex-col sm:flex-row items-center justify-center gap-12 px-4 py-10 md:px-10 xl:px-36"
        style={{ backgroundColor: "rgba(250, 244, 244, 1)" }}
      >
        
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <Image
            src="/side table.png"
            alt="Side Table"
            width={500}
            height={500}
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
          />
          <div className="text-center sm:text-left">
            <p className="text-xl md:text-3xl lg:text-5xl font-bold">Side Table</p>
            <a
              href="#"
              className="text-base md:text-xl lg:text-3xl underline underline-offset-4 hover:text-gray-600"
            >
              View More
            </a>
          </div>
        </div>

        
        <div className="flex flex-col items-center sm:items-start space-y-4">
          <Image
            src="/sofa.png"
            alt="Cloud Sofa"
            width={500}
            height={500}
            className="w-64 h-64 sm:w-80 sm:h-80 md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
          />
          <div className="text-center sm:text-left">
            <p className="text-xl md:text-3xl lg:text-5xl font-bold">Cloud Sofa</p>
            <a
              href="#"
              className="text-base md:text-xl lg:text-3xl underline underline-offset-4 hover:text-gray-600"
            >
              View More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;