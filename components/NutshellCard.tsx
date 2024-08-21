import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

// Define the interface for the Card props
interface CardProps {
  icon: LucideIcon;
  text: string;
  link: string;
  linkText: string;
  ariaLabel: string;
  heading: string; // Added heading prop
}

const Card: React.FC<CardProps> = ({
  icon: Icon,
  text,
  link,
  linkText,
  ariaLabel,
  heading, // Destructure heading prop
}) => {
  return (
    <article className="flex flex-col items-center gap-8 px-6 py-8 rounded-md shadow-lg shadow-fh-blue-950/25">
      <Icon size={48} aria-hidden="true" className="text-fh-gold-500" />
      <h3 className="text-xl font-semibold text-center">{heading}</h3>{" "}
      <p className="text-center max-w-60">{text}</p>
      <Link href={link} aria-label={ariaLabel} className="btn-primary">
        {linkText}
      </Link>
    </article>
  );
};

export default Card;
