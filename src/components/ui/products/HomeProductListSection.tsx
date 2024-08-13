import React from "react";
import { fetchProducts, fetchTags, fetchTagsCount } from "@/lib/api";
import HomeProductList from "./HomeProductList";

type Props = {};

export default async function HomeProductListSection({}: Props) {
  const categories = await fetchTags();
  const products = await fetchProducts();
  const categoriesCount = await fetchTagsCount(
    categories.map((c: any) => c.node)
  );
  return (
    <HomeProductList
      categories={categories}
      products={products}
      categoriesCount={categoriesCount}
    />
  );
}
