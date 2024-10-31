import { Metadata } from "next";
import { BgImgLeft } from "@/components/img";
import * as sponsor from "@/content/sponsor_content";
import {
  SponsorText,
  SponsorBanner,
  SponsorOpCards,
} from "@/components/sponsorItems";
import { MobileButtons } from "@/components/sponsorItems";
import { RoundedButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Sponsorship Opportunities",
  description: "Learn more about our company and team.",
};

export default function SponsorOpps() {
  return (
    <div>
      <section id="SponsorshipOpportunities">
        <BgImgLeft>
          <SponsorBanner
            title={sponsor.sponsorOppsText.header2}
            subtext={sponsor.sponsorOppsText.subtext}
            text={sponsor.sponsorOppsText.desc}
          >
            <MobileButtons text="Overview" link="/sponsor/Sponsor-Overview" />
          </SponsorBanner>
        </BgImgLeft>
      </section>
      <section>
        <div>
          {sponsor.sponsorOpportunitiesContent.sponsOp.map((item, index) => (
            <div key={index}>
              <SponsorOpCards
                title={sponsor.sponsorOpportunitiesContent.sponsOp[index].title}
                subtext={
                  sponsor.sponsorOpportunitiesContent.sponsOp[index].subtext
                }
                text={sponsor.sponsorOpportunitiesContent.sponsOp[index].text}
                img={sponsor.sponsorOpportunitiesContent.sponsOp[index].img}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="md:hidden flex justify-center mx-auto scroll-smooth">
        <RoundedButton
          text="Back to top"
          link="#SponsorshipOpportunities"
          variant="red"
        />
      </section>
    </div>
  );
}
