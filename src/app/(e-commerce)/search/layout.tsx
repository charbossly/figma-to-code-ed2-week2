import React from "react";
import { fetchTags, fetchTagsCount } from "@/lib/api";
import FilterBar from "@/components/ui/products/FilterBar";
import ChildrenWrapper from "./ChildrenWrapper";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
};

export default async function SearchLayout({ children }: Props) {
  const categories = await fetchTags();
  const categoriesCount = await fetchTagsCount(
    categories.map((c: any) => c.node)
  );
  return (
    <>
      <FilterBar categories={categories} categoriesCount={categoriesCount} />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </>
  );
}
