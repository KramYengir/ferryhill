import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImg from "../assets/images/hero_img.svg";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="flex flex-col  bg-[url('../assets/images/fish_heater_portrait_2.webp')] md:bg-[url('../assets/images/fish_meal.webp')] bg-cover bg-center bg-no-repeat bg-fixed"
    >
      <div className="flex flex-col  items-center text-center py-24 ">
        <div className=" w-[80vw]  sm:max-w-sm">
          <h1>
            <Image
              src={heroImg}
              alt="Welcome to Ferryhill Fish and Chips in Irlam, Manchester"
            />
            <span className="sr-only">
              Welcome to Ferryhill Fish and Chips in Irlam, Manchester
            </span>
          </h1>
        </div>
        <div className="flex gap-6 mt-12 mb-24">
          <Link
            href="/menu"
            className="btn-primary"
            aria-label="View our Ferryhill Fish and Chips Menu"
          >
            Our Menu
          </Link>
          <Link
            href="/about"
            className="btn-secondary"
            aria-label="View our story at Ferryhill Fish and Chips"
          >
            Our Story
          </Link>
        </div>
        <Link
          href="#who_we_are"
          className="text-white hover:text-fh-gold-500"
          aria-label="Scroll down to the section below"
        >
          <ChevronDown size={48} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
