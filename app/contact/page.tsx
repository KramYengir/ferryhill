import { FacebookIcon, Instagram, Mail, MapPin, PhoneIcon } from "lucide-react";
import React from "react";
import GoogleMapsComponent from "@/components/GoogleMaps";
import Link from "next/link";
import ContactCard from "@/components/ContactCard";
import FAQ from "@/components/FAQ";
import faqItems from "@/data/faqItems";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://ferryhill.netlify.app"),
  title: "Get in Touch | Ferryhill Fish & Chips",
  description:
    "Have questions or need to get in touch? Contact Ferryhill Fish & Chips via phone, email, or social media. We're here to help!",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_EN",
    url: "https://ferryhill.netlify.app/contact",
    siteName: "Ferryhill Fish & Chips",
    title: "Get in Touch | Ferryhill Fish & Chips",
    description:
      "Have questions or need to get in touch? Contact Ferryhill Fish & Chips via phone, email, or social media. We're here to help!",
    images: [
      {
        url: "https://ferryhill.netlify.app/og/og_home.png",
        width: 1200,
        height: 630,
        alt: "Contact Ferryhill Fish & Chips",
      },
    ],
  },
};

const ContactPage = () => {
  return (
    <div className="grid w-full bg-[url('../assets/images/FH_fish_meal.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* Title */}
      <div className="bg-neutral-50">
        <h1
          className="text-8xl uppercase font-extrabold tracking-wide text-center bg-clip-text text-transparent my-24 bg-[url('../assets/images/fish-in-oil.webp')] bg-cover bg-center bg-no-repeat bg-fixed"
          id="contact-page-title"
        >
          Get in Touch
        </h1>
      </div>

      {/* How to get in touch */}
      <section
        className="flex flex-wrap lg:flex-nowrap justify-evenly items-start gap-x-6 gap-y-0 sm:pb-24 text-center bg-neutral-50 text-fh-blue-900"
        aria-labelledby="contact-options"
      >
        <ContactCard
          title="Telephone"
          description="If you have any enquiries, you can give us a call during opening hours and we'll be glad to help!"
          icon={
            <PhoneIcon size={32} className="mx-auto mb-2 text-fh-gold-500" />
          }
          link="tel:01617754738"
          linkText="0161 775 4738"
        />
        <ContactCard
          title="Email"
          description="If you're not in a rush, send us an email and we'll get back to you as soon as possible!"
          icon={<Mail size={32} className="mx-auto mb-2 text-fh-gold-500" />}
          link="mailto:ferryhillfishandchips@gmail.com"
          linkText="ferryhillfishandchips@gmail.com"
        />
        <ContactCard
          title="Social Media"
          description="To keep up-to-date with changes to our opening hours or any announcements, please check our Social Media!"
          icon={
            <>
              <Link
                href="https://www.instagram.com/ferryhill_fishchips/"
                aria-label="Visit our Instagram page"
                className="mx-2"
              >
                <Instagram size={48} className="text-fh-gold-500" />
              </Link>
              <Link
                href="https://www.facebook.com/FerryhillFishChips/?ref=embed_page"
                aria-label="Visit our Facebook page"
                className="mx-2"
              >
                <FacebookIcon size={48} className="text-fh-gold-500" />
              </Link>
            </>
          }
          isSocialMedia={true}
        />
      </section>

      {/* Address */}
      <section
        className="bg-gradient-to-b sm:bg-gradient-to-r from-neutral-900 to-neutral-900/90 text-white pt-24 sm:pb-28"
        aria-labelledby="address-section"
      >
        <h2
          id="address-section"
          className="uppercase tracking-widest font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center pb-6 sm:pb-24"
        >
          Where to Find Us
        </h2>
        <div className="flex flex-wrap justify-evenly items-start gap-x-6 gap-y-12">
          <div className="grid justify-center items-center gap-6 pt-6 sm:pt-12">
            <h3 className="sr-only">Address</h3>
            <MapPin size={32} className="mx-auto sm:hidden text-fh-blue-500" />
            <p className="text-lg md:text-xl tracking-wide font-light text-center sm:text-left">
              <span className="font-semibold">Ferryhill Fish & Chips</span>
              <br /> 50 Ferryhill Road,
              <br /> Irlam, <br />
              Manchester,
              <br /> United Kingdom
              <br /> M44 6DD
            </p>
          </div>
          <div className="w-full sm:w-2/4 min-w-96 h-96">
            <GoogleMapsComponent />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="bg-gradient-to-b sm:bg-gradient-to-r from-neutral-50 to-neutral-50/90 py-24"
        aria-labelledby="faq-section"
      >
        <h2
          id="faq-section"
          className="uppercase tracking-widest font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center pb-6 sm:pb-24"
        >
          Frequently Asked Questions
        </h2>
        <div className="flex flex-wrap justify-evenly items-start gap-x-6 gap-y-12">
          <div className="w-full sm:w-2/4 min-w-96 h-96">
            <FAQ items={faqItems} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
