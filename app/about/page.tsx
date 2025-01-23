import React from "react";
import AboutSection from "@/components/AboutSection";
import { aboutInfo } from "../../data/aboutInfo";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ferryhill.com"),
  title: "Our Story | Ferryhill Fish & Chips",
  description:
    "Learn about the history and values behind Ferryhill Fish & Chips. Discover why we're renowned for the best Fish & Chips in Manchester!",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://ferryhill.com/about",
    siteName: "Ferryhill Fish & Chips",
    title: "Our Story | Ferryhill Fish & Chips",
    description:
      "Learn about the history and values behind Ferryhill Fish & Chips. Discover why we're renowned for the best Fish & Chips in Manchester!",
    images: [
      {
        url: "https://ferryhill.com/og/og_home.png",
        width: 1200,
        height: 630,
        alt: "Ferryhill Fish and Chips interior",
      },
    ],
  },
};

const AboutPage = () => {
  return (
    <div
      className="grid w-full bg-[url('../assets/images/FH_fish_meal.webp')] bg-cover bg-center bg-no-repeat bg-fixed"
      aria-labelledby="about-page-heading"
    >
      <div className="bg-neutral-50">
        <h1
          id="about-page-heading"
          className="text-8xl uppercase font-extrabold tracking-wide text-center bg-clip-text text-transparent my-24 bg-[url('../assets/images/fish-in-oil.webp')] bg-cover bg-center bg-no-repeat bg-fixed"
        >
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
