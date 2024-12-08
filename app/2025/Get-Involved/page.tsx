import { Metadata } from "next";
import { RoundedButton, ArrowButton } from "@/components/buttons";
import { BgImgCenter } from "@/components/img";
import banner from "@/public/imgs/banners/2025_banner.png";
import * as involved from "@/content/involved_content";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Learn more about our company and team.",
};

export default function GetInvolved() {
  return (
    <div>
      <section id="2025">
        <BgImgCenter img={banner}>
          <div>
            <div className="text-redDark text-header4">
              {involved.involvedText.red}
            </div>
            <div className="text-header1 pb-8 max-w-[50vw]">
              {involved.involvedText.header1}
            </div>
          </div>
        </BgImgCenter>
      </section>
    </div>
  );
}
