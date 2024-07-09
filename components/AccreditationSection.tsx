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

const AccreditationSection = () => {
  return (
    <div className="bg-[url('../assets/images/FH_fish_heater.jpeg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="bg-neutral-950 bg-opacity-70 backdrop-blur-sm">
        <section className="flex flex-wrap  justify-evenly max-w-screen-xl text-center py-20 px-12 mx-auto ">
          <Card className="flex-1 grid items-end bg-transparent border-none">
            <CardContent>
              <Image
                src={nfffIMG}
                alt="logo of National Federation of Fish Fryers"
              ></Image>
            </CardContent>
            <CardFooter>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">
                proud member of the national federation of fish fryers
              </h3>
            </CardFooter>
          </Card>
          <Card className="flex-1 grid items-end bg-transparent border-none">
            <CardContent>
              <Image
                src={foodHygieneIMG}
                alt="logo of National Federation of Fish Fryers"
                className="my-8"
              ></Image>
            </CardContent>
            <CardFooter>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">
                proud member of the national federation of fish fryers
              </h3>
            </CardFooter>
          </Card>
          <Card className="flex-1 grid items-end bg-transparent border-none">
            <CardContent>
              <Image
                src={nfffIMG}
                alt="logo of National Federation of Fish Fryers"
              ></Image>
            </CardContent>
            <CardFooter>
              <h3 className="text-white text-2xl font-bold uppercase tracking-wide">
                proud member of the national federation of fish fryers
              </h3>
            </CardFooter>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default AccreditationSection;
