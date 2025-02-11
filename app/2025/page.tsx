import { Metadata } from "next";
import caseitChair from "@/public/imgs/caseitChair.jpg";
import sponsor from "@/public/imgs/2025_sponsor.png";
import discover from "@/public/imgs/2025_discover.png";
import { BgImgCenter } from "@/components/img";
import * as content from "@/content/2025_content";
import { Stats } from "../../components/2025components/Stats";
import { CaseItEvent } from "../../components/2025components/CaseItEvent";
import { CaseItCountdown } from "../../components/2025components/CaseItCountdown";
import { ArrowButton } from "@/components/buttons";
import banner from "@/public/imgs/banners/2025_banner.png";
import { ImgButton2025 } from "@/components/2025components/ImgButton2025";
import { Results } from "@/components/2025components/results";

export const metadata: Metadata = {
  title: "CaseIT 2025",
  description: "Learn more about our company and team.",
};

export default function CaseIt2025() {
  return (
    <div>
      <section id="2025" className="">
        <BgImgCenter img={banner}>
          <div className="text-header1 pb-8">
            {content.caseit2025Text.header1}
          </div>
          <div className="w-full sm:w-[60vw] md:w-[80vw] lg:w-[90vw] xl:w-[80%]">
            <CaseItCountdown />
          </div>
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
          {content.content.section_2_Pargraph}
        </div>
      </section>
      {/* COMPETITION INFORMATION */}
      <section className="flex flex-col justify-center items-center px-4 md:px-8 xl:px-20 md:mx-auto max-w-[1920px]">
        <h2 className="mx-auto w-fit mt-8 font-semibold text-[2rem]  md:text-[2.5rem]">
          {content.content.section_3_Title}
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-5 md:grid-rows-2 gap-6 sm:max-w-[80vw] lg:max-w-[60vw]">
          <div className="group relative md:row-span-2 md:col-span-2 aspect-video md:aspect-[0] ">
            <ImgButton2025
              img={caseitChair}
              alt={"case it chair"}
              text={"Chair's Welcome"}
              link={"/2025/chair"}
            />
          </div>
          <div className="relative group md:col-start-3 md:col-span-3 md:aspect-[2]">
            <ImgButton2025
              img={sponsor}
              alt={"2025 Sponsors"}
              text={"2025 Sponsors"}
              link={"/sponsor/Sponsor-Overview"}
            />
          </div>
          <div className=" group relative md:col-start-3 md:col-span-3 md:aspect-[2]">
            <ImgButton2025
              img={discover}
              alt={"DiscoverIT"}
              text={"DiscoverIT"}
              link={"/2025/DiscoverIT/overview"}
            />
          </div>
        </div>
      </section>
      {/* RESULTS IMAGES */}
      {/* <section className="w-full flex flex-col justify-center items-center pt-[10vh] space-y-12">
        {content.results.map((item, index) => (
          <div key={index}>
            <Results img={item.img} alt={item.alt} title={item.title} />
          </div>
        ))}
      </section> */}
      test push
      {/* COMPETITION INFORMATION */}
      <section className=" mt-24 gap-4 flex flex-col items-center">
        <h2 className=" font-semibold text-[2rem]  md:text-[2.5rem]">
          {content.caseit2025Text.header2}
        </h2>
        <CaseItEvent />
        <p className="text-paragraph  p-7">
          {content.caseit2025Text.disclaimer}
        </p>
      </section>
      <section className="w-full flex justify-center mt-6 py-[10vh]">
        {/* Hidden square buttons  */}
        {/* <div className="flex hidden md:flex items-center justify-center gap-4">
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
        </div> */}
        <section className="md:hidden flex justify-center mx-auto scroll-smooth py-[7vh]">
          <ArrowButton link="#2025" />
        </section>
      </section>
    </div>
  );
}
