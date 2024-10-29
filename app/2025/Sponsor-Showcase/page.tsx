import { Metadata } from "next";
import { BgImgCenter } from "@/components/img";
import * as sponsor from "@/content/sponsor_content";
import { ImgRibbonRight } from "@/components/imgRibbons";
import { SponsorShowcaseRibbons, TechSponsor } from "@/components/sponsorItems";
import { RoundedButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function SponsorShowcase() {
  return (
    <div>
      <section>
        <BgImgCenter>
          <div className="text-start md:text-center">
            <div className="text-header1">
              {sponsor.sponsorShowcaseText.header1}
            </div>
            <div className="text-paragraph pb-[3vh] md:pb-[5vh] md:max-w-[55vw]">
              {sponsor.sponsorShowcaseText.subtext}
            </div>
            <RoundedButton
              text="Learn More About CaseIT"
              link="/contact"
              variant="red"
            />
          </div>
        </BgImgCenter>
      </section>
      <section className="flex flex-col space-y-[20vh]">
        {sponsor.sponsorShowcaseText.ribbons.map((item, index) => (
          <div key={index}>
            <ImgRibbonRight
              img={sponsor.sponsorShowcaseText.ribbons[index].img}
              alt={sponsor.sponsorShowcaseText.ribbons[index].alt}
            >
              <SponsorShowcaseRibbons
                text={sponsor.sponsorShowcaseText.ribbons[index].desc}
                title={sponsor.sponsorShowcaseText.ribbons[index].title}
                img={sponsor.sponsorShowcaseText.ribbons[index].logoImg}
                alt={sponsor.sponsorShowcaseText.ribbons[index].logoAlt}
              />
            </ImgRibbonRight>
          </div>
        ))}
      </section>

      <section className="pt-[10vh]"> 
        <TechSponsor
          title={sponsor.techSponsorContent.header1}
          subtext={sponsor.techSponsorContent.subtext}
          text={sponsor.techSponsorContent.text}
        />
      </section>



      <section className="bg-[#FAFAFA] pb-[10vh]">
        <div className="flex flex-col mx-auto text-center content-center max-w-[52%] pt-[15vh]">
          <div className="text-header2 text-red">
            {sponsor.sponsorThankContent.header1}
          </div>
          <div className="text-paragraph pt-4">
            {sponsor.sponsorThankContent.text}
          </div>
        </div>
        <div className="flex mx-auto text-paragraph font-bold text-center justify-center max-w-[60vw] md:max-w-[100vw] pt-8">
          <p>Interested in partnering with CaseIT 2026? Visit our <span className="text-red" > Sponsorship </span> page to learn more.</p>
        </div>
        <div className="flex mx-auto justify-center mt-8">
          <RoundedButton
            text="Explore Sponsorship Opportunities"
            link="/sponsor/Sponsorship-Opportunities"
            variant="red"
            />
        </div>
        
      </section>
    </div>
  );
}
