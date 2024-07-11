import React from "react";
import openIMG from "../assets/images/open_white.png";
import Image from "next/image";
import { Separator } from "./ui/separator";

const OpeningHours = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-96 mb-2 px-16 pt-2 pb-8 border-4 border-fh-blue-600 rounded-sm bg-neutral-900 bg-opacity-80 text-white">
      <div className="flex justify-center items-center max-w-16 my-4 ">
        <Image src={openIMG} alt="opening hours"></Image>
      </div>
      <h3 className="text-xl uppercase font-semibold mt-4">Mon - Sat</h3>
      <Separator decorative className=" opacity-40 mb-1" />
      <p>11:30am - 1:45pm</p>
      <p>4:30pm - 8:30pm</p>
      <h3 className="text-xl uppercase font-semibold mt-6">Fri</h3>
      <Separator decorative className=" opacity-40 mb-1" />
      <small className="font-light italic mb-1">
        Opened longer in the mornings
      </small>
      <p>11:30am - 2:00pm</p>
      {/* <p>4:30pm - 8:30pm</p> */}
      <h3 className="text-xl uppercase font-semibold mt-6">Sun</h3>
      <Separator decorative className=" opacity-40 mb-1" />
      <p>-- closed --</p>
    </div>
  );
};

export default OpeningHours;
