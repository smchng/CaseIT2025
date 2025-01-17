import { Metadata } from "next";
import { DiscoverITBanner } from "@/components/subpageBanner";
import { TourBento } from "@/components/discoverITItems";
import { tourText } from "@/content/discoverIT_content";

export const metadata: Metadata = {
  title: "DiscoverIT - Tour",
  description: "Learn more about our company and team.",
};

export default function Tour() {
  return (
    <div className="py-[20vh] px-7 md:px-16 xl:px-[15vw]">
      <div className="pb-8">
        <DiscoverITBanner></DiscoverITBanner>
      </div>
      <section className="flex flex-col space-y-8">
        <TourBento
          title={tourText.header2[0]}
          subtext={tourText.subtext[0]}
          img={tourText.img[0]}
          text={tourText.paragraph[0]}
          children={tourText.p2}
        />{" "}
        <TourBento
          title={tourText.header2[1]}
          subtext={tourText.subtext[1]}
          img={tourText.img[1]}
          text={tourText.paragraph[1]}
        />
      </section>
    </div>
  );
}
