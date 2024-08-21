import React from "react";
import { menuItems } from "../../data/menuItems";
import MenuCategory from "../../components/MenuCategory";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ferryhill.netlify.app"),
  title: "Our Menu | Ferryhill Fish & Chips",
  description:
    "Enjoy the best Fish & Chips in Manchester at Ferryhill Fish & Chips!",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://ferryhill.netlify.app/menu",
    siteName: "Ferryhill Fish & Chips",
    title: "Our Menu | Ferryhill Fish & Chips",
    description:
      "Enjoy the best Fish & Chips in Manchester at Ferryhill Fish & Chips!",
    images: [
      {
        url: "https://ferryhill.netlify.app/og/og_home.png",
        width: 1200,
        height: 630,
        alt: "ferryhill fish and chips logo",
      },
    ],
  },
};

const MenuPage = () => {
  return (
    <div className="w-full  text-left px-6  mx-auto bg-neutral-50">
      <div className="bg-neutral-50">
        <h1 className="text-8xl uppercase font-extrabold tracking-wide text-center bg-clip-text text-transparent my-24 bg-[url('../assets/images/fish-in-oil.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
          Our Menu
        </h1>
      </div>
      <div className="max-w-screen-xl mx-auto columns-1 md:columns-2 xl:columns-3 mt-8">
        {menuItems.map((category) => (
          <MenuCategory key={category.name} category={category} />
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
