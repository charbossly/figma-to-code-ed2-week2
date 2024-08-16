"use client";

import Product from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type ProductItemProps = {
  product: Product;
};

const ProductItem = ({ product }: ProductItemProps) => {
  const { addToCart } = useCart();

  return (
    <div key={product.node.id} className="group relative">
      <div className="rounded-3xl relative">
        <div className="hidden group-hover:block rounded-3xl absolute inset-0 bg-b-dark-gray bg-opacity-20" />
        <Image
          src={product.node.featuredImage.url}
          alt={product.node.title}
          width={400}
          height={410}
          className="rounded-3xl"
        />
        {product.node.availableForSale && (
          <div className="absolute left-5 top-4 text-t12 font-Archivo rounded-full bg-b-white text-b-black px-4 py-2">
            GET OFF 20%
          </div>
        )}

        <div className="hidden w-full  group-hover:flex justify-center absolute bottom-4 left-1/2 -translate-x-1/2  px-4 gap-x-4">
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-white text-b-black px-2 xl:px-4 py-2 rounded-full uppercase flex gap-x-1 items-center text-t14 font-Archivo font-bold"
          >
            <Image
              src={"/images/cartAdd.png"}
              alt="cart"
              width={20}
              height={10}
            />
            Add to Cart
          </button>
          <button className="flex-1 border border-b-black text-b-white  px-2 xl:px-4 py-2 rounded-full uppercase bg-transparent">
            <Link href={`/checkout`}>Buy</Link>
          </button>
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 uppercase mt-4">
        <Link
          href={`/product-detail/${encodeURIComponent(product.node.id)}`}
          className="font-semibold font-Archivo text-t30"
        >
          {product.node.title}
        </Link>
      </h3>
      <p className="text-b-dark-gray font-Archivo  font-semibold text-t28 my-0.5">
        $ {product.node.variants.edges[0].node.price.amount}
      </p>
    </div>
  );
};

export default ProductItem;
