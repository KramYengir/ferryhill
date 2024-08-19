import React from "react";
import Link from "next/link";

interface ContactCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  linkText?: string;
  isSocialMedia?: boolean;
}

const ContactCard: React.FC<ContactCardProps> = ({
  title,
  description,
  icon,
  link,
  linkText,
  isSocialMedia = false,
}) => {
  return (
    <div className="grid justify-center items-center min-h-96 px-8 py-12 shadow-sm sm:shadow-lg rounded-md">
      <h2 className="text-xl font-extrabold uppercase tracking-widest text-fh-blue-600">
        {title}
      </h2>
      <p className="max-w-sm leading-relaxed">{description}</p>
      <div
        className={`flex ${
          isSocialMedia ? "justify-evenly" : "flex-col items-center"
        }`}
      >
        {link ? (
          <a
            href={link}
            className="text-lg text-fh-blue-900 tracking-wide font-light"
          >
            {icon}
            {linkText && !isSocialMedia && <span>{linkText}</span>}
          </a>
        ) : (
          icon
        )}
      </div>
    </div>
  );
};

export default ContactCard;
