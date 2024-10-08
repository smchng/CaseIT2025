import Image from "next/image";
import { TitleList } from "@/content/home_content";
import { SquareButton } from "@/components/buttons";
import { TextDot } from "@/components/text";
import { Icon2025 } from "@/public/svgs/2026";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen items-center justify-center flex ">
        <div>
          {TitleList.map((item, index) => (
            <TextDot
              key={index}
              dotText={<div className="text-header1">{item.title} </div>}
            />
          ))}
        </div>
      </div>

      <section>
        <div className="grid grid-cols-2 md:grid-cols-5 place-items-center p-8 gap-8 max-w-96 md:max-w-[1440px] mx-auto">
          <div className="text-[4.5rem] xl:text-[152px] font-acid text-redDark flex flex-col items-center leading-none ">
            64
            <span className="text-[0.75rem] xl:text-[1.5rem] font-sans">
              Driven Competitors
            </span>
          </div>
          <div className="text-[4.5rem] xl:text-[152px] font-acid text-redDark flex flex-col items-center leading-none ">
            16
            <span className="text-[0.75rem] xl:text-[1.5rem] font-sans">
              International Teams
            </span>
          </div>
          <div className="text-[4.5rem] xl:text-[152px] font-acid text-redDark flex flex-col items-center leading-none ">
            06
            <span className="text-[0.75rem] xl:text-[1.5rem] font-sans">
              Intensive Days
            </span>
          </div>
          <div className="text-[4.5rem] xl:text-[152px] font-acid text-redDark flex flex-col items-center leading-none ">
            02
            <span className="text-[0.75rem] xl:text-[1.5rem] font-sans">
              Challenging Cases
            </span>
          </div>
          <div className="col-span-2 md:col-span-1 text-[4.5rem] xl:text-[152px] font-acid text-redDark flex flex-col items-center leading-none ">
            01
            <span className="text-[0.75rem] xl:text-[1.5rem] font-sans">
              Competition
            </span>
          </div>
        </div>

        <div className=" max-w-[1200px] mt-12 grid grid-cols-1 md:grid-cols-2 border-redDark border-2 rounded-2xl gap-8 p-6 md:p-12 w-[80%] mx-auto drop-shadow-[0_0_15px_rgba(197,52,52,0.25)] bg-white">
          <div className="w-full">
            <Icon2025 width="" height="" />
          </div>

          <div className="">
            <h2 className="font-bold text-redDark">CASEIT 2025</h2>
            <h3 className="font-bold text-[1.125rem]">See you in Vancouver.</h3>
            <p className="mt-4">
              <strong>CaseIT 2025</strong> will take place in the beautiful city
              of Vancouver, BC from <strong>February 16 to 21, 2025</strong>.
            </p>
            <p className="mt-4">
              To commemorate our 22nd year, we pledge to shape the next two
              decades by organizing a case competition that will continue
              <strong>fostering industry expertise, cultural diversity, and
              international communities.</strong>

            </p>
          </div>
        </div>
      </section>
      {/* Example of the 3 buttons. edit it when you get to it*/}
      {/* <SquareButton
        variant="black"
        text="CASEIT History"
        subtext="Learn about the CaseIT evolution"
        link="/history"
      /> */}
    </main>
  );
}
