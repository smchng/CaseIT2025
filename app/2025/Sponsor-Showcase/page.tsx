import { Metadata } from "next";
import { BgImgCenter } from "@/components/img";
import * as sponsor from "@/content/sponsor_content";
import { ImgRibbonRight } from "@/components/imgRibbons";
import { SponsorShowcaseRibbons, TechSponsor, SponsorTiles, SilverSponsor } from "@/components/sponsorItems";
import { RoundedButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function SponsorShowcase() {
  return (
    <div>
      <section>
        <BgImgCenter>
          <div className="text-start md:text-center">
            <div className="text-header1">
              {sponsor.sponsorShowcaseText.header1}
            </div>
            <div className="text-paragraph pb-[3vh] md:pb-[5vh] md:max-w-[55vw]">
              {sponsor.sponsorShowcaseText.subtext}
            </div>
            <RoundedButton
              text="Learn More About CaseIT"
              link="/contact"
              variant="red"
            />
          </div>
        </BgImgCenter>
      </section>
      <section className="flex flex-col space-y-[20vh]">
        {sponsor.sponsorShowcaseText.ribbons.map((item, index) => (
          <div key={index}>
            <ImgRibbonRight
              img={sponsor.sponsorShowcaseText.ribbons[index].img}
              alt={sponsor.sponsorShowcaseText.ribbons[index].alt}
            >
              <SponsorShowcaseRibbons
                text={sponsor.sponsorShowcaseText.ribbons[index].desc}
                title={sponsor.sponsorShowcaseText.ribbons[index].title}
                img={sponsor.sponsorShowcaseText.ribbons[index].logoImg}
                alt={sponsor.sponsorShowcaseText.ribbons[index].logoAlt}
              />
            </ImgRibbonRight>
          </div>
        ))}
      </section>

      <section className="pt-[10vh]"> 
        <TechSponsor
          title={sponsor.techSponsorContent.header1}
          subtext={sponsor.techSponsorContent.subtext}
          text={sponsor.techSponsorContent.text}
        />
      </section>
      <section className="pt-[10vh] max-w-[95vw] mx-auto flex flex-col md:flex-row md:justify-around "> 
        <div className="flex justify-center">
        <SilverSponsor
          title={sponsor.silverSponsorContent.header1}
          text={""}
        />
        </div>
        <div className="hidden md:flex justify-center">
        <SilverSponsor
          title={sponsor.silverSponsorContent.header1}
          text={""}
        />
        </div>
        <div className="flex md:hidden justify-center">
        <SilverSponsor
          title={sponsor.silverSponsorContent.header1}
          text={""}
          showHeader={false}
        />
        </div>
      </section>
      <section className="flex flex-col justify-center pt-[5vh]">
      <div className="text-header3 text-red text-center py-[5vh]">
            {sponsor.pastSponsorTileContent.title}
      </div>
        <div className="max-w-[80vw] hidden md:grid mx-auto grid-cols-2 grid-rows-4 grid-flow-row gap-[1.644rem] md:gap-[6vh] md:grid-cols-4 md:grid-rows-2 lg:gap-[15vh] lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3">
          {sponsor.pastSponsorTileContent.sponsors.map((item, index) => (
            <div key={index}>
              <SponsorTiles
                img={sponsor.pastSponsorTileContent.sponsors[index].img}
                text={""}
                alt={sponsor.pastSponsorTileContent.sponsors[index].alt}
              />
            </div>
          ))}
        </div>
        <div className="max-w-[80vw] md:hidden mx-auto grid grid-cols-2 grid-rows-6 grid-flow-row gap-[1.644rem] md:gap-[6.5rem] md:grid-cols-3 md:grid-rows-4 lg:gap-[6.5rem] lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3">
          {sponsor.pastSponsorTileContent.sponsors.map((item, index) => (
            <div key={index}>
              <SponsorTiles
                img={sponsor.pastSponsorTileContent.sponsors[index].img}
                text={sponsor.pastSponsorTileContent.sponsors[index].text}
                alt={sponsor.pastSponsorTileContent.sponsors[index].alt}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#FAFAFA] pb-[10vh]">
        <div className="flex flex-col mx-auto text-center content-center max-w-[52%] pt-[15vh]">
          <div className="text-header2 text-red">
            {sponsor.sponsorThankContent.header1}
          </div>
          <div className="text-paragraph pt-4">
            {sponsor.sponsorThankContent.text}
          </div>
        </div>
        <div className="flex mx-auto text-paragraph font-bold text-center justify-center max-w-[60vw] md:max-w-[100vw] pt-8">
          <p>Interested in partnering with CaseIT 2026? Visit our <span className="text-red"  > Sponsorship </span> page to learn more.</p>
        </div>
        <div className="flex mx-auto justify-center mt-8">
          <RoundedButton
            text="Explore Sponsorship Opportunities"
            link="/sponsor/Sponsorship-Opportunities"
            variant="red"
            />
        </div>
        
      </section>
    </div>
  );
}
