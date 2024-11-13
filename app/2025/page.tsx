import { Metadata } from "next";
import caseitChair from "@/public/imgs/caseitChair.png";
import sponsor from "@/public/imgs/2025_sponsor.png";
import discover from "@/public/imgs/2025_discover.png";
import { BgImgCenter } from "@/components/img";
import Image from "next/image";
import * as thiscontent from "@/content/2025_content";
import { Stats } from "../../components/2025components/Stats";
import { CaseItEvent } from "../../components/2025components/CaseItEvent";
import { CaseItCountdown } from "../../components/2025components/CaseItCountdown";
import { ImgButton, SquareButton, ArrowButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function CaseIt2025() {
  return (
    <div>
      <section id="2025">
        <section className="relative mb-[10vh] h-[130vh] md:h-[90vh] w-full">
          <Image
            src="/imgs/Downtown-Vancouver.png" // Fixed image under the text
            alt="Downtown Vancouver"
            className=" object-cover"
            layout="fill" // Ensures the image fills the container
            objectFit="cover"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center mx-auto max-w-[90vw]">
            <div className="text-header1 pb-8">
              {thiscontent.caseit2025Text.header1}
            </div>
            <CaseItCountdown />
          </div>
        </section>
      </section>
      <section className="">
        <div className="flex gap-2 flex-col md:items-center p-8">
          <h2 className="text-redDark font-semibold text-[1.125rem] lg:text-[1.75rem]">
            22nd iteration
          </h2>
          <div className="flex flex-col md:flex-row md:justify-center md:gap-16 lg:gap-24">
            <Stats title="The engagement" />
            <Stats title="The suprises" />
            <Stats title="The memories" />
          </div>
          {thiscontent.content.section_2_Pargraph}
        </div>
      </section>
      <section className="px-6 md:px-12 lg:px-48">
        <h2 className="mx-auto w-fit mt-8 font-semibold text-[2rem]  md:text-[2.5rem]">
          {thiscontent.content.section_3_Title}
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="group relative md:row-span-2 md:col-span-2 aspect-video md:aspect-[0] ">
            <div className="absolute z-40 top-0 left-10 h-2 bg-redDark transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full w-16"></div>
            <Image
              src={caseitChair}
              className="brightness-75 hover:brightness-100 duration-300 object-cover object-[0%_20%] md:object-[50%_50%] h-full "
              alt="chair women"
              sizes=""
            />
            <h3 className="text-white text-xl absolute bottom-0 p-4 font-semibold">
              Chair's Welcome
            </h3>
          </div>
          <div className="relative group md:col-start-3 md:col-span-3 md:aspect-[2]">
            <div className="absolute z-40 top-0 left-10 h-2 bg-redDark transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full w-16"></div>
            <Image
              src={sponsor}
              className="brightness-75 hover:brightness-100 duration-300 object-cover w-full h-full "
              alt="chair women"
              sizes=""
            />
            <h3 className="text-white text-xl absolute bottom-0 p-4 font-semibold">
              2025 Sponsors
            </h3>
          </div>
          <div className=" group relative md:col-start-3 md:col-span-3 md:aspect-[2]">
            <div className="absolute z-40 top-0 left-10 h-2 bg-redDark transition-all duration-300 ease-in-out group-hover:left-0 group-hover:w-full w-16"></div>
            <Image
              src={discover}
              className="brightness-75 hover:brightness-100 duration-300 object-cover  w-full h-full "
              alt="chair women"
              sizes=""
            />
            <h3 className="text-white text-xl absolute bottom-0 p-4 font-semibold">
              DiscoverIt
            </h3>
          </div>
        </div>
      </section>
      <section className=" mt-24 gap-4 flex flex-col items-center ">
        <h2 className=" font-semibold text-[2rem]  md:text-[2.5rem]">
          Event Schedule
        </h2>
        <CaseItEvent />
      </section>

      <section className="w-full flex justify-center mt-6 py-[10vh]">
        <div className="flex hidden md:flex items-center justify-center gap-4">
          <SquareButton
            variant="black"
            text="Rulebook"
            subtext="Learn about the rules this year."
            link="/history"
          />
          <SquareButton
            variant="black"
            text="Competitor Handbook"
            subtext="Prepare fo the competition."
            link="/history"
          />
          <SquareButton
            variant="black"
            text="Livestreams"
            subtext="Tune into CaseIT signature events."
            link="/history"
          />
        </div>
        <section className="md:hidden flex justify-center mx-auto scroll-smooth py-[7vh]">
          <ArrowButton link="#2025" />
        </section>
      </section>
    </div>
  );
}
