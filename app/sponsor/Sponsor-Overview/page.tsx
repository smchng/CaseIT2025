import { Metadata } from "next";
import { BgImgLeft } from "@/components/img";
import * as sponsor from "@/content/sponsor_content";
import { ImgRibbonLeft, ImgRibbonRight } from "@/components/imgRibbons";
import { SponsorText } from "@/components/text";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function SponsorOverview() {
  return (
    <div>
      <section>
        <BgImgLeft>
          <div className="text-header2">{sponsor.sponsorOppsText.header2}</div>{" "}
          <div className="text-paragraph">
            {sponsor.sponsorShowcaseText.subtext}
          </div>
        </BgImgLeft>
      </section>
      <section className="md:flex md:flex-col md:space-x-[2vw] md:space-y-[20vh]">
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
