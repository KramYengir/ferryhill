import React from "react";
import paintingIMG from "@/assets/images/painting.jpg";
import christosIMG from "@/assets/images/FH_christos.jpg";
import mealImg from "@/assets/images/FH_fish_meal.jpeg";
import communityImg from "@/assets/images/FH_christos_pitchside.jpg";
import AboutSection from "@/components/AboutSection";
import { StaticImageData } from "next/image";

// Define the type for the aboutInfo array items
interface AboutInfoItem {
  heading: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
  color: "stone" | "blue" | "white";
  reversed: boolean;
}

const aboutInfo: AboutInfoItem[] = [
  {
    heading: "our beginning...",
    text: "Ferryhill Fish and Chips, a family-run establishment since 2013, leverages over 30 years of industry expertise. Our commitment is to bring a blend of knowledge and passion, ensuring our customers experience top-notch food and warm, friendly service.",
    image: paintingIMG,
    imageAlt: "painting of ferryhil fish and chips",
    color: "stone",
    reversed: false,
  },
  {
    heading: "Our Standards...",
    text: "Under the stewardship of Christos since 2020, our shop has flourished, garnering consistent 5-star reviews on Google. Our menu continues to evolve, and we are proud to have been voted the best chippy in Manchester by readers of salfordnow.co.uk in 2023.",
    image: christosIMG,
    imageAlt: "Christos, owner of ferryhill",
    color: "white",
    reversed: true,
  },
  {
    heading: "our food...",
    text: "Our ever-expanding menu continues to add a diverse selection of vegan, vegetarian, and gluten-free options, catering to a wide range of dietary preferences. Crafted with care and the finest ingredients, our dishes maintain the high standards our customers have come to expect.",
    image: mealImg,
    imageAlt: "fish and chips on some white paper",
    color: "blue",
    reversed: false,
  },
  {
    heading: "our community...",
    text: "We're deeply rooted in our local community, actively supporting charitable causes through fundraisers, participating in local events, and proudly backing our local football team.",
    image: communityImg,
    imageAlt:
      "ferryhill owner Christos kneeling beside a pitchside ad board for his business",
    color: "white",
    reversed: true,
  },
];

const AboutPage = () => {
  return (
    <div className="grid w-full bg-[url('../assets/images/FH_fish_meal.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="bg-white">
        <h1 className="text-8xl uppercase font-extrabold tracking-wide text-center bg-clip-text text-transparent my-24 bg-[url('../assets/images/fish-in-oil.png')] bg-cover bg-center bg-no-repeat bg-fixed">
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
