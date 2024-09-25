import { Metadata } from "next";
import { BgImgLeft } from "@/components/img";
import * as sponsor from "@/content/sponsor_content";
import { ImgRibbonLeft, ImgRibbonRight } from "@/components/imgRibbons";
import { SponsorText, SponsorBanner } from "@/components/text";
import { RoundedButton } from "@/components/buttons";

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
            title={sponsor.sponsorOppsText.header2}
            subtext={sponsor.sponsorOverviewText.subtext}
            text={sponsor.sponsorOverviewText.desc}
          >
            <div className="flex flex-col space-y-[2vh] md:flex-row md:space-y-0 md:space-x-[2vw]">
              <RoundedButton
                text="Sponsorship Opportunities"
                link="/history"
                variant="outline"
              />
              <RoundedButton
                text="Talk to Our Team"
                link="/history"
                variant="red"
              />
            </div>
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
