import React, { Suspense } from "react";
import Button from "./button";
import Image from "next/image";
import { fetchProductById } from "@/lib/api";
import Link from "next/link";
import { getColorsAndSizes } from "@/lib/products";
import ProductCard from "./product";
type Props = {
  params: {
    slug: string;
  };
};

export default async function page({ params }: Props) {
  const decodedSlug = decodeURIComponent(params.slug as string);
  const product = getColorsAndSizes(await fetchProductById(decodedSlug));
  return (
    <>
      <ProductCard product={product} />
    </>
  );
}
