import React from "react";
import Image from "next/image";
import fishIMG from "../assets/images/fish_chips.png";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const ReviewsSection = () => {
  return (
    <div className="bg-[url('../assets/images/FH_fish-meal.jpeg')] bg-cover bg-center bg-fixed bg-no-repeat">
      <div className="bg-fh-blue-700 bg-opacity-85 ">
        <section className="flex flex-col justify-center items-center max-w-screen-xl 2xl:max-w-screen-2xl py-20 px-12 mx-auto ">
          <h2 className="text-4xl text-balance text-center text-white my-4 uppercase font-bold tracking-wide">
            What our customers have to say
          </h2>
          <p className="text-balance text-center text-white italic mb-12 ">
            With over 300 reviews on Google, we know what our customers like
          </p>
          <Carousel className="w-full md:max-w-screen-lg 2xl:max-w-screen-xl my-6">
            <CarouselContent className="flex md:px-4 md:gap-4">
              <CarouselItem className="flex md:basis-1/2 2xl:basis-1/3 ">
                <Card className=" flex flex-col justify-center p-6 leading-6 bg-fh-blue-950 bg-opacity-25  text-white border-none">
                  <CardContent>
                    <p>
                      Treated ourselves to fish and chips, and we were not
                      disappointed. Met by friendly staff who had lovely smiles
                      on their faces as usual. The fish batter was crispy, the
                      chips are still the best in Irlam, crispy batter from
                      onion rings and a generous portion of scraps. Really
                      enjoyed this. Best chippy around 👍
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="italic">- Tracy Townson</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="flex md:basis-1/2 2xl:basis-1/3 ">
                <Card className="flex flex-col justify-center p-6 leading-6 bg-fh-blue-950 bg-opacity-25  text-white border-none">
                  <CardContent>
                    <p>
                      Best place in Salford to get fresh fish and homemade chips
                      as well as many more delicious things! Chris and his staff
                      are very helpful and polite and the shop is really
                      clean!!Definitely recommend to everyone!!!🤩🙌
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="italic">- Nagia Ropotia</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="flex md:basis-1/2 2xl:basis-1/3 ">
                <Card className="flex flex-col justify-center p-6 leading-6 bg-fh-blue-950 bg-opacity-25  text-white border-none">
                  <CardContent>
                    <p>
                      Every time I come in this place I am served with well
                      cooked and tasty fish. The place is always very clean and
                      tidy and the personnel quite friendly with the customers.
                      Recommended
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="italic">- Alexandros Oustamanolakis</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="flex md:basis-1/2 2xl:basis-1/3 ">
                <Card className="flex flex-col justify-center p-6 leading-6 bg-fh-blue-950 bg-opacity-25  text-white border-none">
                  <CardContent>
                    <p>
                      Food is absolutely delicious. There are lots of choices. I
                      had cod chips and mushy peas and ate every bit. No
                      complaints at all. It is rare I think for a chippy to cook
                      good fish and chips. They are usually only good at one but
                      the Ferryhill is good at both.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="italic">- Veronica Witchywoo</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="flex md:basis-1/2 2xl:basis-1/3 ">
                <Card className="flex flex-col justify-center p-6 leading-6 bg-fh-blue-950 bg-opacity-25  text-white border-none">
                  <CardContent>
                    <p>
                      Lovely fish and chips! A clean, well organised shop and
                      the girl serving was super friendly too. We&apos;ll be
                      making this our regular on the back of this experience 🙂
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="italic">- Nick Kendal</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer m-2" />
            <CarouselNext className="cursor-pointer m-2" />
          </Carousel>
        </section>
      </div>
    </div>
  );
};

export default ReviewsSection;
