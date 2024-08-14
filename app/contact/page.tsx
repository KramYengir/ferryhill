import { FacebookIcon, Instagram, Mail, MapPin, PhoneIcon } from "lucide-react";
import React from "react";
import GoogleMapsComponent from "@/components/GoogleMaps";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="grid w-full bg-[url('../assets/images/FH_fish_meal.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
      {/* title */}
      <div className="bg-neutral-50">
        <h1 className="text-8xl uppercase font-extrabold tracking-wide text-center bg-clip-text text-transparent my-24 bg-[url('../assets/images/fish-in-oil.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
          Get in touch
        </h1>
      </div>

      {/* How to get in touch */}
      <section className="flex flex-wrap lg:flex-nowrap justify-evenly items-start gap-x-6 gap-y-0 sm:pb-24 text-center bg-neutral-50 text-fh-blue-900">
        <div className="grid justify-center items-center min-h-96 px-8 py-12 shadow-lg rounded-md">
          <h2 className="text-xl font-extrabold uppercase tracking-widest text-fh-blue-600">
            telephone
          </h2>
          <p className="max-w-sm leading-relaxed">
            If you have any enquiries, you can give us a call during opening
            hours and we&apos;ll be glad to help!
          </p>
          <div>
            <PhoneIcon size={32} className="mx-auto mb-2 text-fh-gold-500" />
            <a
              href="tel:01617754738"
              className="text-lg text-fh-blue-900 tracking-wide font-light"
            >
              0161 775 4738
            </a>
          </div>
        </div>
        <div className="grid justify-center items-center min-h-96 px-8 py-12 shadow-lg rounded-md">
          <h2 className="text-xl font-extrabold uppercase tracking-widest text-fh-blue-600">
            email
          </h2>
          <p className="max-w-sm leading-relaxed">
            If you&apos;re not in a rush, then send us an email and we&apos;ll
            get back to you as soon as possible!
          </p>
          <div>
            <Mail size={32} className="mx-auto mb-2 text-fh-gold-500" />
            <a
              href="email:ferryhillfishandchips@gmail.com"
              className="text-lg text-fh-blue-900 tracking-wide font-light"
            >
              ferryhillfishandchips@gmail.com
            </a>
          </div>
        </div>
        <div className="grid justify-center items-center min-h-96 px-8 py-12 shadow-lg rounded-md">
          <h2 className="text-xl font-extrabold uppercase tracking-widest text-fh-blue-600">
            social media
          </h2>
          <p className="max-w-sm leading-relaxed">
            To keep up-to-date with changes to our opening hours or any
            announcements, please check our Social Media!
          </p>
          <div className="flex justify-evenly">
            <Link href={"https://www.instagram.com/ferryhill_fishchips/"}>
              <Instagram size={48} className="mx-auto text-fh-gold-500" />
            </Link>
            <Link
              href={
                "https://www.facebook.com/FerryhillFishChips/?ref=embed_page"
              }
            >
              <FacebookIcon
                size={48}
                className="mb-4 mx-auto text-fh-gold-500"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* Address */}
      <section className="bg-gradient-to-b sm:bg-gradient-to-r from-neutral-900 to-neutral-900/80 text-white py-24">
        <h2 className="uppercase tracking-widest font-semibold text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl text-center pb-6 sm:pb-24">
          Where to find us
        </h2>
        <div className="flex flex-wrap justify-evenly items-start gap-x-6 gap-y-12">
          <div className="grid justify-center items-center gap-6  pt-6 sm:pt-12">
            <h3 className="sr-only">Address</h3>
            <MapPin size={32} className="mx-auto sm:hidden text-fh-blue-500" />
            <p className="text-lg md:text-xl tracking-wide font-light text-center sm:text-left">
              <span className="font-semibold">Ferryhill Fish & Chips</span>{" "}
              <br /> 50 Ferryhill Road,
              <br /> Irlam, <br />
              Manchester,
              <br /> United Kingdom
              <br /> M44 6DD
            </p>
          </div>
          <div className="w-full sm:w-2/4 min-w-96 h-96  ">
            <GoogleMapsComponent />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
