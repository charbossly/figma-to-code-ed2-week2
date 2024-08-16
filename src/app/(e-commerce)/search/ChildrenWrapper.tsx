"use client";

import { useSearchParams } from "next/navigation";
import { Fragment } from "react";
import { Suspense } from "react";
// Ensure children are re-rendered when the search query changes
export default function ChildrenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Fragment key={searchParams.get("q")}>{children}</Fragment>
    </Suspense>
  );
}
