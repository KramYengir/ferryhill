import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

// Define the interface for the Card props
interface CardProps {
  icon: LucideIcon;
  text: string;
  link: string;
  linkText: string;
}

const Card: React.FC<CardProps> = ({ icon: Icon, text, link, linkText }) => {
  return (
    <div className="flex flex-col items-center gap-8 px-6 py-8 rounded-md shadow-lg shadow-fh-blue-950/25">
      <Icon size={48} className="text-fh-gold-600" />
      <p className="text-center max-w-60">{text}</p>
      <Link href={link} className="btn-primary">
        {linkText}
      </Link>
    </div>
  );
};

export default Card;
