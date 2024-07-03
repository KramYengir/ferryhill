"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../public/logo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathName = usePathname();

  return (
    <header className=" bg-fh-blue-950 ">
      <nav className="flex flex-col justify-center items-center pt-2 pb-4 px-4 max-w-screen-xl mx-auto">
        <Link href={"/"}>
          <Image src={logo} width={124} alt="logo of restaurant" />
        </Link>

        <ul className="flex space-x-4">
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
