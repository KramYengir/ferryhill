import paintingIMG from "@/assets/images/painting_square_400.webp";
import christosIMG from "@/assets/images/FH_christos.jpg";
import mealImg from "@/assets/images/FH_fish_meal.jpeg";
import communityImg from "@/assets/images/FH_christos_pitchside.jpg";
import { StaticImageData } from "next/image";

// Define the type for the aboutInfo array items
interface AboutInfoItem {
  heading: string;
  text: string;
  image: StaticImageData;
  imageAlt: string;
  color: "stone" | "blue" | "white";
  reversed: boolean;
}

export const aboutInfo: AboutInfoItem[] = [
  {
    heading: "our beginning...",
    text: "Ferryhill Fish and Chips, a family-run establishment since 2013, leverages over 30 years of industry expertise. Our commitment is to bring a blend of knowledge and passion, ensuring our customers experience top-notch food and warm, friendly service.",
    image: paintingIMG,
    imageAlt: "painting of ferryhil fish and chips",
    color: "blue",
    reversed: false,
  },
  {
    heading: "Our Standards...",
    text: "Under the stewardship of Christos since 2020, our shop has flourished, garnering consistent 5-star reviews on Google. Our menu continues to evolve, and we are proud to have been voted the best chippy in Manchester by readers of salfordnow.co.uk in 2023.",
    image: christosIMG,
    imageAlt: "Christos, owner of ferryhill",
    color: "white",
    reversed: true,
  },
  {
    heading: "our food...",
    text: "Our ever-expanding menu continues to add a diverse selection of vegan, vegetarian, and gluten-free options, catering to a wide range of dietary preferences. Crafted with care and the finest ingredients, our dishes maintain the high standards our customers have come to expect.",
    image: mealImg,
    imageAlt: "fish and chips on some white paper",
    color: "stone",
    reversed: false,
  },
  {
    heading: "our community...",
    text: "We're deeply rooted in our local community, actively supporting charitable causes through fundraisers, participating in local events, and proudly backing our local football team.",
    image: communityImg,
    imageAlt:
      "ferryhill owner Christos kneeling beside a pitchside ad board for his business",
    color: "white",
    reversed: true,
  },
];
