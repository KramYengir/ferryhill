import React from "react";
import paintingIMG from "@/assets/images/painting.jpg";
import christosIMG from "@/assets/images/FH_christos.jpg";
import mealImg from "@/assets/images/FH_fish_meal.jpeg";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="grid w-full  bg-[url('../assets/images/FH_fish_meal.jpeg')] bg-cover bg-center bg-no-repeat bg-fixed">
      <div className="bg-white">
        <h1 className="text-8xl uppercase font-extrabold tracking-wide text-center bg-clip-text text-transparent my-24  bg-[url('../assets/images/fish-in-oil.png')] bg-cover bg-center bg-no-repeat bg-fixed">
          Our Story
        </h1>
      </div>

      <div className=" bg-fh-blue-900 py-24 bg-opacity-90">
        <div className="flex flex-wrap justify-evenly gap-4 max-w-screen-xl px-6 mx-auto">
          <div className="flex flex-col gap-4 justify-center">
            <h2 className="text-left capitalize text-2xl tracking-wider text-white font-bold mb-4">
              our beginning...
            </h2>
            <p className="text-left text-white text-lg max-w-sm">
              Ferryhill Fish and Chips, a family-run establishment since 2013,
              leverages over 30 years of industry expertise. Our commitment is
              to bring a blend of knowledge and passion, ensuring our customers
              experience top-notch food and warm, friendly service.
            </p>
          </div>
          <div className="flex  rounded-md overflow-hidden sm:max-w-sm">
            <Image
              src={paintingIMG}
              alt="painting of ferryhil fish and chips"
            />
          </div>
        </div>
      </div>

      <div className="bg-white bg-opacity-95 py-24 ">
        <div className="flex flex-wrap flex-row-reverse justify-evenly gap-4 max-w-screen-xl px-6 mx-auto">
          <div className="flex flex-col gap-4 justify-center">
            <h2 className="text-left capitalize text-2xl tracking-wider text-fh-blue-800 font-bold mb-4">
              Our Standards...
            </h2>
            <p className="text-left text-fh-blue-900 text-lg max-w-sm">
              Under the stewardship of Christos since 2020, our shop has
              flourished, garnering consistent 5-star reviews on Google. Our
              menu continues to evolve, and we are proud to have been voted the
              best chippy in Manchester by readers of salfordnow.co.uk in 2023.
            </p>
          </div>
          <div className="flex rounded-md overflow-hidden sm:max-w-sm">
            <Image src={christosIMG} alt="Christos, owner of ferryhill" />
          </div>
        </div>
      </div>

      <div className="bg-fh-blue-900 bg-opacity-90 py-24 ">
        <div className="flex flex-wrap justify-evenly gap-4 max-w-screen-xl px-6 mx-auto">
          <div className="flex flex-col gap-4 justify-center">
            <h2 className="text-left capitalize text-2xl tracking-wider text-white font-bold mb-4">
              our food...
            </h2>
            <p className="text-left text-white text-lg max-w-sm">
              Our ever-expanding menu continues to add a diverse selection of
              vegan, vegetarian, and gluten-free options, catering to a wide
              range of dietary preferences. Crafted with care and the finest
              ingredients, our dishes maintain the high standards our customers
              have come to expect.
            </p>
          </div>
          <div className="flex rounded-md overflow-hidden sm:max-w-sm">
            <Image src={mealImg} alt="fish and chips on some white paper" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
