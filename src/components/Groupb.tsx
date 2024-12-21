"use client"

import React from 'react';
import Image from 'next/image';
import { useRouter } from "next/navigation";

const Groupb = () => {
  const router = useRouter();
  return (
    <section
      style={{ backgroundColor: 'rgba(255, 249, 229, 1)' }}
      className="h-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4 py-12 md:py-16 md:gap-16 lg:gap-36"
    >
      <Image
        alt="Asgaard Sofa"
        src="/Asgaard sofa 1.png"
        width={950}
        height={600}
        className="w-full max-w-[300px] md:max-w-[450px] lg:max-w-[600px] xl:max-w-[800px] 2xl:max-w-[950px] h-auto object-contain"
      />

      <div className="w-full max-w-[360px] md:max-w-[400px] text-center lg:text-left flex flex-col items-center lg:items-start">
        <p className="text-2xl md:text-3xl lg:text-4xl mb-4">New Arrivals</p>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">Asgaard Sofa</h1>
        <button 
          className="bg-black text-white text-xl md:text-2xl px-8 py-2 rounded-lg hover:bg-gray-800 transition" 
          onClick={() => router.push("/singleproduct")}
        >
          Order Now
        </button>
      </div>
    </section>
  );
};

export default Groupb;