import React from "react";
import Image from "next/image";
import Link from "next/link";
import rigneymadeLogo from "../assets/images/rigneymade_logo.svg";
import { ChevronsUp, ChevronUpCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-800 text-white py-2">
      <div className="relative flex items-center justify-center mx-auto p-2">
        <Link
          href={"https://www.rigneymade.com/"}
          target="_blank"
          rel="noopener"
          className="flex items-center justify-center"
        >
          <div className="flex justify-center mr-2">
            <Image
              src={rigneymadeLogo}
              width={32}
              alt="logo of rigneymade web developer"
            />
          </div>
          <p>
            RigneyMade © <span>{new Date().getUTCFullYear()}</span>{" "}
          </p>
        </Link>
        <Link
          href={"#header"}
          className="absolute bottom-1/4 right-4 flex items-center gap-2 text-white text-sm hover:text-fh-blue-500"
          aria-label="Back to the top of the page"
        >
          <ChevronUpCircle size={24} className="sm:hidden" />
          <ChevronsUp size={16} className="hidden sm:block" />
          <span className="hidden sm:block">Back-To-Top</span>
          <ChevronsUp size={16} className="hidden sm:block" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
