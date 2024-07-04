import Hero from "@/components/Hero";
import heroImg from "../assets/images/hero-img.png";
import Image from "next/image";
import ScrollAnimatedSection from "@/components/ScrollAnimatedSection";

export default function HomePage() {
  return (
    <main className="flex flex-col min-h-screen">
      <Hero />
      <ScrollAnimatedSection>
        <section className="max-w-screen-xl text-left p-20 mx-auto fade-in-element">
          <h2 className=" text-fh-blue-700 text-4xl uppercase font-bold tracking-wide">
            Voted Salfords{" "}
            <span className="text-fh-gold-500 italic">Best Chippy</span> in
            2023!
          </h2>
          <hr className=" border-b-1 border-fh-blue-900 my-2" />
        </section>
      </ScrollAnimatedSection>
    </main>
  );
}
