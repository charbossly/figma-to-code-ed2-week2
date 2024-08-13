import React from "react";
import Nav from "@/components/ui/Nav";
import NavBanner from "@/components/ui/NavBanner";
import Layout from "@/components/layouts/Layout";
type Props = {};

export default function Header({}: Props) {
  return (
    <>
      <NavBanner />
      <Layout>
        <Nav />
      </Layout>
    </>
  );
}
