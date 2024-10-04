import { Metadata } from "next";
import { BgImgLeft } from "@/components/img";
import * as sponsor from "@/content/sponsor_content";
import { SponsorText, SponsorBanner } from "@/components/text";
import { MobileButtons } from "@/components/sponsorBanner";

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
    </div>
  );
}
