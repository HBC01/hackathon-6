import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-10">
      
      <section className="flex flex-col items-center mx-auto gap-10 px-4 lg:flex-row lg:gap-8 lg:max-w-[1440px] w-full">
      
        <p className="text-gray-500 text-center sm:text-lg md:text-xl lg:text-left lg:w-1/3 xl:text-lg px-4">
          400 University Drive Suite 200<br />
          Coral Gables, FL 33134 USA
        </p>

      
        <div className="flex flex-col gap-10 w-full lg:flex-row lg:justify-between lg:w-2/3">
          
          <div className="flex flex-col items-center lg:items-start lg:w-1/3">
            <h2 className="text-gray-700 text-2xl xl:text-3xl font-semibold">Links</h2>
            <nav className="list-none py-5 flex flex-col items-center lg:items-start gap-5">
              <li><a href="#" className="hover:text-gray-800">Home</a></li>
              <li><a href="#" className="hover:text-gray-800">Shop</a></li>
              <li><a href="#" className="hover:text-gray-800">About</a></li>
              <li><a href="#" className="hover:text-gray-800">Contact</a></li>
            </nav>
          </div>

      
          <div className="flex flex-col items-center lg:items-start lg:w-1/3">
            <h2 className="text-gray-700 text-2xl xl:text-3xl font-semibold">Help</h2>
            <nav className="list-none py-5 flex flex-col items-center lg:items-start gap-5">
              <li><a href="#" className="hover:text-gray-800">Payment Options</a></li>
              <li><a href="#" className="hover:text-gray-800">Returns</a></li>
              <li><a href="#" className="hover:text-gray-800">Privacy Policies</a></li>
            </nav>
          </div>

          
          <div className="flex flex-col items-center lg:items-start lg:w-1/3">
            <h2 className="text-gray-700 text-2xl xl:text-3xl font-semibold">Newsletter</h2>
            <form className="flex flex-col gap-5 items-center py-5 w-full">
              <input
                type="email"
                placeholder="Enter your email"
                className="border-b border-gray-500 mx-auto py-2 outline-none focus:border-gray-800 w-full text-center lg:text-left lg:w-auto"
              />
              <button
                type="submit"
                className="bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all w-full lg:w-auto"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>

      
      <hr className="my-8 border-gray-300 " />

    
      <p className="text-gray-500 text-sm text-left px-4 md:px-10">
        2022 Meubel House. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;