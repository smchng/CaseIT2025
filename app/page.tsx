"use client";
import { useInView } from "react-intersection-observer";
import * as home from "@/content/home_content";
import { SquareButton } from "@/components/buttons";
import { TextDot } from "@/components/text";
import { Icon2025 } from "@/public/svgs/2026";
import HeroSection from "@/components/HeroSection";
import { useCountUp } from "@/hooks/useCountUp";
import Image from "next/image";
import StatCard from "@/components/stats";
import { BoldedText } from "@/components/text";

export default function Home() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true, // Trigger only once when it enters the viewport
    threshold: 0.5, // Trigger when 10% of the section is visible
  });
  const competitors = useCountUp(64, 1500, inView);
  const teams = useCountUp(16, 1000, inView);
  const days = useCountUp(6, 500, inView);
  const cases = useCountUp(2, 200, inView);
  const competition = useCountUp(1, 100, inView);

  const stats = [
    { label: "Competitors", count: competitors },
    { label: "Teams", count: teams },
    { label: "Days", count: days },
    { label: "Cases", count: cases },
    { label: "Competition", count: competition },
  ];

  console.log(inView);

  return (
    <main>
      <div className=" relative overflow-hidden h-screen md:mb-[20vh]">
        <HeroSection />
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="w-full h-screen items-center justify-center flex ">
            <div>
              {home.TitleList.map((item, index) => (
                <TextDot
                  key={index}
                  dotText={
                    <div className="text-header1 justify-center">
                      {item.title}{" "}
                    </div>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden md:py-[25vh]">
        <div className="absolute inset-0 -z-10 flex items-center justify-center">
          <Image
            src="/svgs/globe.svg"
            alt="Background Globe"
            layout="fill"
            objectFit="cover"
            className="w-[150vw] h-auto hidden md:block"
          />
        </div>
        <div
          ref={sectionRef}
          className="grid grid-cols-2 mb-20 mt-12 md:mt-4 md:grid-cols-5 place-items-center p-8 gap-8 max-w-96 md:max-w-[1440px] mx-auto"
        >
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.count}
              label={stat.label}
              className={
                index === stats.length - 1 ? "col-span-2 md:col-span-1" : ""
              }
            />
          ))}
        </div>
        <div className="  mt-12 grid grid-cols-1 md:grid-cols-2 border-redDark border-2 rounded-2xl gap-12 p-6 md:p-12 xl:p-20 w-[90%] max-w-[25rem] md:max-w-[1200px] mx-auto drop-shadow-[0_0_15px_rgba(197,52,52,0.25)] bg-white">
          <div className="w-full">
            <Icon2025 width="100%" height="100%" />
          </div>

          <div className=" text-[1rem] lg:text-[1rem] ">
            <h2 className="font-bold text-redDark md:text-[1.5rem]">
              {home.HomeText.header2[0]}
            </h2>
            <h3 className="font-bold text-[1.125rem] md:text-[1.75rem] lg:text-[2.5rem]">
              {home.HomeText.large[0]}
            </h3>
            <div className="mt-4 max-w-[40ch] lg:max-w-[45ch]">
              <BoldedText text={home.HomeText.paragraph[0]} />
            </div>
            <div className="mt-4 max-w-[60ch] lg:max-w-[45ch]">
              <BoldedText text={home.HomeText.paragraph[1]} />
            </div>
          </div>
        </div>
      </section>

      <section className=" relative flex flex-col bg-sectionBlack w-full text-left md:text-center md:items-center justify-center font-light gap-8 text-white mt-16 py-32 md:h-screen px-8 overflow-hidden ">
        <div className="absolute pointer-events-none inset-[-50rem] scale-75 bg-[url('/svgs/city.svg')] bg-center bg-no-repeat blur-[8px] opacity-100" />
        <h2 className="text-header2 font-semibold">
          {home.HomeText.header2[1]}
        </h2>
        <p className=" max-w-[76ch] md:text-base mb-8">
          {home.HomeText.paragraph[2]}
        </p>

        <div className="flex flex-col md:flex-row  gap-4  ">
          <SquareButton
            variant="white"
            text="CASEIT History"
            subtext="Learn about the CaseIT evolution"
            link="/history"
          />
          <SquareButton
            variant="white"
            text="Our 2024 Recap"
            subtext="Relive some of our best moments"
            link="/history/recap"
          />
          <SquareButton
            variant="white"
            text="PIVOT"
            subtext="Our local rendition for BC students"
            link="https://pivot.caseit.org/"
          />
        </div>
      </section>
    </main>
  );
}
