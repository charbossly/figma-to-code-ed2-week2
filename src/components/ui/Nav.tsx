"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { navLinksLeft, navLinksRight, mobileNavLinks } from "@/constants";
import { useCart } from "@/context/CartContext";

type Props = {};

export default function Nav({}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCart();

  return (
    <div className="xl:block">
      <nav className="flex border-b border-b-b-light-gray xl:border-none justify-between items-center py-[26px] mx-auto xl:gap-x-24">
        <div className="flex xl:hidden items-center">
          <Image
            className="cursor-pointer"
            src={
              !isOpen ? "/images/hambugerMenu.png" : "/images/hambugerClose.png"
            }
            alt="menu"
            width={42}
            height={24}
            onClick={() => setIsOpen(!isOpen)}
          />
        </div>
        <div className="hidden xl:flex space-x-[18px]">
          {navLinksLeft.map(
            (link: { name: string; href: string }, index: number) => (
              <Link
                key={index}
                href={link.href}
                className="text-t16 font-Archivo  font-normal text-b-black"
              >
                {link.name}
              </Link>
            )
          )}
        </div>
        <h1 className="uppercase text-[#4a4a4a00] text-t30 font-Chillax  cursor-pointer font-semibold text-customStroke">
          <Link href="/">Ballamas</Link>
        </h1>
        <div className="hidden xl:flex items-center space-x-6">
          {navLinksRight.map(
            (link: { name: string; href: string }, index: number) => (
              <Link
                key={index}
                href={link.href}
                className="text-t16 font-Archivo font-normal text-b-black"
              >
                {link.name}
              </Link>
            )
          )}
          <Link
            href="#"
            className="text-t16 font-Archivo font-normal text-b-black flex  items-center justify-center space-x-1"
          >
            <Image
              src="/images/profil.png"
              alt="account-icon"
              width={16}
              height={8}
            />
            <span>Account</span>
          </Link>
          <Link
            href="#"
            className="text-t16 font-Archivo font-normal text-b-black"
          >
            Cart({cart.length})
          </Link>
          <Link
            href={"#"}
            className="text-t16 font-Archivo font-normal text-b-black"
          >
            <Image
              src="/images/search.png"
              alt="search-icon"
              width={20}
              height={20}
            />
          </Link>
        </div>
        <div className="flex xl:hidden items-center gap-x-3">
          <button className="text-t16 font-Archivo font-normal text-b-black">
            <Image
              src="/images/search.png"
              alt="search-icon"
              width={20}
              height={20}
            />
          </button>
          <button className="text-t16 font-Archivo font-normal text-b-black relative ">
            <Link href={"/cart"} className="flex flex-row">
              <Image
                src="/images/cart.png"
                alt="cart-icon"
                width={20}
                height={20}
              />
              {cart.length > 0 && (
                <span className="text-b-black text-sm">({cart.length})</span>
              )}
            </Link>
          </button>
        </div>
      </nav>

      {isOpen && (
        <div className="pb-[200px] xl:pb-0 flex flex-col items-center gap-y-[18px] py-8">
          {[...navLinksLeft, ...navLinksRight].map(
            (link: { name: string; href: string }, index: number) => (
              <Link
                key={index}
                href={link.href}
                className="text-t18 font-Archivo  font-normal text-b-black"
              >
                {link.name}
              </Link>
            )
          )}

          <Link
            href="#"
            className="text-t18 font-Archivo font-normal text-b-black flex  items-center justify-center space-x-1"
          >
            <Image
              src="/images/profil.png"
              alt="account-icon"
              width={16}
              height={8}
            />
            <span>Account</span>
          </Link>
          {mobileNavLinks.map(
            (link: { name: string; href: string }, index: number) => (
              <Link
                key={index}
                href={link.href}
                className={`text-t18 font-Archivo font-normal text-b-black flex  items-center justify-center space-x-1 ${
                  index == 0 ? "mt-4" : "mt-0"
                }`}
              >
                {link.name}
              </Link>
            )
          )}
        </div>
      )}
    </div>
  );
}
