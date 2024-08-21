import React from "react";
import AboutSection from "@/components/AboutSection";
import { aboutInfo } from "../../data/aboutInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ferryhill.netlify.app"),
  title: "About Us | Ferryhill Fish & Chips",
  description:
    "Enjoy the best Fish & Chips in Manchester at Ferryhill Fish & Chips!",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://ferryhill.netlify.app/about",
    siteName: "Ferryhill Fish & Chips",
    title: "About Us | Ferryhill Fish & Chips",
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

const AboutPage = () => {
  return (
    <div className="grid w-full bg-[url('../assets/images/FH_fish_meal.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="bg-neutral-50">
        <h1 className="text-8xl uppercase font-extrabold tracking-wide text-center bg-clip-text text-transparent my-24 bg-[url('../assets/images/fish-in-oil.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
          Our Story
        </h1>
      </div>

      {aboutInfo.map((info, index) => (
        <AboutSection
          key={index}
          heading={info.heading}
          text={info.text}
          image={info.image}
          imageAlt={info.imageAlt}
          color={info.color}
          reversed={info.reversed}
        />
      ))}
    </div>
  );
};

export default AboutPage;
