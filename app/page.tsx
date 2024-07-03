import Hero from "@/components/Hero";
import heroImg from "../assets/images/hero-img.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
    </main>
  );
}
