import React from "react";
import Link from "next/link";
import Image from "next/image";
import heroImg from "../assets/images/hero-img.png";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-[url('../assets/images/fish-in-oil.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="relative min-h-[80vh] flex flex-col items-center text-center bg-neutral-950 bg-opacity-80 backdrop-blur-sm">
        <div className="relative w-[90vw] aspect-square sm:max-w-sm mt-24 ">
          <Image
            src={heroImg}
            fill
            sizes="100vh"
            alt="welcome message for ferryhill"
          />
        </div>
        <div className="flex gap-6">
          <Link href={"/menu"} className=" btn-primary">
            Our Menu
          </Link>
          <Link href={"/about"} className=" btn-secondary">
            About Us
          </Link>
        </div>
        <Link
          href="#reputation"
          className="absolute bottom-4 text-white hover:text-fh-gold-500"
          aria-roledescription="scroll down to the section below"
        >
          <ChevronDown size={48} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
