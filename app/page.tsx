import Hero from "@/components/Hero";
import Image from "next/image";
import paintingIMG from "@/assets/images/painting.jpg";
import fishIMG from "@/assets/images/fish_chips.png";
import fishMealIMG from "@/assets/images/FH_fish-meal.jpeg";
import potatoesIMG from "@/assets/images/FH_potatoes.png";
import hoursIMG from "@/assets/images/FH_hours.png";
import ReviewsSection from "@/components/ReviewsSection";
import AccreditationSection from "@/components/AccreditationSection";
import OpeningHours from "@/components/OpeningHours";

export default function HomePage() {
  return (
    <>
      <Hero />

      <div className="bg-[url('../assets/images/tiled_bg.png')] bg-cover bg-center bg-no-repeat">
        <section
          id="reputation"
          className="fade-in-element flex flex-wrap md:gap-16 justify-center max-w-screen-xl text-left py-20 px-12 mx-auto bg-white bg-opacity-10"
        >
          <div className="flex-1 flex justify-center items-center min-w-72 mb-8">
            <Image src={fishIMG} alt="fish and chips in a tray"></Image>
          </div>
          <article className="max-w-sm flex flex-col justify-center">
            <h2 className="text-balance text-fh-blue-700 text-4xl uppercase font-bold tracking-wide">
              Voted Salfords{" "}
              <span className="text-fh-gold-500 text-5xl">Best Chippy</span> in
              2023!
            </h2>
            <hr className=" border-b-1 border-fh-blue-900 my-2" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <button className=" btn-primary mt-4">About Us</button>
          </article>
        </section>
      </div>

      {/* second section */}
      <ReviewsSection />

      {/* third section */}
      <div className="bg-[url('../assets/images/tiled_bg.png')] bg-cover bg-center bg-fixed bg-no-repeat">
        <section className="pt-20">
          <h2 className="text-balance text-fh-blue-700 text-4xl uppercase font-bold tracking-wide text-center">
            Opening hours
          </h2>
          <div className="flex flex-row-reverse flex-wrap gap-8 items-center justify-evenly max-w-screen-xl text-left py-20 px-12 mx-auto">
            <OpeningHours />
            <article className="max-w-sm flex flex-col gap-4 justify-center text-center bg-white bg-opacity-10  rounded-md p-8 ">
              {/* <hr className=" border-b-1 border-fh-blue-900 my-2" /> */}
              <p className="text-balance text-lg  max-w-prose">
                Be sure to check our social media pages or get in touch with us
                for any up-to-date changes{" "}
              </p>
              <button className=" btn-primary mt-4">Contact us</button>
            </article>
          </div>
        </section>
      </div>

      {/* forth section  */}
      <AccreditationSection />
    </>
  );
}
