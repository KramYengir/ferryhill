import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import ReviewCard from "./ReviewCard";
import { reviews } from "../data/reviewsData"; // Import review data

const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="bg-[url('../assets/images/FH_fish_meal.jpeg')] bg-cover bg-center bg-fixed bg-no-repeat"
    >
      <div className="bg-fh-blue-700 bg-opacity-85">
        <div className="flex flex-col justify-center items-center max-w-screen-xl 2xl:max-w-screen-2xl py-20 px-12 mx-auto">
          <h2 className="text-4xl text-balance text-center text-white my-4 uppercase font-bold tracking-wide">
            What our customers have to say
          </h2>
          <p className="text-balance text-center text-white italic mb-12">
            With over 300 reviews on Google, we know what our customers like
          </p>
          <Carousel
            className="w-full 2xl:max-w-screen-xl my-6"
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="flex md:px-4 md:gap-4">
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="flex justify-center md:basis-1/2 xl:basis-1/3"
                >
                  <ReviewCard text={review.text} author={review.author} />
                </CarouselItem>
              ))}
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
