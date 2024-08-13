"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Layout from "@/components/layouts/Layout";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-b-black text-foreground py-[52px] px-[20px] md:px-[46px] xl:px-[120px]">
      <Layout>
        <div className="container mx-auto flex flex-col xl:flex-row gap-y-[20px] xl:gap-y-0 justify-between items-start">
          <div className="flex flex-col justify-center gap-y-[20px] xl:w-[36%]">
            <Image
              src="/images/logoFooter.png"
              alt="logo"
              width={158}
              height={50}
            />

            <p className="text-t12 md:text-t14 font-medium font-Archivo text-b-white">
              Subscribe to our newsletter for upcoming products and best
              discount for all items
            </p>
            <div className="flex mt-4 gap-x-3">
              <input
                type="email"
                placeholder="Your email"
                className="border rounded-full w-2/3 p-2 focus:outline-none focus:ring focus:ring-ring bg-transparent placeholder:text-b-white pl-3 text-b-white"
              />
              <button className="w-1/3 border  rounded-full px-4 bg-b-white">
                Subscribe
              </button>
            </div>
          </div>
          <div className="w-full md:w-auto grid  grid-cols-3 justify-between  gap-4 xl:w-[36%]">
            <div>
              <h2 className="font-medium text-t12 md:text-t16 font-Archivo mb-4 text-b-white">
                Product
              </h2>
              <ul className="space-y-1">
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/product/jacket">Jacket</Link>
                </li>
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/product/t-shirt">T-Shirt</Link>
                </li>
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/product/jacket">Jacket</Link>
                </li>
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/product/shoes">Shoes</Link>
                </li>
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/product/sunglasses">Sunglasses</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-medium text-t12 md:text-t16 font-Archivo mb-4 text-b-white">
                Categories
              </h2>
              <ul className="space-y-1">
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/category/man">Man</Link>
                </li>
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/category/woman">Woman</Link>
                </li>
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/category/kids">Kids</Link>
                </li>
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/category/gift">Gift</Link>
                </li>
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/category/new-arrival">New arrival</Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-medium text-t12 md:text-t16 font-Archivo mb-4 text-b-white">
                Our Social Media
              </h2>
              <ul className="space-y-1">
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/product/jacket">Instagram</Link>
                </li>
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/product/t-shirt">Facebook</Link>
                </li>
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/product/jacket">YouTube</Link>
                </li>
                <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                  <Link href="/product/shoes">X</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center text-b-dark-gray mt-6 text-t12 font-Archivo">
          © BALLAMAS 2023
        </div>
      </Layout>
    </footer>
  );
}
