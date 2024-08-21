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
      aria-labelledby="reviews-section-heading"
    >
      <div className=" bg-gradient-to-b sm:bg-gradient-to-br from-fh-blue-900 to-fh-blue-700/80 bg-opacity-85">
        <div className="flex flex-col justify-center items-center max-w-screen-xl 2xl:max-w-screen-2xl py-20 px-12 mx-auto">
          <h2
            id="reviews-section-heading"
            className="text-4xl lg:text-5xl text-balance text-center text-white my-4 uppercase font-bold tracking-wide"
          >
            What our customers have to say
          </h2>
          <p className="text-balance sm:text-xl text-center text-white font-light mb-12">
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
                  role="group"
                  aria-roledescription="slide"
                >
                  <ReviewCard text={review.text} author={review.author} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious
              className="cursor-pointer m-2"
              aria-label="Previous review"
            />
            <CarouselNext
              className="cursor-pointer m-2"
              aria-label="Next review"
            />
            <CarouselDots
              className="mt-6"
              aria-label="Carousel navigation dots"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
