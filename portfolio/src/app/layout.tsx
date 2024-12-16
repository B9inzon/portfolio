import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/footer/Footer";
import Navigation from "@/components/navigation/Navigation";





export const metadata: Metadata = {
  title: "Brandon Pinzon Frontend Dev",
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
        <Footer/>

      </body>
    </html>
  );
}
