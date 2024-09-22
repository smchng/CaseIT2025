import { Metadata } from "next";
import { BgImgLeft } from "@/components/text&img/img";
import * as sponsorText from "@/content/sponsor_content";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function SponsorOverview() {
  return (
    <div>
      <section>
        <BgImgLeft>
          <div className="text-header2">
            {sponsorText.sponsorOppsText.header2}
          </div>{" "}
          <div className="text-paragraph">
            {sponsorText.sponsorShowcaseText.subtext}
          </div>
        </BgImgLeft>
      </section>
    </div>
  );
}
