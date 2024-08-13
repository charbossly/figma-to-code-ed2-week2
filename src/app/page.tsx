import Hero from "@/components/ui/Hero";
import Collection from "@/components/ui/Collection";
import HomeProductListSection from "@/components/ui/products/HomeProductListSection";
import Infos from "@/components/ui/Infos";

export default function Home() {
  return (
    <>
      <Hero />
      <Infos />
      <HomeProductListSection />
      <Collection />
    </>
  );
}
