import React, { Children } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="w-full max-w-[335px] md:max-w-[676px] xl:max-w-[1200px] mx-auto relative">
      {children}
    </div>
  );
}
