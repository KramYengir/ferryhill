import { StaticImageData } from "next/image";
import React from "react";
import Image from "next/image";

interface AboutSectionProps {
  heading: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
  color?: "stone" | "blue" | "white";
  reversed?: boolean;
}

const AboutSection = ({
  heading,
  text,
  image,
  imageAlt,
  color = "white", // Default value for color
  reversed,
}: AboutSectionProps) => {
  let bgClass;

  switch (color) {
    case "stone":
      bgClass =
        "bg-gradient-to-b sm:bg-gradient-to-r from-stone-900 to-stone-700/85  backdrop-blur-sm py-24";
      break;
    case "blue":
      bgClass =
        "bg-gradient-to-b sm:bg-gradient-to-r from-fh-blue-900 to-fh-blue-700/85 backdrop-blur-sm py-24";
      break;
    case "white":
    default:
      bgClass = "bg-white bg-opacity-95 py-24";
  }

  let headingColor = color === "white" ? "text-fh-blue-800" : "text-white";
  let textColor = color === "white" ? "text-fh-blue-900" : "text-white";

  return (
    <section className={bgClass}>
      <div
        className={
          `flex flex-wrap justify-evenly gap-4 max-w-screen-xl px-6 mx-auto ` +
          (reversed ? `flex-row-reverse` : "")
        }
      >
        <div className="flex flex-col gap-4 justify-center">
          <h2
            className={
              `text-left capitalize text-2xl tracking-wider font-bold mb-4 ` +
              headingColor
            }
          >
            {heading}
          </h2>
          <p className={`text-left text-lg max-w-sm ` + textColor}>{text}</p>
        </div>
        <div className="flex rounded-md overflow-hidden sm:max-w-sm">
          <Image src={image} alt={imageAlt} layout="responsive" />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
