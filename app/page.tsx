import heroImg from "../assets/images/hero-img.png";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section className="min-h-[80vh] flex justify-center items-start  bg-fh-blue-950">
        <div className="relative w-[80vw] aspect-square sm:max-w-sm my-32 backdrop-blur-md">
          <Image
            src={heroImg}
            fill
            sizes="100vh"
            alt="welcome message for ferryhill"
          />
        </div>
      </section>

      {/* bg for both navbar and header */}
      {/* <div className="absolute -z-10 top-0 right-0 left-0 -bottom-28 bg-hero  bg-cover bg-no-repeat bg-fixed"></div> */}
    </main>
  );
}
