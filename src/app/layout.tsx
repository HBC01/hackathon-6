"use client";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <html lang="en">
      <head>
        <title>E - Commerce Website</title>
      </head>
      <body>
        {pathname === "/" ? <Header bgColor="rgba(251, 235, 181, 1)" /> : <Header />}  
        {children}
        <Footer />
      </body>
    </html>
  );
}