import { Metadata } from "next";
import { BgImgLeft } from "@/components/img";
import * as sponsor from "@/content/sponsor_content";
import { ImgRibbonLeft, ImgRibbonRight } from "@/components/imgRibbons";
import { SponsorText, SponsorBanner } from "@/components/sponsorItems";
import { MobileButtons } from "@/components/sponsorItems";

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
      <section>
        <div className="text-header2 text-center md:pb-[8vh]">
          {sponsor.sponsorOverviewText.sectionTitle[0].title}
        </div>{" "}
        <div className="md:flex md:flex-col md:space-y-[20vh]">
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
