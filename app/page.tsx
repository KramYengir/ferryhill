import Hero from "@/components/Hero";
import ReviewsSection from "@/components/ReviewsSection";
import AccreditationSection from "@/components/AccreditationSection";
import OpeningHours from "@/components/OpeningHours";
import NutshellCards from "@/components/NutshellCards";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Hero />
      <NutshellCards />

      {/* Reviews Section */}
      <ReviewsSection />

      {/* Opening Hours Section */}
      <section
        className="bg-[url('../assets/images/tiled_bg.webp')] bg-cover bg-center bg-no-repeat"
        aria-labelledby="opening-hours-section-heading"
      >
        <div className="pt-20">
          <h2
            id="opening-hours-section-heading"
            className="text-balance text-fh-blue-700 text-4xl sm:text-5xl uppercase font-bold tracking-wider text-center"
          >
            Opening Hours
          </h2>
          <div className="flex flex-row-reverse flex-wrap gap-8 items-center justify-evenly max-w-screen-xl text-left py-20 px-12 mx-auto">
            <OpeningHours />
            <article
              className="max-w-sm flex flex-col gap-6 justify-center text-center py-16 bg-fh-blue-800 rounded-md p-8"
              aria-labelledby="contact-info-heading"
            >
              <h3 id="contact-info-heading" className="sr-only">
                Contact Information
              </h3>
              <p className="text-white font-semibold text-xl tracking-wide max-w-prose">
                Be sure to check our social media pages or get in touch with us
                for any up-to-date changes.
              </p>
              <Link
                href="/contact"
                className="btn-secondary mt-4"
                aria-label="Contact us for updates"
              >
                Contact us
              </Link>
            </article>
          </div>
        </div>
      </section>

      {/* Accreditation Section */}
      <AccreditationSection />
    </>
  );
}
