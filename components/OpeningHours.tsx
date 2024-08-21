import React from "react";
import openIMG from "../assets/images/open_white.png";
import Image from "next/image";
import { Separator } from "./ui/separator";

const OpeningHours = () => {
  return (
    <section
      aria-labelledby="opening-hours-heading"
      className="flex flex-col justify-center items-center max-w-96 mb-2 px-16 pt-2 pb-8 border-4 border-fh-blue-600 rounded-sm bg-neutral-900 bg-opacity-80 text-white"
    >
      <h2 id="opening-hours-heading" className="sr-only">
        Opening Hours
      </h2>
      <div className="flex justify-center items-center max-w-16 my-4">
        <Image src={openIMG} alt="Image representing opening hours" />
      </div>
      <h3 className="text-xl uppercase font-semibold mt-4">Mon - Sat</h3>
      <Separator decorative className="opacity-40 mb-1" />
      <p>
        <time dateTime="11:30:00">11:30 AM</time> -
        <time dateTime="13:45:00"> 1:45 PM</time>
      </p>
      <p>
        <time dateTime="16:30:00">4:30 PM</time> -
        <time dateTime="20:30:00"> 8:30 PM</time>
      </p>
      <h3 className="text-xl uppercase font-semibold mt-6">Fri</h3>
      <Separator decorative className="opacity-40 mb-1" />
      <small className="font-light italic mb-1">
        Opened longer in the mornings
      </small>
      <p>
        <time dateTime="11:30:00">11:30 AM</time> -
        <time dateTime="14:00:00"> 2:00 PM</time>
      </p>
      {/* <p>4:30pm - 8:30pm</p> */}
      <h3 className="text-xl uppercase font-semibold mt-6">Sun</h3>
      <Separator decorative className="opacity-40 mb-1" />
      <p>-- closed --</p>
    </section>
  );
};

export default OpeningHours;
