import React from 'react';

const Shopc = () => {
  return (
    <section
      style={{
        backgroundColor: 'rgba(250, 244, 244, 1)'
      }} className="max-w-[1440px] lg:h-[300px] flex px-5 py-10 gap-5 flex-col lg:flex-row  items-center mx auto "
    >
     
      <div className="">
        <h2 className="text:xl font-bold">Free Delivery</h2>
        <p className="text-gray-700 text-xl">For all orders over $50, consectetur adipim scing elit.</p>
      </div>

      <div className="">
        <h2 className="text:xl font-bold">90 Days Return</h2>
        <p className="text-gray-700 text-xl">If goods have problems, consectetur adipim scing elit.</p>
      </div>

      <div className="">
        <h2 className="text:xl font-bold">Secure Payment</h2>
        <p className="text-gray-700 text-xl">100% secure payment, consectetur adipim scing elit.</p>
      </div>
    
    </section>
  );
};

export default Shopc;