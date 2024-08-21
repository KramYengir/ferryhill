import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import nfffIMG from "../assets/images/NFFF_LOGO.png";
import foodHygieneIMG from "../assets/images/FH_food_hygiene.jpeg";
import ecoIMG from "../assets/images/FH_eco.png";

const AccreditationSection = () => {
  return (
    <section
      className="bg-[url('../assets/images/FH_fish_heater.jpeg')] bg-cover bg-center bg-fixed bg-no-repeat"
      aria-labelledby="accreditation-section-heading"
    >
      <div className="bg-gradient-to-b sm:bg-gradient-to-b from-neutral-950 to-neutral-700/80 backdrop-blur-sm">
        <h2 id="accreditation-section-heading" className="sr-only">
          Our Accreditations
        </h2>
        <div className="flex flex-wrap gap-16 justify-evenly max-w-screen-xl text-center py-28 px-12 mx-auto">
          <Card className="flex-1 flex flex-col items-center justify-evenly bg-neutral-950 bg-opacity-65 min-w-[300px] max-w-sm">
            <CardContent className="flex flex-col items-center max-w-xs">
              <Image
                src={nfffIMG}
                alt="Logo of the National Federation of Fish Fryers"
                width={150}
                height={150}
              />
            </CardContent>
            <CardFooter>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">
                Proud member of the{" "}
                <span className="text-fh-blue-500">
                  National Federation of Fish Fryers
                </span>
              </h3>
            </CardFooter>
          </Card>
          <Card className="flex-1 flex flex-col items-center justify-evenly bg-neutral-950 bg-opacity-65 min-w-[300px] max-w-sm">
            <CardContent className="flex flex-col items-center max-w-xs">
              <Image
                src={foodHygieneIMG}
                alt="5 star food hygiene rating sticker issued by the Food Standards Agency"
                className="my-8"
                width={150}
                height={150}
              />
            </CardContent>
            <CardFooter>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">
                Consistent{" "}
                <span className="text-fh-blue-500">
                  Perfect Food Hygiene Rating
                </span>{" "}
                Year After Year
              </h3>
            </CardFooter>
          </Card>
          <Card className="flex-1 flex flex-col items-center justify-evenly bg-neutral-950 bg-opacity-65 min-w-[300px] max-w-sm">
            <CardContent className="flex flex-col items-center max-w-xs">
              <Image
                src={ecoIMG}
                alt="Eco-friendly compostable packaging symbol"
                width={150}
                height={150}
              />
            </CardContent>
            <CardFooter>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">
                We Use{" "}
                <span className="text-fh-blue-500">
                  Eco-Friendly Compostable
                </span>{" "}
                Packaging
              </h3>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
