import React from "react";
import Image from "next/image";
type Props = {};

export default function Page({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        src="/images/success.png"
        alt="Order finished"
        width={49}
        height={49}
      />
      <h3 className="text-t18 font-semibold mt-3 font-Archivo text-black">
        Thanks for your order !
      </h3>
      <p className="text-b-dark-gray text-t12 font-medium">
        The order confirmation has been sent to johndoe@gmail.com
      </p>
    </div>
  );
}
