import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import Layout from "./_components/Layout";

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
        <main className="min-h-screen relative w-full py-24">
          <Layout>{children}</Layout>
        </main>
        <Footer />
      </body>
    </html>
  );
}
