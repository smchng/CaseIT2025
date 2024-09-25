import { Metadata } from "next";
import { BgImgCenter } from "@/components/img";
import * as sponsor from "@/content/sponsor_content";
import { ImgRibbonRight } from "@/components/imgRibbons";
import { SponsorShowcaseText } from "@/components/img";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function SponsorShowcase() {
  return (
    <div>
      <section>
        <BgImgCenter>
          <div className="text-header1">
            {sponsor.sponsorShowcaseText.header1}
          </div>
          <div className="text-paragraph">
            {sponsor.sponsorShowcaseText.subtext}
          </div>
        </BgImgCenter>
      </section>
      <section className="flex flex-col space-x-[2vw] space-y-[20vh]">
        {sponsor.sponsorShowcaseText.ribbons.map((item, index) => (
          <div key={index}>
            <ImgRibbonRight
              img={sponsor.sponsorShowcaseText.ribbons[index].img}
              alt={sponsor.sponsorShowcaseText.ribbons[index].alt}
            >
              <SponsorShowcaseText
                text={sponsor.sponsorShowcaseText.ribbons[index].desc}
                title={sponsor.sponsorShowcaseText.ribbons[index].title}
                img={sponsor.sponsorShowcaseText.ribbons[index].logoImg}
                alt={sponsor.sponsorShowcaseText.ribbons[index].logoAlt}
              />
            </ImgRibbonRight>
          </div>
        ))}
      </section>
    </div>
  );
}
