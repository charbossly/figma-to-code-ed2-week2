"use client";

import Image from "next/image";
import React, { useState } from "react";

const articlesData = [
  {
    id: 1,
    category: "Men",
    title: "Classic Men’s Jacket",
    description: "A perfect blend of style and comfort.",
  },
  {
    id: 2,
    category: "Women",
    title: "Elegant Dress",
    description: "An elegant dress for every occasion.",
  },
  {
    id: 3,
    category: "Men",
    title: "Casual Shirt",
    description: "A casual shirt for everyday wear.",
  },
  {
    id: 4,
    category: "Accessories",
    title: "Leather Belt",
    description: "A stylish leather belt.",
  },
  // Add more articles here
];

const categories = ["All", "Men", "Women", "Accessories"];

const ArticlesSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles =
    selectedCategory === "All"
      ? articlesData
      : articlesData.filter((article) => article.category === selectedCategory);

  return (
    <div className="py-12">
      {/* Filter Bar */}
      <div className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 font-medium rounded-full ${
              selectedCategory === category
                ? "bg-black text-white"
                : "bg-gray-200 text-black hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Articles List */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredArticles.map((article) => (
          <div key={article.id} className="group">
            <div className="rounded-3xl relative">
              <Image
                src="/images/imageDetail.png"
                alt="imageDetail"
                width={400}
                height={400}
                className="rounded-3xl"
              />
              <div className="absolute left-4 top-4 rounded-full bg-gray-400 px-4">
                GET OFF 20%
              </div>
              <div className="absolute bottom-4 left-[50%] -translate-x-[50%]  px-4 flex gap-x-4">
                <button className="bg-black text-white px-4 py-2 rounded-full">
                  Buy
                </button>
                <button className="bg-black text-white px-4 py-2 rounded-full">
                  Buy
                </button>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2 uppercase mt-2">
              {article.title}
            </h3>
            <p className="text-gray-600">{article.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticlesSection;
