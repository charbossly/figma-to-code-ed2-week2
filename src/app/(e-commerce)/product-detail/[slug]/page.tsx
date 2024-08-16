import React, { Suspense } from "react";
import { fetchProductById } from "@/lib/api";
import { getColorsAndSizes } from "@/lib/products";
import ProductCard from "./product";
type Props = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: Props) {
  console.log(params);
  const decodedSlug = decodeURIComponent(params.slug as string);
  const a = await fetchProductById(decodedSlug);
  console.log(a);
  const product = getColorsAndSizes(await fetchProductById(decodedSlug));
  console.log(product);
  return (
    <>
      <ProductCard product={product} />
    </>
  );
}
