"use client";
import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import logo from "../public/logo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Menu", path: "/menu" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const pathName = usePathname();

  useEffect(() => {
    const main = document.querySelector("main") as HTMLElement | null;
    const navbar = document.querySelector("#NavBar") as HTMLElement | null;

    if (!main || !navbar) return;

    const top = navbar.offsetTop;
    const navbarHeight = navbar.offsetHeight;

    const stickynavbar = () => {
      if (window.scrollY >= top) {
        navbar.classList.add("sticky");
        main.style.paddingTop = `${navbarHeight}px`; // Add padding to avoid jump
      } else {
        navbar.classList.remove("sticky");
        main.style.paddingTop = "0px"; // Remove padding when not sticky
      }
    };

    window.addEventListener("scroll", stickynavbar);

    return () => {
      window.removeEventListener("scroll", stickynavbar);
    };
  }, []);

  return (
    <header className="bg-[url('../assets/images/fish_heater_portrait_2.webp')] md:bg-[url('../assets/images/fish_meal.webp')] bg-cover bg-center bg-no-repeat bg-fixed">
      <nav className="flex flex-col justify-center items-center pt-2 pb-4 px-4 mx-auto">
        <Link href={"/"}>
          <Image src={logo} width={132} alt="logo of restaurant" />
        </Link>

        <ul
          id="NavBar"
          className="flex gap-6 px-6 py-2 bg-neutral-900 bg-opacity-60 rounded-xl overflow-hidden"
        >
          {navLinks.map((link) => {
            const isActive = pathName === link.path;
            return (
              <li
                key={link.name}
                className={`${
                  isActive
                    ? "font-bold text-fh-blue-500"
                    : "font-normal text-white"
                } hover:text-fh-blue-500 focus-within:text-fh-blue-500`}
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
