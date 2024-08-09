import Image from "next/image";
import Link from "next/link";
import Hero from "./_components/Hero";
import Collection from "./_components/Collection";
import ProductList from "./_components/ProductsList";
import Infos from "./_components/Infos";
export default function Home() {
  return (
    <>
      <Hero />
      <Infos />
      <ProductList />
      <Collection />
    </>
  );
}
