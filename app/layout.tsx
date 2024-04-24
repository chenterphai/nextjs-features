import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

const inter = Poppins({ subsets: ["latin"], weight: ["500", "600", "700", "800", "900", "400", "300"] });

export const metadata: Metadata = {
  title: "NYT Technology",
  description: "IT Service Provider",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <body className={inter.className}>
        <Navbar >
          <Suspense fallback={<Loading />}></Suspense>
          {children}
        </Navbar>
      </body>
    </html>
  );
}
