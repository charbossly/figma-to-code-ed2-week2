import React from "react";
import Button from "./button";
import Image from "next/image";

type Props = {
  params: {
    id: number;
  };
};

export default function page({ params }: Props) {
  return (
    <div className="p-8 max-w-screen-lg mx-auto">
      <div className="flex">
        {/* Product Image */}
        <div className="w-1/2">
          <img
            src="/images/imageDetail.png"
            alt="Product"
            className="rounded-2xl"
          />
        </div>

        {/* Product Details */}
        <div className="w-1/2 pl-8">
          <h1 className="text-3xl font-bold">Badacore Tshirt</h1>
          <p className="text-xl mt-2">CAD $80</p>
          <p className="text-lg mt-2">Color: Green</p>

          {/* Colors */}
          <div className="flex mt-4 space-x-2">
            <div className="w-8 h-8 rounded-full bg-yellow-500 border border-gray-300"></div>
            <div className="w-8 h-8 rounded-full bg-green-700 border border-gray-300"></div>
            <div className="w-8 h-8 rounded-full bg-gray-500 border border-gray-300"></div>
            <div className="w-8 h-8 rounded-full bg-black border border-gray-300"></div>
          </div>

          {/* Sizes */}
          <div className="flex mt-6 space-x-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="px-4 py-2 border border-gray-300 rounded-2xl hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex mt-6 space-x-4">
            <button className="flex-1 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
              In Stock
            </button>
            <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100">
              Add to Cart
            </button>
          </div>

          {/* Description */}
          <p className="mt-8 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis
            nisi vitae elit tristique pellentesque. Maecenas lobortis aliquam
            magna. Curabitur tempus mauris at magna feugiat, et dapibus libero
            tincidunt.
          </p>
        </div>
      </div>

      {/* Similar Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold">You may also like</h2>
        <div className="w-full flex flex-row bg-yellow-300 mt-4 space-x-4 overflow-hidden">
          {Array(6)
            .fill("")
            .map((_, index) => (
              <div key={index} className="block w-[420px] bg-red-600">
                <Image
                  src={"/images/imageDetail.png"}
                  alt="product"
                  width={420}
                  height={420}
                />

                <p className="mt-2 text-center font-bold">SUMMER SHIRT</p>
                <p className="text-center">$99</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
