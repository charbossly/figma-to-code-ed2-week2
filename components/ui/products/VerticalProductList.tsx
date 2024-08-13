import React from "react";
import Product from "@/types/product";
import ProductItem from "./ProductItem";

type Props = {
  products: Product[];
};

export default function VerticalProductsList({ products }: Props) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
      {products?.length > 0 &&
        products.map((product) => (
          <ProductItem key={product.node.id} product={product} />
        ))}
      {products?.length === 0 && (
        <div className="grid md:col-span-2 xl:col-span-3 w-full items-center  h-56">
          <p className="text-gray-600 text-center">
            No products found for this category
          </p>
        </div>
      )}
    </div>
  );
}
