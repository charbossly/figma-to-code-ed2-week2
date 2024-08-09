import React from "react";
import Layout from "./Layout";

type Props = {};

export default function Hero({}: Props) {
  return (
    <section className="w-full flex bg-herobg flex-col items-center justify-center h-[372px] md:h-[460px]  xl:h-[500px] rounded-[52px] bg-center bg-cover bg-no-repeat relative">
      <div className="absolute inset-0 bg-blackUi opacity-15 rounded-[52px]" />
      <h1 className="text-4xl font-bold text-center text-foreground mb-4">
        DISCOVER THE LATEST FASHION TRENDS
        <span className="block text-2xl mt-2">HERE</span>
      </h1>
      <p className="text-lg text-muted-foreground text-center mb-6">
        Discover a world of fashion with our meticulously curated outfits. Shop
        now to update your wardrobe with chic and stylish outfits.
      </p>
      <button className="bg-primary text-primary-foreground py-2 px-4 rounded-full hover:bg-primary/80 transition">
        Start shopping
        <span className="ml-2">➡️</span>
      </button>
    </section>
  );
}
