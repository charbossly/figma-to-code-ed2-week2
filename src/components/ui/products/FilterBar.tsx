"use client";
import Link from "next/link";
import { useState } from "react";
import Category from "@/types/category";

type Props = {
  categories: [];
  categoriesCount: any;
};

export default function FilterBar({ categories, categoriesCount }: Props) {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterChange = (category: Category) => {
    setSelectedCategory(category.node);
  };
  return (
    <div className="flex justify-start xl:justify-center  flex-wrap space-x-4 mb-8 gap-y-2">
      <button
        onClick={() => handleFilterChange({ node: "All" })}
        className={`px-4 py-2 font-medium rounded-full capitalize ${
          selectedCategory === "All"
            ? "bg-b-black text-white"
            : "text-b-black hover:bg-gray-300 border border-b-black"
        }`}
      >
        All
      </button>
      {categories.map((category: Category, index) => (
        <Link href={`/search?q=${category.node}`} key={category.node}>
          <button
            onClick={() => handleFilterChange(category)}
            className={`px-4 py-2 font-medium rounded-full capitalize ${
              selectedCategory === category.node
                ? "bg-b-black text-white"
                : " text-b-black hover:bg-gray-300 border border-b-black"
            }`}
          >
            {category.node} {categoriesCount[index]}
          </button>
        </Link>
      ))}
    </div>
  );
}
