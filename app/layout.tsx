import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import Layout from "@/components/layouts/Layout";

export const metadata: Metadata = {
  title: "Ballamas",
  description: "Ballamas Shop Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"bg-whiteUi font-Archivo"}>
        <Header />
        <main className="min-h-screen relative w-full py-[40px]">
          <Layout>{children}</Layout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
