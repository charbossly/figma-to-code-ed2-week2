"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

const Checkout = () => {
  const { cart, total } = useCart();
  return (
    <div className="py-[50px]">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      <div className="flex flex-col xl:flex-row space-y-8 md:space-y-0 md:space-x-8 gap-x-[112px]">
        {/* Left Column: Order Summary */}
        <div className="w-full xl:w-2/3">
          <h2 className="font-Archivo font-semibold font-t14 text-blackUi my-4">
            Your Order
          </h2>
          <p className="font-Archivo font-semibold font-t14 text-blackUi my-4">
            By placing your order, you agree to Ballamas{" "}
            <Link href={"#"} className={"underline text-blackUi"}>
              Privacy
            </Link>{" "}
            and
            <Link href={"#"} className={"underline text-blackUi"}>
              {" "}
              Policy
            </Link>
            .
          </p>
          <div className="py-4 space-y-1">
            {cart.map((item) => (
              <div
                key={item.node.id}
                className="flex items-center justify-between py-1 rounded-lg"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.node.featuredImage.url}
                    alt="T-Shirt"
                    width={72}
                    height={72}
                    className="object-cover rounded"
                  />
                  <div>
                    <h2 className="text-t14 font-Archivo font-semibold">
                      {item.node.title}
                    </h2>
                    <p className="text-darkGrayUi text-t12  font-medium font-Archivo">
                      Color: {item.node.variants.edges[0].node.color} - Size:{" "}
                      {item.node.variants.edges[0].node.size}
                    </p>
                  </div>
                </div>
                <span className="text-lg font-bold">
                  $
                  {item.node.variants.edges[0].node.price.amount *
                    item.quantity}
                </span>
              </div>
            ))}
            <div className="my-[24px]">
              <label
                htmlFor="discount-code"
                className="block font-medium text-t12 font-Archivo"
              >
                Discount Code
              </label>
              <div className="flex items-center space-x-2 my-2">
                <input
                  type="text"
                  id="discount-code"
                  placeholder="Add discount code"
                  className="w-1/2 p-2 border border-border border-darkGrayUi rounded-full"
                />
                <button className="bg-blackUi  text-white py-2 px-[28px] rounded-full">
                  Apply
                </button>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                New customer?{" "}
                <a href="#" className="underline">
                  Signup
                </a>{" "}
                to get better offer
              </p>
            </div>
          </div>

          {/* Order Total */}
          <div className="mt-8 space-y-2 ">
            <div className="flex justify-between text-darkGrayUi">
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <div className="flex justify-between text-darkGrayUi border-b-2 pb-2 ">
              <p>Discount</p>
              <p>$0</p>
            </div>
            <div className="flex justify-between font-bold">
              <p>Order total</p>
              <p>${total}</p>
            </div>
          </div>

          {/* Shipping Method */}
          <div className="mt-8">
            <h2 className="font-semibold text-t14 font-Archivo mb-4">
              Shipping method
            </h2>
            <div className="space-y-2">
              <label className="group flex items-center border-2 border-lightGrayUi rounded-full p-[12px]">
                <input
                  type="radio"
                  name="shipping"
                  className="form-radio text-blackUi h-6 w-6"
                />
                <span className="ml-3 flex flex-col">
                  Free shipping <br /> (7-10 business days) - $0
                </span>
              </label>
              <label className="group flex items-center border-2 border-lightGrayUi rounded-full p-[12px]">
                <input
                  type="radio"
                  name="shipping"
                  className="form-radio text-blackUi h-6 w-6"
                />
                <span className="ml-3 flex flex-col">
                  Free shipping <br /> (7-10 business days) - $0
                </span>
              </label>
              <label className="group flex items-center border-2 border-lightGrayUi rounded-full p-[12px]">
                <input
                  type="radio"
                  name="shipping"
                  className="form-radio text-blackUi h-6 w-6"
                />
                <span className="ml-3 flex flex-col">
                  Free shipping <br /> (7-10 business days) - $0
                </span>
              </label>
            </div>
          </div>
        </div>

        {/* Right Column: Payment Details */}
        <div className="w-full xl:w-1/3">
          <h2 className="text-t14 font-semibold font-Archivo mb-4 font-blackUi">
            Payment details
          </h2>
          <p className="text-t12 font-Archivo font-semibold text-darkGrayUi my-4">
            Complete your purchase by providing your payment details.
          </p>

          {/* Shipping Address */}
          <h3 className="text-t14 font-semibold font-Archivo mb-2 font-blackUi">
            Shipping address
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              {" "}
              <label
                htmlFor="discount-code"
                className="block font-medium text-t12 font-Archivo"
              >
                First name
              </label>
              <div className="flex items-center space-x-2 my-2">
                <input
                  type="text"
                  id="discount-code"
                  placeholder="Enter your first name"
                  className="w-full p-2 border border-border border-darkGrayUi rounded-full"
                />
              </div>
            </div>
            <div>
              {" "}
              <label
                htmlFor="discount-code"
                className="block font-medium text-t12 font-Archivo"
              >
                Last name
              </label>
              <div className="flex items-center space-x-2 my-2">
                <input
                  type="text"
                  id="discount-code"
                  placeholder="Enter your last name"
                  className="w-full p-2 border border-border border-darkGrayUi rounded-full"
                />
              </div>
            </div>
            <div>
              {" "}
              <label
                htmlFor="discount-code"
                className="block font-medium text-t12 font-Archivo"
              >
                Email address
              </label>
              <div className="flex items-center space-x-2 my-2">
                <input
                  type="text"
                  id="discount-code"
                  placeholder="Enter your email address"
                  className="w-full p-2 border border-border border-darkGrayUi rounded-full"
                />
              </div>
            </div>
            <div>
              {" "}
              <label
                htmlFor="discount-code"
                className="block font-medium text-t12 font-Archivo"
              >
                Phone number
              </label>
              <div className="flex items-center space-x-2 my-2">
                <input
                  type="text"
                  id="discount-code"
                  placeholder="Enter your phone number"
                  className="w-full p-2 border border-border border-darkGrayUi rounded-full"
                />
              </div>
            </div>
            <div>
              {" "}
              <label
                htmlFor="discount-code"
                className="block font-medium text-t12 font-Archivo"
              >
                Address
              </label>
              <div className="flex items-center space-x-2 my-2">
                <input
                  type="text"
                  id="discount-code"
                  placeholder="Enter your address"
                  className="w-full p-2 border border-border border-darkGrayUi rounded-full"
                />
              </div>
            </div>
            <div>
              {" "}
              <label
                htmlFor="discount-code"
                className="block font-medium text-t12 font-Archivo"
              >
                City
              </label>
              <div className="flex items-center space-x-2 my-2">
                <input
                  type="text"
                  id="discount-code"
                  placeholder="Enter your city"
                  className="w-full p-2 border border-border border-darkGrayUi rounded-full"
                />
              </div>
            </div>
            <div>
              {" "}
              <label
                htmlFor="discount-code"
                className="block font-medium text-t12 font-Archivo"
              >
                Select region
              </label>
              <div className="flex items-center space-x-2 my-2">
                <select className="w-full p-2 border border-border border-darkGrayUi rounded-full">
                  <option>Select region</option>
                  {/* Add options here */}
                </select>
              </div>
            </div>
            <div>
              {" "}
              <label
                htmlFor="discount-code"
                className="block font-medium text-t12 font-Archivo"
              >
                Postal code
              </label>
              <div className="flex items-center space-x-2 my-2">
                <input
                  type="text"
                  id="discount-code"
                  placeholder="Enter your postal code"
                  className="w-full p-2 border border-border border-darkGrayUi rounded-full"
                />
              </div>
            </div>
          </div>
          {/* Payment Method */}
          <h3 className="text-lg font-medium mt-8 mb-2">
            Select payment method
          </h3>
          <div className="space-y-2 flex flex-col md:flew-row space-x-2">
            <label className="group group-hover:border-blackUi w-1/2 flex flex-col  gap-y-2 border border-gray-300 p-2 rounded-lg">
              <input
                type="radio"
                name="payment"
                className="form-radio hidden"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span className="font-Archivo font-medium text-t12">
                Debit/Credit Card
              </span>
            </label>
            <label className="group group-hover:border-blackUi w-1/2 flex flex-col  gap-y-2 border border-gray-300 p-2 rounded-lg">
              <input
                type="radio"
                name="payment"
                className="form-radio hidden"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
              <span className="font-Archivo font-medium text-t12">
                bank account
              </span>
            </label>
          </div>

          <div className="mt-8">
            <div className="flex items-center space-x-2 my-2">
              <input
                type="text"
                id="discount-code"
                placeholder="Card number"
                className="w-full p-2 border border-border border-darkGrayUi rounded-full"
              />
            </div>
          </div>

          <div className="flex gap-x-2">
            <div className="flex items-center space-x-2 my-2">
              <input
                type="text"
                id="discount-code"
                placeholder="Card number"
                className="w-full p-2 border border-border border-darkGrayUi rounded-full"
              />
            </div>
            <div className="flex items-center space-x-2 my-2 ">
              <input
                type="text"
                id="discount-code"
                placeholder="Card number"
                className="w-full p-2 border border-border border-darkGrayUi rounded-full"
              />
            </div>
          </div>

          {/* Use Shipping Address */}
          <div className="mt-4">
            <label className="flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2">
                Use shipping address as billing address
              </span>
            </label>
          </div>

          {/* Pay Button */}
          <button className="mt-8 px-16 block  w-full md:w-auto mx-auto py-3 bg-black text-white rounded-full hover:bg-gray-800">
            <Link href="/order-finished"> Pay {total}$</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
