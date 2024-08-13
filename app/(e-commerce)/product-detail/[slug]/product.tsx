"use client";
import React from "react";
import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { colorName } from "@/lib/products";
import Recommandations from "@/components/ui/products/Recommandations";

type Props = {
  product: any;
};

export default function product({ product: product }: Props) {
  const [productImage, setProductImage] = React.useState(
    product?.featuredImage?.url
  );
  const [color, setColor] = React.useState(
    product?.variants.edges[0].node?.color || "Non definie "
  );
  const [productSelected, setProductSelected] = React.useState(
    product?.variants.edges[0].node.title
  );

  const changeColor = (color: any) => {
    setColor(color?.color);
    setProductImage(color?.featuredImage?.url || color?.image?.url);
  };

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/*verifier si object a des valeurs ou pas*/}
      {product !== null ? (
        <>
          <div className="flex flex-col items-center justify-center gap-y-6 xl:gap-y-0 xl:flex-row">
            {/* Product Image */}
            <div className="w-full xl:w-1/2  h-[600px] relative">
              <Image
                fill
                src={productImage}
                alt="Product"
                className="xl:block rounded-3xl"
                sizes="100vw"
                objectFit="cover"
              />
            </div>

            {/* Product Details */}
            <div className="w-full xl:w-1/2 pl-8 space-y-[18px]">
              <h1 className="text-t30 md:text-t42 font-Chillax font-semibold text-blackUi">
                {product?.title ?? "Product"}
              </h1>
              <p className="text-t24 md:text-t36 mt-2 font-Archivo font-semibold">
                CAD $80
              </p>
              <p className="text-lg mt-2 text-t24 md:text-t30 font-medium">
                Color: {color !== "Non definie " ? colorName(color) : color}
              </p>

              {/* Colors */}
              <div className="flex mt-4 space-x-2">
                {product.variants.edges.map((variant: any) => {
                  return variant.node.color ? (
                    <div
                      key={variant.node.title}
                      onClick={() => changeColor(variant.node)}
                      style={{ backgroundColor: variant.node.color }}
                      className={`w-8 h-8 rounded-full cursor-pointer border ${
                        color === variant.node.color
                          ? "border-black"
                          : "border-gray-30"
                      }`}
                    ></div>
                  ) : (
                    <></>
                  );
                })}
              </div>

              {/* Sizes */}
              <p className="text-lg mt-1 text-t24 md:text-t30 font-medium">
                Size:
              </p>

              <div className="flex mt-6 space-x-2">
                {product?.variants?.edges?.map((variant: any) => {
                  return variant.node.size ? (
                    <button
                      key={variant.node.title}
                      className={`text-t20 md:text-t24 font-medium font-Archivo px-[15px] py-[7px] md:px-[30px] md:py-[10px] border border-gray-300 rounded-full hover:bg-gray-100`}
                    >
                      {variant.node.size}
                    </button>
                  ) : (
                    <></>
                  );
                })}
              </div>

              {/* Action Buttons */}
              <div className="flex mt-6 space-x-4 my-2 ">
                <button className="flex-1 px-4 py-[10px] md:py-[24px] bg-black text-white rounded-full hover:bg-gray-800">
                  {/* <Link href={`/product-detail/${encodeURIComponent(product.id)}`}>
                    In Stock
                  </Link> */}
                  <Link href={`/checkout`}>Buy</Link>
                </button>
                <button className="flex-1 px-4 py-[10px] md:py-[24px]  border border-gray-300 rounded-full hover:bg-gray-100">
                  Add to Cart
                </button>
              </div>

              {/* Description */}
              <p className="text-lg mt-2 text-t24 md:text-t30 font-medium">
                Description
              </p>

              <p className="mt-8 text-darkGrayUi text-t14 md:text-t18  font-Archivo">
                {product?.description ??
                  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis nisi vitae elit tristique pellentesque. Maecenas lobortis aliquam magna. Curabitur tempus mauris at magna feugiat, et dapibus libero tincidunt."}
              </p>
            </div>
          </div>

          {/* Similar Products */}
          <div className="mt-16">
            <h2 className="text-t30 font-Chillax font-semibold">
              You may also like
            </h2>
            <div className="overflow-x-auto whitespace-nowrap scroll-smooth scrollbar-none ">
              <Recommandations product={product.id} />
            </div>
          </div>
        </>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p>Product not found</p>
        </div>
      )}{" "}
    </Suspense>
  );
}
