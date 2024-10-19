import { Metadata } from "next";
import { BgImgLeft } from "@/components/img";
import * as sponsor from "@/content/sponsor_content";
import { ImgRibbonLeft, ImgRibbonRight } from "@/components/imgRibbons";
import {
  SponsorText,
  SponsorBanner,
  SponsorTiles,
  MobileButtons,
} from "@/components/sponsorItems";
import { RoundedButton } from "@/components/buttons";

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
        <div className="text-header2 text-center pb-[10vh]">
          {sponsor.sponsorTileContent.sectionTitle[0].title}
        </div>
        <div className="max-w-[80vw] mx-auto grid grid-cols-2 grid-rows-6 grid-flow-row gap-[1.644rem] md:gap-[6.5rem] md:grid-cols-3 md:grid-rows-4 lg:gap-[6.5rem] lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3">
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
        <div className="text-header2 text-center py-[5rem] md:py-[7.5rem]">
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
      <section className="flex justify-center pt-[7rem]">
        <div>
          <div className="flex flex-col text-center max-w-[80vw]">
            <h2 className="text-header2">What can I sponsor?</h2>
            <p className="py-[1.6rem] max-w-[100vw] xs:max-w-[30vw] md:max-w-[30vw] self-center">
              Explore the CaseIt 2024 Financial, Technological, and In-Kind
              oportunities by checking out the link below!
            </p>
            <RoundedButton
              text="Explore Sponsorship Opportunities"
              link="/sponsor/Sponsorship-Opportunities"
              variant="outline"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
