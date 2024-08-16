import React from "react";

type Props = {};

export default function notFound({}: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-t36 font-semibold">404</h1>
      <p className="text-t14 font-medium">Page not found</p>
    </div>
  );
}
