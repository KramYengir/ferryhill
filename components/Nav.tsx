"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../public/logo.png";
import { Crosshair, CrossIcon, Menu, SidebarClose, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav className="flex justify-between items-center mx-auto max-w-screen-xl px-6 py-2 text-white ">
        <Link href={"/"} className="flex items-center tracking-wider">
          <div className=" max-w-24 mr-1">
            <Image
              src={logo}
              alt="logo in the shape of a film reel with the letters r r"
            />
          </div>
        </Link>
        {/* Mobile Nav */}
        <button
          className="absolute top-10 right-6 md:hidden z-50 text-xl"
          onClick={toggleMenu}
        >
          {isOpen ? <X className=" text-fh-gold-200" /> : <Menu />}
        </button>
        {isOpen && (
          <ul className="fixed inset-0 z-40 py-24 flex flex-col gap-12 text-2xl items-center bg-fh-blue-800 text-fh-gold-200">
            <li
              className={`hover:text-scooter-500 ${
                pathName === "/"
                  ? "text-scooter-500 dark:text-scooter-300 font-medium"
                  : ""
              } `}
            >
              <Link href={"//"} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li
              className={`hover:text-scooter-500 ${
                pathName === "/menu"
                  ? "text-scooter-500 dark:text-scooter-300 font-medium"
                  : ""
              } `}
            >
              <Link href={"/hidden-gems"} onClick={toggleMenu}>
                Menu
              </Link>
            </li>
            <li
              className={`hover:text-scooter-500 ${
                pathName === "/about"
                  ? "text-scooter-500 dark:text-scooter-300 font-medium"
                  : ""
              } `}
            >
              <Link href={"/about"} onClick={toggleMenu}>
                About
              </Link>
            </li>
          </ul>
        )}
        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-6 ">
          <li
            className={`hover:text-scooter-500 ${
              pathName === "/"
                ? "text-scooter-500 dark:text-scooter-300 font-medium"
                : ""
            } `}
          >
            <Link
              href={"/"}
              aria-current={pathName === "/" ? "page" : undefined}
            >
              Home
            </Link>
          </li>
          <li
            className={`hover:text-scooter-500 dark:hover:text-scooter-400 ${
              pathName === "/menu"
                ? "text-scooter-500 dark:text-scooter-300 font-medium"
                : ""
            } `}
          >
            <Link
              href={"/menu"}
              aria-current={pathName === "/menu" ? "page" : undefined}
            >
              Menu
            </Link>
          </li>
          <li
            className={`hover:text-scooter-500 dark:hover:text-scooter-400 ${
              pathName === "/about"
                ? "text-scooter-500 dark:text-scooter-300 font-medium"
                : ""
            } `}
          >
            <Link
              href={"/about"}
              aria-current={pathName === "/about" ? "page" : undefined}
            >
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
