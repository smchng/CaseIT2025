import { Metadata } from "next";
import { BgImgCenter } from "@/components/text&img/img";
import * as sponsorText from "@/content/sponsor_content";

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
            {sponsorText.sponsorShowcaseText.header1}
          </div>
          <div className="text-paragraph">
            {sponsorText.sponsorShowcaseText.subtext}
          </div>
        </BgImgCenter>
      </section>
    </div>
  );
}
