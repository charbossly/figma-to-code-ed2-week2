import Link from "next/link";
import React from "react";

type Props = {};

export default function Page({}: Props) {
  return (
    <div>
      page liste des produits
      <ul>
        <li>
          <Link href="/product-detail/1">Produit 1</Link>
        </li>
        <li>Produit 2</li>
        <li>Produit 3</li>
      </ul>
    </div>
  );
}
