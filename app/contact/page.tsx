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
      <div className="flex flex-wrap lg:flex-nowrap justify-evenly items-start gap-x-6 gap-y-0 text-center bg-neutral-50 text-fh-blue-900">
        <div className="grid justify-center items-center min-h-96 px-8 py-12 shadow-xl sm:shadow-lg">
          <h3 className="text-xl font-extrabold uppercase tracking-widest text-fh-blue-800">
            telephone
          </h3>
          <p className="max-w-sm leading-relaxed">
            If you have any enquiries, you can give us a call during opening
            hours and we&apos;ll be glad to help!
          </p>
          <h3 className="sr-only">Telephone</h3>
          <div>
            <PhoneIcon size={32} className="mx-auto mb-2 text-fh-blue-500" />
            <a href="tel:01617754738" className="tracking-wide">
              0161 775 4738
            </a>
          </div>
        </div>
        <div className="grid justify-center items-center min-h-96 px-8 py-12 shadow-xl sm:shadow-lg">
          <h3 className="text-xl font-extrabold uppercase tracking-widest text-fh-blue-800">
            email
          </h3>
          <p className="max-w-sm leading-relaxed">
            If you&apos;re not in a rush, then send us an email and we&apos;ll
            get back to you as soon as possible!
          </p>
          <h3 className="sr-only">Email</h3>
          <div>
            <Mail size={32} className="mx-auto mb-2 text-fh-blue-500" />
            <a
              href="email:ferryhillfishandchips@gmail.com"
              className="tracking-wide"
            >
              ferryhillfishandchips@gmail.com
            </a>
          </div>
        </div>
        <div className="grid justify-center items-center min-h-96 px-8 py-12 shadow-xl sm:shadow-lg">
          <h3 className="text-xl font-extrabold uppercase tracking-widest text-fh-blue-800">
            social media
          </h3>
          <p className="max-w-sm leading-relaxed">
            To keep up-to-date with changes to our opening hours or any
            announcements, please check our Social Media!
          </p>
          <div className="flex justify-evenly">
            <Link href={"https://www.instagram.com/ferryhill_fishchips/"}>
              <Instagram size={48} className="mx-auto text-fh-blue-500" />
            </Link>
            <Link
              href={
                "https://www.facebook.com/FerryhillFishChips/?ref=embed_page"
              }
            >
              <FacebookIcon
                size={48}
                className="mb-4 mx-auto text-fh-blue-500"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
{
  /* <div className="w-full h-96 md:h-full lg:w-2/3">
  <GoogleMapsComponent />
</div> */
}

{
  /* <div>
  <h2 className="sr-only">Address</h2>
  <MapPin size={32} className="mb-4 mx-auto text-fh-blue-500" />
  <address className="tracking-wide">
    <span className="font-semibold">Ferryhill Fish & Chips</span> <br />{" "}
    50 Ferryhill Road,
    <br /> Irlam, Manchester,
    <br /> United Kingdom
    </address>
    </div> */
}
