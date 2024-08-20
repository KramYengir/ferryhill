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
  title: "Ferryhill Fish & Chips | Irlam | Manchester",
  description:
    "Enjoy the best fish and chips in Manchester at Ferryhill Fish & Chips.",
  keywords: [
    "fish and chips",
    "takeaway",
    "Irlam",
    "Manchester",
    "Ferryhill Fish & Chips",
  ],
  authors: [{ name: "Ferryhill Fish & Chips" }],
  robots: "index, follow",
  openGraph: {
    title: "Ferryhill Fish & Chips | Irlam | Manchester",
    description:
      "Enjoy the best fish and chips in Manchester at Ferryhill Fish & Chips.",
    url: "https://ferryhill.netlify.app/",
    type: "website",
    images: [
      {
        url: "https://www.yoursite.com/og/og_home.png",
        width: 1200,
        height: 630,
        alt: "Ferryhill Fish & Chips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://ferryhill.netlify.app/",
    title: "Ferryhill Fish & Chips | Irlam | Manchester",
    description: "Best fish and chips in Manchester.",
    images: [
      {
        url: "https://www.yoursite.com/og/og_home.png",
        width: 1200,
        height: 630,
        alt: "Ferryhill Fish & Chips",
      },
    ],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#ffffff",
  icons: "/favicon.ico",
  manifest: "/site.webmanifest",
  applicationName: "Ferryhill Fish & Chips",
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
