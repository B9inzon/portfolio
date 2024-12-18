

import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Brandon Pinzon Front-end Dev",
  description: "Brandon Pinzons's portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className="font-sans antialiased bg-[#030f12]"
      >
        <Navigation/>
        {children}

      </body>
    </html>
  );
}
