import { Metadata } from "next";
import { RoundedButton, ArrowButton } from "@/components/buttons";
import { BgImgCenter } from "@/components/img";
import banner from "@/public/imgs/banners/2025_banner.png";
import * as involved from "@/content/involved_content";
import Carousel from "@/components/Carousel";


export const metadata: Metadata = {
  title: "Get Involved",
  description: "Learn more about our company and team.",
};

export default function GetInvolved() {
  return (
    <div>
      <section>
        <BgImgCenter img={banner}>
          <div className="flex flex-col items-center">
            <div className="text-redDark text-center text-header4">
              {involved.involvedText.red}
            </div>
            <div className="text-header1 text-center pb-8 max-w-[50vw]">
              {involved.involvedText.header1}
            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <RoundedButton
              text="Apply now"
              link="/history"
              variant="black"
              state="disabled"
              />
              <RoundedButton
              text="View 2025 Recruitment Package"
              link="https://drive.google.com/file/d/1HCsRQMqF7GNQhONxv8tj46uEhxcn__Mt/view"
              variant="black"
            />
              </div>
          </div>
        </BgImgCenter>
      </section>
      <section className="  mt-24 ">
        <h2 className=" text-header2 ml-8 lg:ml-32 mb-12 max-w-[24ch] tracking-tight leading-tight">How has CaseIT impacted students’ university journey?</h2>
        <Carousel/>


      </section>
      <section className="flex flex-col justify-center items-center gap-6 py-28 px-4">
        <h2 className="text-header2 text-center">Open Positions</h2>
        <p className="text-lg text-center max-w-[55ch] ">There are no open positions for now! Follow @caseitsfu on Instagram to get the latest updates on our hiring initiatives!</p>
        <RoundedButton
          text="Our Instagram"
          link="https://www.instagram.com/caseitsfu/?hl=en"
          variant="black"
          />
      </section>
    </div>
  );
}
