import { Metadata } from "next";
import { RoundedButton, ArrowButton } from "@/components/buttons";
import { BgImgCenter } from "@/components/img";
import banner from "@/public/imgs/banners/2025_banner.png";
import * as involved from "@/content/involved_content";
import { GetInvolvedCard } from "@/components/GetInvolvedCard";
import { memberData } from "@/content/GetInvolved_content";

export const metadata: Metadata = {
  title: "Get Involved",
  description: "Learn more about our company and team.",
};

export default function GetInvolved() {
  return (
    <div>
      <section>
        <BgImgCenter img={banner}>
          <div>
            <div className="text-redDark text-header4">
              {involved.involvedText.red}
            </div>
            <div className="text-header1 pb-8 max-w-[50vw]">
              {involved.involvedText.header1}
            </div>
            <div className="flex flex-row items-center justify-center gap-2">
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
        <h2 className="w-full text-header2 ml-8 lg:ml-32 mb-12 max-w-[24ch] tracking-tight leading-tight">How has CaseIT impacted students’ university journey?</h2>

        <div className="relative ">
        <div className="w-[200px] h-full hidden lg:block absolute top-0 left-0 bg-white/100  [mask-image:linear-gradient(90deg,_rgba(0,0,0,1)_10%,_rgba(255,255,255,0)_60%)]  backdrop-blur-[10px]" ></div>
        {/* <div className="w-[300px] h-full absolute top-0 right-0 rotate-180 bg-white/100  [mask-image:linear-gradient(90deg,_rgba(0,0,0,1)_15%,_rgba(255,255,255,0)_80%)]  backdrop-blur-[4px]" ></div> */}

        <div className="pl-8  lg:pl-32 flex flex-row gap-8 overflow-scroll p-3">
        {memberData.map((member, index) => (
          <>
          <GetInvolvedCard key={index} image={member.img} name={member.name} quote={member.quote} position={member.position}/>
          </>
        ))}
        </div>
        </div>
      </section>
      <section className="flex flex-col justify-center items-center gap-6 py-28">
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
