import React from 'react';

const Groupd = () => {
  return (
    <section 
      style={{
        backgroundImage: "url(/image.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="w-full h-auto min-h-[250px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[450px] max-w-[1440px] mx-auto px-4 flex flex-col items-center justify-center"
    >
      <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
        Our Instagram
      </h2>
      <p className="text-center text-sm sm:text-base md:text-lg mb-4">
        Follow our store on Instagram
      </p>
      <button 
        style={{ backgroundColor: "rgba(250, 244, 244, 1)" }}
        className="py-2 px-6 shadow-xl rounded-xl text-sm sm:text-base md:text-lg"
      >
        Follow Us
      </button>
    </section>
  );
};

export default Groupd;