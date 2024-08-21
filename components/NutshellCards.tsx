import React from "react";
import { Award, Earth, Fish, Vegan } from "lucide-react";
import NutshellCard from "./NutshellCard";

const NutshellNutshellCards = () => {
  return (
    <section id="who_we_are" className="bg-neutral-50 pt-12">
      <h2 className="text-4xl lg:text-5xl text-center text-fh-blue-800 mt-16 capitalize font-bold tracking-wide">
        Who Are We?
      </h2>
      <p className="text-center text-xl font-light tracking-wide">
        In a nutshell
      </p>
      <div className="flex flex-wrap justify-evenly gap-y-16 max-w-screen-2xl mx-auto py-32">
        <NutshellCard
          icon={Award}
          heading="Award Winning"
          text="Voted Best Fish & Chips in Salford in 2023, with consistent 5 star reviews on Google, we have a reputation for serving some of the best food in Manchester"
          link="#reviews"
          linkText="Read Our Reviews"
          ariaLabel="Read our customer reviews to see why we were voted Best Fish & Chips in Salford 2023"
        />
        <NutshellCard
          icon={Fish}
          heading="Sustainable Sourcing"
          text="Our fish is sourced from sustainable fishing grounds, delivered fresh every day, and cooked to perfection in 100% uncontaminated vegetable oil, filtered every day"
          link="/menu"
          linkText="Explore Our Menu"
          ariaLabel="Explore our menu to see our fresh, sustainably-sourced fish and other offerings"
        />
        <NutshellCard
          icon={Earth}
          heading="Eco-Friendly"
          text="All of our packaging & utensils are 100% recyclable & biodegradable, and we encourage our customers to reuse our bags whenever possible"
          link="/about"
          linkText="Learn About Us"
          ariaLabel="Learn about our commitment to sustainability and eco-friendly practices"
        />
        <NutshellCard
          icon={Vegan}
          heading="Dietary Options"
          text="With gluten-free options every Monday & Tuesday, and vegan & vegetarian options every day, we are proud to offer a wide range of choices to suit all dietary requirements"
          link="/contact"
          linkText="Contact Us"
          ariaLabel="Contact us for more information about our gluten-free, vegan, and vegetarian options"
        />
      </div>
    </section>
  );
};

export default NutshellNutshellCards;
