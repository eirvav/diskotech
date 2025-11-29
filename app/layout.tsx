import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
//import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Diskotech",
  description: "Diskotech",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased overflow-hidden h-screen w-screen`}
        style={{ fontFamily: 'var(--font-space-grotesk)' }}
      >
        {/* <Navbar /> */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
