import { Award, Earth, Fish, Vegan } from "lucide-react";
import Link from "next/link";
import React from "react";
import NutshellCard from "./NutshellCard";

const NutshellCards = () => {
  return (
    <section>
      <h2 className="text-4xl  text-center text-fh-blue-800 mt-16 capitalize font-bold tracking-wide">
        Who Are We?
      </h2>
      <p className="text-center text-xl font-light">In a nutshell</p>
      <div className="flex flex-wrap justify-evenly gap-y-16 max-w-screen-2xl mx-auto py-32">
        <NutshellCard
          icon={Award}
          text="Voted Best Fish & Chips in Salford in 2023, with consistent 5 star
            reviews on Google, we have a reputation for serving some of the best
            food in Manchester"
          link="#reviews"
          linkText="Our Reviews"
        />
        <NutshellCard
          icon={Fish}
          text="Our fish is sourced from sustainable fishing grounds, delivered
            fresh every day, and cooked to perfection in 100% Uncontaminated
            Vegetable oil, filtered every day"
          link="/menu"
          linkText="Our Menu"
        />
        <NutshellCard
          icon={Earth}
          text="All of our packaging & Utensils are 100% recyclable & Biodegradable,
            and we encourage our customers to reuse our bags whenever possible"
          link="/about"
          linkText="About Us"
        />
        <NutshellCard
          icon={Vegan}
          text="With Gluten-Free options every Monday & Tuesday, and Vegan &
            Vegetarian options every day, we are proud to offer a wide range of
            choices to suit all dietary requirements"
          link="/contact"
          linkText="Contact Us"
        />
      </div>
    </section>
  );
};

export default NutshellCards;
