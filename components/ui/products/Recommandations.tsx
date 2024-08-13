import React from "react";
import Image from "next/image";
import Link from "next/link";
import { fetchProducts } from "@/lib/api";
import ProductItem from "./ProductItem";
type Props = {
  product: any;
};

export default async function Recommandations({ product }: Props) {
  const products = (await fetchProducts()).filter(
    (productE: any) => productE.node.id !== product
  );
  return (
    <div className="grid grid-flow-col gap-x-4">
      {" "}
      {products.map((prod: any, index: number) => (
        <div className="w-[350px]">
          <ProductItem key={prod.node.id} product={prod} />
        </div>
      ))}
    </div>
  );
}
