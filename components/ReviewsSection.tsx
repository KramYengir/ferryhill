import React from "react";
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
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const ReviewsSection = () => {
  return (
    <section
      id="reviews"
      className="bg-[url('../assets/images/FH_fish_meal.jpeg')] bg-cover bg-center bg-fixed bg-no-repeat"
    >
      <div className="bg-fh-blue-700 bg-opacity-85 ">
        <div className="flex flex-col justify-center items-center max-w-screen-xl 2xl:max-w-screen-2xl py-20 px-12 mx-auto ">
          <h2 className="text-4xl text-balance text-center text-white my-4 uppercase font-bold tracking-wide">
            What our customers have to say
          </h2>
          <p className="text-balance text-center text-white italic mb-12 ">
            With over 300 reviews on Google, we know what our customers like
          </p>
          <Carousel
            className="w-full  2xl:max-w-screen-xl my-6"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="flex  md:px-4 md:gap-4">
              <CarouselItem className="flex justify-center md:basis-1/2 xl:basis-1/3 ">
                <Card className=" flex flex-col justify-center p-6 leading-6 bg-fh-blue-950 bg-opacity-45  text-white border-none">
                  <CardContent>
                    <p className="italic max-w-sm">
                      Met by friendly staff who had lovely smiles on their faces
                      as usual. The fish batter was crispy, the chips are still
                      the best in Irlam, crispy batter from onion rings and a
                      generous portion of scraps. Really enjoyed this. Best
                      chippy around 👍
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="font-extralight">- Tracy Townson</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="flex justify-center md:basis-1/2 xl:basis-1/3 ">
                <Card className="flex flex-col justify-center p-6 leading-6 bg-fh-blue-950 bg-opacity-45  text-white border-none">
                  <CardContent>
                    <p className="italic max-w-sm">
                      Heard about this place for a while now so gave it a go and
                      wasn&apos;t disappointed , excellent staff and friendly,
                      excellent service and fantastic food , definitely worth a
                      revisit.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="font-extralight">- Andrew Brooks</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="flex justify-center md:basis-1/2 xl:basis-1/3 ">
                <Card className="flex flex-col justify-center p-6 leading-6 bg-fh-blue-950 bg-opacity-45  text-white border-none">
                  <CardContent>
                    <p className="italic max-w-sm">
                      Every time I come in this place I am served with well
                      cooked and tasty fish. The place is always very clean and
                      tidy and the personnel quite friendly with the customers.
                      Recommended
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="font-extralight">
                      - Alexandros Oustamanolakis
                    </p>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="flex justify-center md:basis-1/2 xl:basis-1/3 ">
                <Card className="flex flex-col justify-center p-6 leading-6 bg-fh-blue-950 bg-opacity-45  text-white border-none">
                  <CardContent>
                    <p className="italic max-w-sm">
                      Food is absolutely delicious. There are lots of choices. I
                      had cod chips and mushy peas and ate every bit. No
                      complaints at all. It is rare I think for a chippy to cook
                      good fish and chips. They are usually only good at one but
                      the Ferryhill is good at both.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="font-extralight">- Veronica Witchywoo</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
              <CarouselItem className="flex justify-center md:basis-1/2 xl:basis-1/3 ">
                <Card className="flex flex-col justify-center p-6 leading-6 bg-fh-blue-950 bg-opacity-45  text-white border-none">
                  <CardContent>
                    <p className="italic max-w-sm">
                      Lovely fish and chips! A clean, well organised shop and
                      the girl serving was super friendly too. We&apos;ll be
                      making this our regular on the back of this experience 🙂
                    </p>
                  </CardContent>
                  <CardFooter>
                    <p className="font-extralight">- Nick Kendal</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="cursor-pointer m-2" />
            <CarouselNext className="cursor-pointer m-2" />
            <CarouselDots className="mt-6" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
