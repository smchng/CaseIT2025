import { Metadata } from "next";
import { BgImgLeft } from "@/components/img";
import * as sponsor from "@/content/sponsor_content";
import { ImgRibbonLeft, ImgRibbonRight } from "@/components/imgRibbons";
import { SponsorText, SponsorBanner } from "@/components/text";
import { MobileButtons } from "@/components/sponsorBanner";

export const metadata: Metadata = {
  title: "Media Gallery",
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
      <section className="flex flex-col space-x-[2vw] space-y-[20vh]">
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
      </section>
    </div>
  );
}
