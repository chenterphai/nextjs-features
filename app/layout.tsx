import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar >

          {children}
        </Navbar>
      </body>
    </html>
  );
}
