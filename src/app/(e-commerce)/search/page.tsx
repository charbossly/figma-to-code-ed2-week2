import React from "react";
import { fetchProducts, fetchProductsByCategories } from "@/lib/api";
import VerticalProductList from "@/components/ui/products/VerticalProductList";

type Props = {
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default async function SearchPage({ searchParams }: Props) {
  const { q: searchValue } = searchParams as { [key: string]: string };
  const products = !searchValue
    ? await fetchProducts()
    : await fetchProductsByCategories(searchValue);

  return (
    <div className="flex justify-start xl:justify-center  flex-wrap space-x-4 mb-8 gap-y-2">
      <VerticalProductList products={products} />
    </div>
  );
}
