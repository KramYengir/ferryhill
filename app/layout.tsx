import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
// const merriweather = Merriweather({
//   weight: ["300", "400", "700"],
//   subsets: ["latin"],
//   variable: "--font-merriweather",
// });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-50 text-fh-blue-900`}>
        <Nav />
        <main className="flex flex-col min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
