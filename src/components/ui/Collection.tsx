import Image from "next/image";
import React from "react";
import { fetchCollections } from "../../lib/api";

const CollectionSection = async () => {
  const collections = await fetchCollections();
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-4 ">OUR COLLECTION</h2>
      <p className="text-center text-gray-600 mb-8">
        Our latest collection, where classic and contemporary styles converge in
        perfect harmony.
      </p>

      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        {/* Left Card */}
        <div className="relative w-full md:w-1/2 xl:w-1/3 h-[446px] bg-gray-200  rounded-3xl overflow-hidden">
          <Image
            src={collections[0]?.node.image.url}
            alt={collections[0]?.node.title}
            width={400}
            height={400}
            className="w-full h-full scale-110 object-bottom object-cover relative"
          />

          <div className="absolute bottom-4 left-[50%] -translate-x-[50%]">
            <button className="px-[20px] py-[12px] text-t14 font-Archivo bg-white text-b-black rounded-full shadow-lg flex items-center justify-center font-semibold space-x-2 hover:bg-gray-100 ">
              <span className="text-t14">LEARN MORE</span>
              <Image
                src={"/images/arrow.png"}
                alt="arrow"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative w-full md:w-1/2 xl:w-2/3 h-[446px] bg-gray-200 rounded-lg overflow-hidden">
          <Image
            src={collections[1]?.node?.image.url}
            alt={collections[1]?.node?.title}
            width={675}
            height={446}
            className="w-full h-full object-center object-cover relative"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <h3 className=" text-2xl font-bold text-center">
              <span className="text-white/15 uppercase  font-Chillax  text-customStroke cursor-pointer font-bold   text-t30">
                {collections[1]?.node?.title || ""}
              </span>
              <br />
              <span className="text-sm font-normal text-white font-Archivo text-t14">
                {/* reduce text to max of 10 words */}
                {collections[1]?.node?.description
                  .split(" ")
                  .slice(0, 10)
                  .join(" ") + "..." || ""}
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionSection;
