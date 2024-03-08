import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Footer from "./_components/Footer";

const poppins = Poppins({
  weight: ['300','400','500','600','700','800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Food delivery app",
  description: "Order Food Online",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="container">
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
