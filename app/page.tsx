"use client"
import { useInView } from "react-intersection-observer";
import { TitleList } from "@/content/home_content";
import { SquareButton } from "@/components/buttons";
import { TextDot } from "@/components/text";
import { Icon2025 } from "@/public/svgs/2026";
import HeroSection from "@/components/HeroSection";
import { useCountUp } from "@/hooks/useCountUp";

export default function Home() {
  const { ref: sectionRef, inView } = useInView({
    triggerOnce: true, // Trigger only once when it enters the viewport
    threshold: 0.5, // Trigger when 10% of the section is visible
  });
  const competitors = useCountUp(64,1500, inView);
  const teams = useCountUp(16,1000,inView);
  const days = useCountUp(6,500, inView);
  const cases = useCountUp(2,200, inView);
  const competition = useCountUp(1,100, inView);

  console.log(inView)

  return (
    <main>
      <div className=" relative">
        <HeroSection />
        <div className="absolute top-0 left-1/2 -translate-x-1/2">
          <div className="w-full h-[60vh] md:h-screen items-center justify-center flex ">
            <div>
              {TitleList.map((item, index) => (
                <TextDot
                  key={index}
                  dotText={<div className="text-header1">{item.title} </div>}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <section >
      <div ref={sectionRef} className="grid grid-cols-2 mt-12 md:mt-4 md:grid-cols-5 place-items-center p-8 gap-8 max-w-96 md:max-w-[1440px] mx-auto">
          <div className="text-[4.5rem] xl:text-[152px] font-acid text-redDark flex flex-col items-center leading-none ">
            {String(competitors).padStart(2,"0")}
            <span className="text-[0.75rem] xl:text-[1.5rem] font-sans">
              Driven Competitors
            </span>
          </div>
          <div className="text-[4.5rem] xl:text-[152px] font-acid text-redDark flex flex-col items-center leading-none ">
          {String(teams).padStart(2,"0")}
            <span className="text-[0.75rem] xl:text-[1.5rem] font-sans">
              International Teams
            </span>
          </div>
          <div className="text-[4.5rem] xl:text-[152px] font-acid text-redDark flex flex-col items-center leading-none ">
          {String(days).padStart(2,"0")}
            <span className="text-[0.75rem] xl:text-[1.5rem] font-sans">
              Intensive Days
            </span>
          </div>
          <div className="text-[4.5rem] xl:text-[152px] font-acid text-redDark flex flex-col items-center leading-none ">
          {String(cases).padStart(2,"0")}
            <span className="text-[0.75rem] xl:text-[1.5rem] font-sans">
              Challenging Cases
            </span>
          </div>
          <div className="col-span-2 md:col-span-1 text-[4.5rem] xl:text-[152px] font-acid text-redDark flex flex-col items-center leading-none ">
          {String(competition).padStart(2,"0")}
            <span className="text-[0.75rem] xl:text-[1.5rem] font-sans">
              Competition
            </span>
          </div>
        </div>

        <div className="  mt-12 grid grid-cols-1 md:grid-cols-2 border-redDark border-2 rounded-2xl gap-12 p-6 md:p-12 xl:p-20 w-[90%] max-w-[25rem] md:max-w-[1200px] mx-auto drop-shadow-[0_0_15px_rgba(197,52,52,0.25)] bg-white">
          <div className="w-full">
            <Icon2025 width="100%" height="100%" />
          </div>

          <div className=" text-[1rem] lg:text-[1rem] ">
            <h2 className="font-bold text-redDark md:text-[1.5rem]">
              CASEIT 2025
            </h2>
            <h3 className="font-bold text-[1.125rem] md:text-[1.75rem] lg:text-[2.5rem]">
              See you in Vancouver.
            </h3>
            <p className="mt-4 max-w-[40ch] lg:max-w-[45ch]">
              <strong>CaseIT 2025</strong> will take place in the beautiful city
              of Vancouver, BC from <strong> February 16 to 21, 2025</strong>.
            </p>
            <p className="mt-4 max-w-[60ch] lg:max-w-[45ch]">
              To commemorate our 22nd year, we pledge to shape the next two
              decades by organizing a case competition that will continue
              <strong>
                {" "}
                fostering industry expertise, cultural diversity, and
                international communities.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <section className=" relative flex flex-col bg-sectionBlack w-full text-left md:text-center md:items-center  font-light gap-8 text-white mt-16 py-32 px-8 overflow-hidden">
      <div className="absolute inset-[-50rem] scale-75 bg-[url('/svgs/city.svg')] bg-center bg-no-repeat blur-[8px] opacity-100" />
        <h2 className="text-base font-semibold">What is CaseIT?</h2>
        <p className=" max-w-[76ch] md:text-xs mb-8">
          CaseIT is the world’s premier international undergraduate Management
          Information Systems (MIS) case competition. The brightest business
          students from across the globe converge in Vancouver, BC, to put their
          skills to the test in this week-long event. With opportunities to
          network, explore, and learn, we promise that your CaseIT experience is
          one that you will never forget.{" "}
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
            link="/history"
          />
          <SquareButton
            variant="white"
            text="PIVOT"
            subtext="Our local rendition for BC students"
            link="/history"
          />
        </div>
      </section>
    </main>
  );
}
