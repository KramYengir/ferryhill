import type { Metadata } from "next";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ferryhill.netlify.app"),
  title: "Welcome to Ferryhill Fish & Chips | Best in Manchester",
  description:
    "Experience the finest Fish & Chips in Manchester at Ferryhill. Fresh, delicious, and made with love – visit us today!",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://ferryhill.netlify.app",
    siteName: "Ferryhill Fish & Chips",
    title: "Welcome to Ferryhill Fish & Chips | Best in Manchester",
    description:
      "Experience the finest Fish & Chips in Manchester at Ferryhill. Fresh, delicious, and made with love – visit us today!",
    images: [
      {
        url: "https://ferryhill.netlify.app/og/og_home.png",
        width: 1200,
        height: 630,
        alt: "Ferryhill Fish & Chips restaurant",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#ffc40d" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.className} bg-neutral-50 text-fh-blue-900`}>
        <Nav />
        <main className="flex flex-col min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
