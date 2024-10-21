import { Metadata } from "next";
import caseitChair from "@/public/imgs/caseitChair.png";
import sponsor from "@/public/imgs/2025_sponsor.png";
import discover from "@/public/imgs/2025_discover.png";
import { BgImgCenter } from "@/components/img";
import Image from "next/image";
import * as caseitText from "@/content/2025_content";
import { Stats } from "./2025components/Stats";
import { CaseItEvent } from "./2025components/CaseItEvent";
import { CaseItCountdown } from "./2025components/CaseItCountdown";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function CaseIt2025() {
  return (
    <div>
      <section>
        <BgImgCenter>
          <div className="text-header1">
            {caseitText.caseit2025Text.header1}
          </div>
            <CaseItCountdown/>
        </BgImgCenter>
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
          <p className="max-w-[65ch] md:text-center mt-4 md:mt-8">
            CaseIT is back and better, stronger, and faster than ever. With our
            22nd iteration, the Organizing Committee promises a competition full
            of fun, challenges, leaving you with double the memories! We are
            excited to welcome top business technology undergraduates and their
            faculty advisors from around the world to the beautify city of
            Vancouver from <strong>February 16 to 21, 2025</strong>.
          </p>
        </div>
      </section>
      <section className="px-6 md:px-12 lg:px-48">
        <h2 className="mx-auto w-fit text-[1.125rem] md:text-[1.5rem] font-medium">Competition Information</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className=" md:row-span-2 md:col-span-2 aspect-video md:aspect-[0] ">
            <Image
              src={caseitChair}
              className="brightness-75 hover:brightness-100 duration-300 object-cover object-[0%_20%] md:object-[50%_50%] h-full "
              alt="chair women"
              sizes=""
            />
          </div>
          <div className="md:col-start-3 md:col-span-3 md:aspect-[2]">
            <Image
              src={sponsor}
              className="brightness-75 hover:brightness-100 duration-300 object-cover w-full h-full "
              alt="chair women"
              sizes=""
            />
          </div>
          <div className=" md:col-start-3 md:col-span-3 md:aspect-[2]">
            <Image
              src={discover}
              className="brightness-75 hover:brightness-100 duration-300 object-cover  w-full h-full "
              alt="chair women"
              sizes=""
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center">
        <h2>Competition Week Schedule</h2>
        <CaseItEvent/>
      </section>
    </div>
  );
}
