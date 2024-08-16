import React, { Children } from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="w-full max-w-screen-b-sm md:max-w-screen-b-md xl:max-w-screen-b-xl mx-auto relative overflow-hidden">
      {children}
    </div>
  );
}
