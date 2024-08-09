import React from "react";
import Nav from "./Nav";
import NavBanner from "./NavBanner";
import Layout from "./Layout";
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
