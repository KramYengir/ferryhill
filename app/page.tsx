import Hero from "@/components/Hero";
import heroImg from "../assets/images/hero-img.png";
import Image from "next/image";
import ScrollAnimatedSection from "@/components/utility/ScrollAnimatedSection";
import paintingIMG from "@/assets/images/painting.jpg";
import fishIMG from "@/assets/images/fish_chips.png";
import fishMealIMG from "@/assets/images/FH_fish-meal.jpeg";
import ReviewsSection from "@/components/ReviewsSection";
import AccreditationSection from "@/components/AccreditationSection";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />

      <div className="bg-[url('../assets/images/tiled_bg.png')] bg-cover bg-center bg-no-repeat">
        <section className="flex flex-wrap md:gap-16 justify-center max-w-screen-xl text-left py-20 px-12 mx-auto bg-white bg-opacity-10">
          <div className="flex-1 flex justify-center items-center min-w-72 mb-8">
            <Image src={fishIMG} alt="fish and chips in a tray"></Image>
          </div>
          <article className="max-w-sm flex flex-col  justify-center">
            <h2 className="text-balance text-fh-blue-700 text-4xl uppercase font-bold tracking-wide">
              Voted Salfords{" "}
              <span className="text-fh-gold-500 italic">Best Chippy</span> in
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
        <section className="flex flex-wrap  md:gap-16 justify-center max-w-screen-xl text-left py-20 px-12 mx-auto ">
          <div className="flex-1 flex justify-center items-center min-w-72 mb-8">
            <Image src={fishIMG} alt="fish and chips ina  tray"></Image>
          </div>
          <article className="max-w-sm flex flex-col  justify-center">
            <h2 className="text-balance text-fh-blue-700 text-4xl uppercase font-bold tracking-wide">
              Fresh, Sustainable, Line-Caught Fish Delivered Daily
            </h2>
            <hr className=" border-b-1 border-white my-2" />
            <p className="text-balance ">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.{" "}
            </p>
            <button className=" btn-primary mt-4">Our Menu</button>
          </article>
        </section>
      </div>

      {/* forth section  */}
      <AccreditationSection />
    </main>
  );
}
