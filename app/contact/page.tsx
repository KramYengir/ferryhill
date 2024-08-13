import { Mail, MapPin, PhoneIcon } from "lucide-react";
import React from "react";
import GoogleMapsComponent from "@/components/GoogleMaps";

const ContactPage = () => {
  return (
    <div className="grid w-full bg-[url('../assets/images/FH_fish_meal.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="bg-neutral-50">
        <h1 className="text-8xl uppercase font-extrabold tracking-wide text-center bg-clip-text text-transparent my-24 bg-[url('../assets/images/fish-in-oil.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
          Get in touch
        </h1>
      </div>
      <div className="flex flex-wrap lg:flex-nowrap justify-evenly gap-4 text-center bg-neutral-800 text-white">
        <div className="grid gap-12 py-16 lg:w-1/3">
          <div>
            <h2 className="sr-only">Address</h2>
            <MapPin size={32} className="mb-4 mx-auto text-fh-blue-500" />
            <address className="tracking-wide">
              <span className="font-semibold">Ferryhill Fish & Chips</span>{" "}
              <br /> 50 Ferryhill Road,
              <br /> Irlam, Manchester,
              <br /> United Kingdom
            </address>
          </div>
          <div>
            <h2 className="sr-only">Telephone</h2>
            <PhoneIcon size={32} className="mb-4 mx-auto text-fh-blue-500" />
            <a href="tel:01617754738" className="tracking-wide">
              0161 775 4738
            </a>
          </div>
          <div>
            <h2 className="sr-only">Email</h2>
            <Mail size={32} className="mb-4 mx-auto text-fh-blue-500" />
            <a
              href="email:ferryhillfishandchips@gmail.com"
              className="tracking-wide"
            >
              ferryhillfishandchips@gmail.com
            </a>
          </div>
        </div>
        <div className="w-full h-96 md:h-full lg:w-2/3">
          <GoogleMapsComponent />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
