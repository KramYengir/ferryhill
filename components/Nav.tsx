"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../public/logo.png";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className=" bg-fh-blue-950 backdrop-blur-lg">
      <nav className="relative flex justify-between items-center py-2 px-4 max-w-screen-xl mx-auto">
        <Link href={"/"}>
          <Image src={logo} width={124} alt="logo of restaurant" />
        </Link>

        {/* Mobile Nav */}
        <div className="block sm:hidden text-white" onClick={toggleMenu}>
          {isOpen ? <X size={48} /> : <Menu size={48} />}
        </div>
        {isOpen && (
          <ul className="sm:hidden absolute z-10 top-[100%] right-0 left-0 bg-fh-blue-950 text-fh-blue-200">
            {navLinks.map((link) => {
              const isActive = pathName === link.path;
              return (
                <li
                  key={link.name}
                  className={`${
                    isActive ? "font-bold text-fh-blue-50" : "font-normal"
                  } my-8 text-center tracking-wide`}
                >
                  <Link
                    href={link.path}
                    onClick={() => setIsOpen(false)}
                    className="uppercase"
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}

        {/* Desktop Nav */}
        <ul className="hidden sm:flex space-x-4">
          {navLinks.map((link) => {
            const isActive = pathName === link.path;
            return (
              <li
                key={link.name}
                className={`${
                  isActive ? "font-bold text-fh-blue-50" : "font-normal"
                } text-white`}
              >
                <Link href={link.path}>{link.name}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
