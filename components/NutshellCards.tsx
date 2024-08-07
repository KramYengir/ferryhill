import { Award, Earth, Fish, Vegan } from "lucide-react";
import Link from "next/link";
import React from "react";

const NutshellCards = () => {
  return (
    <section>
      <h2 className="text-4xl  text-center text-fh-blue-800 mt-16 capitalize font-bold tracking-wide">
        Who Are We?
      </h2>
      <p className="text-center text-xl font-light">In a nutshell</p>
      <div className="flex flex-wrap justify-evenly gap-y-16 max-w-screen-2xl mx-auto py-32">
        <div className="flex flex-col items-center gap-8 px-6 py-8 rounded-md shadow-lg shadow-fh-blue-950/25">
          <Award size={48} className="text-fh-blue-700" />
          <p className="text-center max-w-60">
            Voted Best Fish & Chips in Salford in 2023, with consistent 5 star
            reviews on Google, we have a reputation for serving some of the best
            food in Manchester
          </p>
          <Link href={"#reviews"} className="btn-primary">
            Our Reviews
          </Link>
        </div>
        <div className="flex flex-col items-center gap-8 px-6 py-8 rounded-md shadow-lg shadow-fh-blue-950/25">
          <Fish size={48} className="text-fh-blue-700" />
          <p className="text-center max-w-60">
            Our fish is sourced from sustainable fishing grounds, delivered
            fresh every day, and cooked to perfection in 100% Uncontaminated
            Vegetable oil, filtered every day
          </p>
          <Link href={"/menu"} className="btn-primary">
            Our Menu
          </Link>
        </div>
        <div className="flex flex-col items-center gap-8 px-6 py-8 rounded-md shadow-lg shadow-fh-blue-950/25">
          <Earth size={48} className="text-fh-blue-700" />
          <p className="text-center max-w-60">
            All of our packaging & Utensils are 100% recyclable & Biodegradable,
            and we encourage our customers to reuse our bags whenever possible
          </p>
          <Link href={"/about"} className="btn-primary">
            About Us
          </Link>
        </div>
        <div className="flex flex-col items-center gap-8 px-6 py-8 rounded-md shadow-lg shadow-fh-blue-950/25">
          <Vegan size={48} className="text-fh-blue-700" />
          <p className="text-center max-w-60">
            With Gluten-Free options every Monday & Tuesday, and Vegan &
            Vegetarian options every day, we are proud to offer a wide range of
            choices to suit all dietary requirements
          </p>
          <Link href={"/contact"} className="btn-primary">
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NutshellCards;
