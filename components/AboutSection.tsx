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
        "bg-gradient-to-b sm:bg-gradient-to-r to-stone-900 from-stone-700/95 backdrop-blur-sm py-24";
      break;
    case "blue":
      bgClass =
        "bg-gradient-to-b sm:bg-gradient-to-r from-fh-blue-900 to-fh-blue-700/90 backdrop-blur-sm py-24";
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
          `flex flex-wrap justify-evenly gap-12 max-w-screen-xl px-6 mx-auto ` +
          (reversed ? `flex-row-reverse` : "")
        }
        aria-labelledby={`section-heading-${heading
          .replace(/\s+/g, "-")
          .toLowerCase()}`}
      >
        <div className="flex flex-col gap-4 justify-center">
          <h2
            id={`section-heading-${heading.replace(/\s+/g, "-").toLowerCase()}`}
            className={
              `text-left capitalize text-4xl tracking-widest font-extrabold mb-4 ` +
              headingColor
            }
          >
            {heading}
          </h2>
          <p className={`text-left text-lg max-w-sm ` + textColor}>{text}</p>
        </div>
        <div className="flex rounded-lg overflow-hidden w-full sm:max-w-md">
          <Image src={image} alt={imageAlt} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
