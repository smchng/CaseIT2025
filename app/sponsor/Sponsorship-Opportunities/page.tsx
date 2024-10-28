import { Metadata } from "next";
import { BgImgLeft } from "@/components/img";
import * as sponsor from "@/content/sponsor_content";
import { SponsorText, SponsorBanner, SponsorOpportunities } from "@/components/sponsorItems";
import { MobileButtons } from "@/components/sponsorItems";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function SponsorOpps() {
  return (
    <div>
      <section>
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
        <SponsorOpportunities 
          title={sponsor.sponsorOpportunitiesContent.sponsOp[0].title} 
          subtext={sponsor.sponsorOpportunitiesContent.sponsOp[0].subtext} 
          text={sponsor.sponsorOpportunitiesContent.sponsOp[0].text}
          img={"/imgs/sponsorIcon1.png"}
          >
          

        </SponsorOpportunities>
        <SponsorOpportunities 
          title={sponsor.sponsorOpportunitiesContent.sponsOp[0].title} 
          subtext={sponsor.sponsorOpportunitiesContent.sponsOp[0].subtext} 
          text={sponsor.sponsorOpportunitiesContent.sponsOp[0].text}
          img={"/imgs/sponsorIcon2.png"}
          >

        </SponsorOpportunities>
        <SponsorOpportunities 
          title={sponsor.sponsorOpportunitiesContent.sponsOp[0].title} 
          subtext={sponsor.sponsorOpportunitiesContent.sponsOp[0].subtext} 
          text={sponsor.sponsorOpportunitiesContent.sponsOp[0].text}
          img={"/imgs/sponsorIcon3.png"}>

        </SponsorOpportunities>
      </section>
    </div>
  );
}
