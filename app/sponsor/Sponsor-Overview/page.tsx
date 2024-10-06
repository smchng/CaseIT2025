import { Metadata } from "next";
import { BgImgLeft } from "@/components/img";
import * as sponsor from "@/content/sponsor_content";
import { ImgRibbonLeft, ImgRibbonRight } from "@/components/imgRibbons";
import { SponsorText, SponsorBanner } from "@/components/text";
import { MobileButtons, SponsorTiles } from "@/components/sponsorBanner";

export const metadata: Metadata = {
  title: "Sponsor Overview",
  description: "Learn more about our company and team.",
};

export default function SponsorOverview() {
  return (
    <div>
      
      <section>
        <BgImgLeft>
          <SponsorBanner
            title={sponsor.sponsorOverviewText.header2}
            subtext={sponsor.sponsorOverviewText.subtext}
            text={sponsor.sponsorOverviewText.desc}
          >
            <MobileButtons
              text="Sponsorship Opportunities"
              link="/sponsor/Sponsorship-Opportunities"
            />
          </SponsorBanner>
        </BgImgLeft>
      </section>
      <section className="flex flex-col justify-center pb-[5vh]">
        <div className="text-header2 text-center md:pb-[4vh]">
          {sponsor.sponsorTileContent.sectionTitle[0].title}
        </div>
        <div className="max-w-[80vw] mx-auto grid grid-cols-2 grid-rows-6 grid-flow-row gap-[1.644rem] md:gap-[6.5rem] md:grid-cols-3 md:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3">
          {sponsor.sponsorTileContent.sponsors.map((item, index) => (
            <div key={index}>
              <SponsorTiles 
                img={sponsor.sponsorTileContent.sponsors[index].img} 
                text={sponsor.sponsorTileContent.sponsors[index].text} 
                alt={sponsor.sponsorTileContent.sponsors[index].alt}  
              />
            </div>
          ))}
        </div>
      </section>
      <section>
        <div className="text-header2 text-center pb-[5rem] md:pb-[7.5rem]">
          {sponsor.sponsorOverviewText.sectionTitle[0].title}
        </div>
        <div className="md:flex md:flex-col md:space-x-[2vw] md:space-y-[20vh]">
          {sponsor.sponsorOverviewText.ribbons.map((item, index) => (
            <div key={index}>
              {index % 2 === 0 ? (
                <ImgRibbonRight
                  img={sponsor.sponsorOverviewText.ribbons[index].img}
                  alt={sponsor.sponsorOverviewText.ribbons[index].alt}
                >
                  <SponsorText
                    text={sponsor.sponsorOverviewText.ribbons[index].desc}
                    title={sponsor.sponsorOverviewText.ribbons[index].title}
                  />
                </ImgRibbonRight>
              ) : (
                <ImgRibbonLeft
                  img={sponsor.sponsorOverviewText.ribbons[index].img}
                  alt={sponsor.sponsorOverviewText.ribbons[index].alt}
                >
                  <SponsorText
                    text={sponsor.sponsorOverviewText.ribbons[index].desc}
                    title={sponsor.sponsorOverviewText.ribbons[index].title}
                  />
                </ImgRibbonLeft>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
