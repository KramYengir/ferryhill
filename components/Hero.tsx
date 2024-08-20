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
          <Image src={heroImg} alt="welcome message for ferryhill" />
          <h1 className="sr-only">Welcome to our Ferryhill Fish and Chips</h1>
          <p className="sr-only">
            Traditional fish and chips in the heart of irlam, manchester
          </p>
        </div>
        <div className="flex gap-6 mt-12 mb-24">
          <Link href={"/menu"} className=" btn-primary">
            Our Menu
          </Link>
          <Link href={"/about"} className=" btn-secondary">
            About Us
          </Link>
        </div>
        <Link
          href="#nutshell"
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
