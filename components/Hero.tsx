import React from "react";
import Image from "next/image";
import heroImg from "../assets/images/hero-img.png";

const Hero = () => {
  return (
    <section className="bg-[url('../assets/images/fish-in-oil.png')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="min-h-[80vh] flex flex-col items-center text-center bg-neutral-950 bg-opacity-80 backdrop-blur-sm">
        <div className="relative w-[80vw] aspect-square sm:max-w-sm mt-32 ">
          <Image
            src={heroImg}
            fill
            sizes="100vh"
            alt="welcome message for ferryhill"
          />
        </div>
        <div className="flex gap-4">
          <button className=" btn-primary">Our Menu</button>
          <button className=" btn-secondary">About Us</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
