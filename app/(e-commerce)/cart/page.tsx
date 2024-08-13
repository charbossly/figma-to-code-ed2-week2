"use client";
import React from "react";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

type Props = {};

export default function Page({}: Props) {
  const {
    cart,
    removeFromCart,
    incrementQuantity,
    decrementQuantity,
    clearCart,
    total,
  } = useCart();

  return (
    <div className=" flex flex-col items-center lg:flex-row  my-12 gap-[42px] lg:items-start">
      <div className="w-full lg:w-2/3">
        <div className="flex justify-between items-center my-5">
          <h2 className="text-t24 font-Chillax font-semibold text-blackUi">
            Cart({cart.length})
          </h2>
          <button
            onClick={clearCart}
            className="flex items-center justify-center text-t12 font-medium font-Archivo text-darkGrayUi bg-[#E5E5E5] p-2 rounded-full"
          >
            <Image
              src={"/images/trash.png"}
              alt="cart"
              width={14}
              height={14}
            />
            <span className="">Clear Cart</span>
          </button>
        </div>
        <table className="min-w-full mt-4">
          <thead>
            <tr className="bg-muted border-b border-border">
              <th className="p-2 text-left text-darkGrayUi text-t12 font-weight">
                Product
              </th>
              <th className="p-2 text-center text-darkGrayUi text-t12 font-weight">
                Quantity
              </th>
              <th className="p-2 text-center text-darkGrayUi text-t12 font-weight">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {cart.length > 0 ? (
              cart.map((item: any, index: number) => (
                <tr className="border-b border-border" key={index}>
                  {" "}
                  <td className="p-2 py-4">
                    <div className="flex flex-row gap-x-2 items-center relative">
                      <div className="w-full h-[72px] overflow-hidden relative">
                        <Image
                          src={item.node.featuredImage.url}
                          alt="image"
                          //check if mobile or desktop
                          //width={window.innerWidth > 768 ? 72 : 50}
                          //height={window.innerWidth > 768 ? 72 : 50}
                          sizes="100vw, 72px"
                          fill
                          className="rounded-lg object-cover object-center"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold font-Archivo text-t10 md:text-t14 text-blackUi">
                          {item.node.title}
                        </span>

                        <span className="font-medium font-Archivo text-t10 md:text-14 text-darkGrayUi">
                          {item.node.variants.edges[0].node.title}
                        </span>
                        <span className="font-bold font-Archivo text-t10 md:text-t14 text-blackUi">
                          ${item.node.variants.edges[0].node.price.amount}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="my-6 p-2 py-4 flex flex-row justify-center gap-x-1 items-center text-center ">
                    <div className="text-secondary-foreground p-[0.5rem] space-x-2 md:space-x-4 px-2  rounded-full bg-[#E5E5E5] bg-opacity-65">
                      <button
                        onClick={() => decrementQuantity(item.node.id)}
                        className="text-secondary-foreground p-2 py-0 rounded-full border border-blackUi"
                      >
                        -
                      </button>
                      <span className="mx-1 md:mx-2">{item.quantity}</span>
                      <button
                        onClick={() => incrementQuantity(item.node.id)}
                        className="text-secondary-foreground p-2  py-0 rounded-full border border-blackUi"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.node.id)}
                      className="md:p-2 rounded-full bg-[#E5E5E5] bg-opacity-65 flex items-center justify-center text-t12 font-medium font-Archivo text-darkGrayUi"
                    >
                      <Image
                        src={"/images/trash.png"}
                        alt="cart"
                        width={20}
                        height={20}
                      />
                    </button>
                  </td>
                  <td className="p-2 text-blackUi font-medium text-t12 font-Archivo text-center">
                    {item.node.variants.edges[0].node.price.amount *
                      item.quantity}
                    $
                  </td>
                </tr>
              ))
            ) : (
              <tr className="border-b border-border">
                <td className="">Pas de produit dans votre panier</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <div className="w-full md:w-1/2 lg:w-1/3 mt-4 md:mt-0 md:ml-4 bg-card p-4 border border-lightGrayUi rounded-xl">
        <h3 className="text-lg font-semibold">Order summary</h3>
        <div className="flex justify-between mt-2">
          <span className="text-t14 font-medium font-Archivo text-darkGrayUi">
            Subtotal
          </span>
          <span className="text-t14 font-medium font-Archivo  text-darkGrayUi">
            {total}
          </span>
        </div>
        <div className="flex justify-between mt-2">
          <span className="text-t14 font-medium font-Archivo  text-darkGrayUi">
            Discount
          </span>
          <span className="text-t14 font-medium font-Archivo  text-darkGrayUi">
            $0
          </span>
        </div>
        <div className="flex justify-between mt-4 font-semibold border-t border-lightGrayUi pt-3">
          <span className="text-t14 font-extrabold font-Archivo  text-blackUi">
            Order total
          </span>
          <span className="text-t14 font-extrabold font-Archivo  text-blackUi">
            {total}
          </span>
        </div>
        <button className="mt-4 w-full bg-blackUi text-whiteUi  text-primary-foreground p-2 rounded-full">
          <Link href={"/checkout"}>Checkout now</Link>
        </button>
      </div>
    </div>
  );
}
