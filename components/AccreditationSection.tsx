import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import nfffIMG from "../assets/images/NFFF_LOGO.png";
import foodHygieneIMG from "../assets/images/FH_food_hygiene.jpeg";
import ecoIMG from "../assets/images/FH_eco.png";

const AccreditationSection = () => {
  return (
    <div className="bg-[url('../assets/images/FH_fish_heater.jpeg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="bg-neutral-950 bg-opacity-70 backdrop-blur-sm">
        <section className="flex flex-wrap gap-16  justify-evenly max-w-screen-xl text-center py-20 px-12 mx-auto ">
          <Card className="flex-1 grid justify-items-center items-end bg-neutral-950 bg-opacity-65 min-w-[300px] max-w-sm">
            <CardContent className="flex flex-col items-center max-w-xs">
              <Image
                src={nfffIMG}
                alt="logo of National Federation of Fish Fryers"
              ></Image>
            </CardContent>
            <CardFooter>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">
                proud member of the{" "}
                <span className="text-fh-blue-500">
                  national federation of fish fryers
                </span>
              </h3>
            </CardFooter>
          </Card>
          <Card className="flex-1 grid justify-items-center  items-end bg-neutral-950 bg-opacity-65 min-w-[300px] max-w-sm">
            <CardContent className="flex flex-col items-center max-w-xs">
              <Image
                src={foodHygieneIMG}
                alt="a 5 star food hygiene rating sticker issues by the food standard agency"
                className="my-8"
              ></Image>
            </CardContent>
            <CardFooter>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">
                Consistant{" "}
                <span className="text-fh-blue-500">
                  perfect Food Hygiene Rating
                </span>{" "}
                year after year
              </h3>
            </CardFooter>
          </Card>
          <Card className="flex-1 grid justify-items-center  items-end bg-neutral-950 bg-opacity-65 min-w-[300px] max-w-sm">
            <CardContent className="flex flex-col items-center max-w-xs">
              <Image src={ecoIMG} alt="eco friendly tree "></Image>
            </CardContent>
            <CardFooter>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">
                we use{" "}
                <span className="text-fh-blue-500">
                  eco friendly compostable
                </span>{" "}
                packaging
              </h3>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AccreditationSection;
