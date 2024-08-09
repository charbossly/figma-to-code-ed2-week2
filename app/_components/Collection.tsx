import Image from "next/image";
import React from "react";

const CollectionSection = () => {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-4">OUR COLLECTION</h2>
      <p className="text-center text-gray-600 mb-8">
        Our latest collection, where classic and contemporary styles converge in
        perfect harmony.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Left Card */}
        <div className="relative w-full md:w-1/2 xl:w-1/3 h-[446px] bg-gray-200  rounded-3xl overflow-hidden">
          <Image
            src="/images/techMens.png"
            alt="Left Collection Image"
            width={400}
            height={400}
            className="w-full h-full scale-110 object-bottom object-cover relative"
          />

          <div className="absolute bottom-4 left-[50%] -translate-x-[50%]">
            <button className="px-2 py-2 bg-white text-black rounded-full shadow-lg flex items-center space-x-2 hover:bg-gray-100">
              <span className="text-t14">LEARN MORE</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative w-full md:w-1/2 xl:w-2/3 h-[446px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src="/images/abrahamGeorge.png"
            alt="Left Collection Image"
            width={675}
            height={446}
            className="w-full h-full object-center object-cover relative"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h3 className="text-white text-2xl font-bold text-center">
              CLASSIC MEN
              <br />
              <span className="text-sm font-normal">
                We're changing the way things get made
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
