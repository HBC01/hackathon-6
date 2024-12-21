import React from "react";
import Image from "next/image";
import Link from "next/link";

const Singleproducta = () => {
  return (
    <div className="max-w-[1440px] mx-auto p-4 lg:p-8">
  
      <div className="flex flex-col items-center ">
        <nav className="w-[55%] lg:w[75%] mx-auto flex  items-center gap-4 lg:gap-24 text-sm lg:text-base mb-4">
          <strong>
            <Link href="#">Description</Link>
          </strong>
          <Link href="#">Additional Information</Link>
          <Link href="#">Reviews [5]</Link>
        </nav>

      
        <div className="w-[80%] lg:w-[90%] mx-auto px-4 lg:px-8 text-gray-400">
          <p className="mb-4">
            Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
          </p>
          <p>
            Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage-styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine-tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
          </p>
        </div>


        <div className="w-full flex flex-col gap-4 md:flex-row md:gap-8 mt-8">
          <div
            style={{ backgroundColor: "#FFF9E5" }}
            className="w-full md:w-[50%] aspect-[2/1] flex items-center justify-center"
          >
            <Image
              alt="image"
              width={800}
              height={400}
              src="/Cloud sofa three seater + ottoman_1 1.png"
            />
          </div>
          <div
            style={{ backgroundColor: "#FFF9E5" }}
            className="w-full md:w-[50%] aspect-[2/1] flex items-center justify-center"
          >
            <Image
              alt="image"
              width={800}
              height={400}
              src="/Maya sofa three seater 1.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Singleproducta;