"use client";

import React, { useState } from "react";
import VerticalProductList from "./VerticalProductList";
import Product from "@/types/product";
import Category from "@/types/category";
import Link from "next/link";

type Props = {
  categories: Category[];
  products: Product[];
  categoriesCount: number[];
};

function HomeProductList({ categories, products, categoriesCount }: Props) {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterChange = (category: Category) => {
    setSelectedCategory(category.node);

    //filter products by category
    const filtered =
      category && category.node !== "All"
        ? products
            .filter((product) => product?.node?.tags?.includes(category.node))
            .slice(0, 9)
        : products.slice(0, 9);
    setFilteredProducts(filtered);
  };

  return (
    <>
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
        {categories.map((category, index) => (
          <button
            key={category.node}
            onClick={() => handleFilterChange(category)}
            className={`px-4 py-2 font-medium rounded-full capitalize ${
              selectedCategory === category.node
                ? "bg-b-black text-white"
                : " text-b-black hover:bg-gray-300 border border-b-black"
            }`}
          >
            {category.node} {categoriesCount[index]}
          </button>
        ))}
      </div>

      <VerticalProductList products={filteredProducts} />
      <div className="flex justify-center my-4">
        <Link
          className="align-middle text-t14 font-Archivo font-semibold border border-b-black p-[12px] rounded-full text-b-black hover:bg-b-gray transition"
          href="#"
        >
          {" "}
          View More
        </Link>
      </div>
    </>
  );
}

export default HomeProductList;
