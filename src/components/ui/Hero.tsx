import React from "react";
import Image from "next/image";
import Link from "next/link";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="w-full flex bg-herobg flex-col items-center justify-center h-93 md:h-115  xl:h-125 rounded-52 bg-center bg-cover bg-no-repeat relative">
      <div className="flex flex-row gap-x-4 items-center gap-y-4.5">
        <div className="h-0.5 w-16 bg-b-white"></div>
        <h2 className="text-t10 md:text-t14 font-Archivo text-b-white">
          We bring new fashion to the world
        </h2>
        <div className="h-0.5 w-16 bg-b-white"></div>
      </div>

      <h1 className="md:w-2/3 xl:w-7/8 text-t30 xl:text-t48 font-bold text-center  mb-4 font-Chillax text-b-white">
        DISCOVER THE LATEST FASHION TRENDS HERE
      </h1>
      <p className="text-t12 xl:text-t16 font-Archivo text-b-white  text-center mb-6 w-10/12 md:w-1/2">
        Discover a world of fashion with our meticulously curated outfits. Shop
        now to update your wardrobe with chic and stylish outfits.
      </p>
      <div className="flex flex-row items-center justify-center">
        <Link
          href={""}
          className="bg-b-white text-t14 font-Archivo font-semibold  py-3 px-5 rounded-full  transition"
        >
          Start shopping
        </Link>
        <Link
          href="#"
          className="bg-b-white text-t14 font-Archivo font-semibold  p-3 rounded-full  transition"
        >
          <Image src={"/images/arrow.png"} alt="arrow" width={20} height={20} />
        </Link>
      </div>
    </section>
  );
}
