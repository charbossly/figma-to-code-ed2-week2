"use client";

import React, { Children, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAVLINKSLEFT, NAVLINKSRIGHT, MOBILENAVLINKS } from "@/constants";
import { useCart } from "@/context/CartContext";

type Props = {};

export default function Nav({}: Props) {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="xl:block">
      <nav className="flex border-b border-b-b-light-gray xl:border-none justify-between items-center py-6.5 mx-auto xl:gap-x-24">
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
        <div className="hidden xl:flex space-x-4.5">
          {NAVLINKSLEFT.map(
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
        <h1 className="uppercase text-b-stroke text-t30 font-Chillax  cursor-pointer font-semibold text-customStroke">
          <Link href="/">Ballamas</Link>
        </h1>
        <div className="hidden xl:flex items-center space-x-6">
          {NAVLINKSRIGHT.map(
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
            href="/cart"
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
        <div className="pb-48 xl:pb-0 flex flex-col items-center gap-y-4.5 py-8">
          {[...NAVLINKSLEFT, ...NAVLINKSRIGHT].map(
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
          {MOBILENAVLINKS.map(
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
