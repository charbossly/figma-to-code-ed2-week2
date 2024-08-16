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
  const decodedSlug = decodeURIComponent(params.slug as string);
  const product = getColorsAndSizes(await fetchProductById(decodedSlug));
  return (
    <>
      <ProductCard product={product} />
    </>
  );
}
