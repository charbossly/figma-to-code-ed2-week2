import React from "react";
import Link from "next/link";
import Layout from "@/components/layouts/Layout";
import { FOOTERLINKS } from "@/constants";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-b-black py-12 px-5 md:px-11 xl:px-30">
      <Layout>
        <div className="container mx-auto flex flex-col xl:flex-row gap-y-5 xl:gap-y-0 justify-between items-start">
          <div className="flex flex-col justify-center gap-y-5 xl:w-1/3">
            <Link href="/">
              <h1 className="uppercase text-b-stroke text-t30 font-Chillax  cursor-pointer font-semibold text-customStroke">
                Ballamas
              </h1>
            </Link>

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
          <div className="w-full md:w-auto grid  grid-cols-3 justify-between  gap-4 xl:w-1/3">
            {FOOTERLINKS.map((item, index) => (
              <div key={index}>
                <h2 className="font-medium text-t12 md:text-t16 font-Archivo mb-4 text-b-white">
                  {item.title}
                </h2>
                <ul className="space-y-1">
                  {item.links.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="hover:underline"
                    >
                      {" "}
                      <li className="text-t10 md:text-t14 text-b-gray font-Archivo">
                        {link.name}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center text-b-dark-gray mt-6 text-t12 font-Archivo">
          © BALLAMAS 2023 design by{" "}
          <Link href={"https://www.linkedin.com/in/waris-akinocho/"}>
            {"waris"}
          </Link>{" "}
          - Made by{" "}
          <Link
            href={
              "https://www.linkedin.com/in/mahoudjro-charbel-assogba-5734a6206/"
            }
          >
            {"charbel"}
          </Link>
        </div>
      </Layout>
    </footer>
  );
}
