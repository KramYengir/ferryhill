import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";
import AccreditationSection from "@/components/AccreditationSection";
import OpeningHours from "@/components/OpeningHours";
import NutshellCards from "@/components/NutshellCards";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NutshellCards />

      {/* second section */}
      <ReviewsSection />

      {/* third section */}
      <div className="bg-[url('../assets/images/tiled_bg.webp')] bg-cover bg-center bg-fixed bg-no-repeat">
        <section className="pt-20">
          <h2 className="text-balance text-fh-blue-700 text-4xl uppercase font-bold tracking-wide text-center">
            Opening hours
          </h2>
          <div className="flex flex-row-reverse flex-wrap gap-8 items-center justify-evenly max-w-screen-xl text-left py-20 px-12 mx-auto">
            <OpeningHours />
            <article className="max-w-sm flex flex-col gap-6 justify-center text-center py-16 bg-fh-blue-600 rounded-md p-8 ">
              {/* <hr className=" border-b-1 border-fh-blue-900 my-2" /> */}
              <p className="text-white font-bold text-lg  max-w-prose">
                Be sure to check our social media pages or get in touch with us
                for any up-to-date changes{" "}
              </p>
              <button className=" btn-secondary mt-4">Contact us</button>
            </article>
          </div>
        </section>
      </div>

      {/* forth section  */}
      <AccreditationSection />
    </>
  );
}
