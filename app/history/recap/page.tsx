import { Metadata } from "next";
import * as re from "@/content/recap_content";
import { ImgRibbonLeft, ImgRibbonRight } from "@/components/imgRibbons";
import { RecapCards } from "@/components/recapItems";
import { BgImgCenter } from "@/components/img";
import { RecapText } from "@/components/text";
import { RoundedButton, ArrowButton } from "@/components/buttons";
import banner from "@/public/imgs/banners/recap_banner.png";
export const metadata: Metadata = {
  title: "2024 Recap",
  description: "Learn more about our company and team.",
};

export default function Recap2024() {
  return (
    <div>
      <section id="recap">
        <BgImgCenter img={banner}>
          <div className="text-header1 pb-[5vh]">{re.recapText.header1}</div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center md:space-x-[20px] ">
            <div>
              <RoundedButton
                text="2024 Media Gallery"
                link="https://drive.google.com/drive/u/4/folders/1mkOBqwmWtPPuD7FvBlQuO974As3zuGAS"
                variant="red"
              />
            </div>
            <div className="mb-4 md:mb-0">
              <RoundedButton
                text="View CaseIT 2024 Recap Video"
                link="/history/media"
                variant="black"
              />
            </div>
          </div>
        </BgImgCenter>
      </section>
      <section className="flex flex-col space-y-[3rem] md:space-y-[4rem]">
        {re.recapText.positions.map((item, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <ImgRibbonRight
                img={re.recapText.positions[index].img}
                alt={re.recapText.positions[index].alt}
              >
                <RecapText
                  subtext={re.recapText.positions[index].day}
                  text={re.recapText.positions[index].desc}
                  title={re.recapText.positions[index].title}
                />
                {re.recapText.positions[index].title2 && (
                  <RecapText
                    text={re.recapText.positions[index].desc2}
                    title={re.recapText.positions[index].title2}
                  />
                )}
              </ImgRibbonRight>
            ) : (
              <ImgRibbonLeft
                img={re.recapText.positions[index].img}
                alt={re.recapText.positions[index].alt}
              >
                <RecapText
                  subtext={re.recapText.positions[index].day}
                  text={re.recapText.positions[index].desc}
                  title={re.recapText.positions[index].title}
                />
                {re.recapText.positions[index].title2 && (
                  <RecapText
                    text={re.recapText.positions[index].desc2}
                    title={re.recapText.positions[index].title2}
                  />
                )}
              </ImgRibbonLeft>
            )}
          </div>
        ))}
        <div className="flex flex-col mx-auto text-center ">
          <text className="text-red text-header4">Award</text>
          <text className="text-header3">CaseIT 2024 Placements</text>
        </div>
        <div className="grid mx-auto max-w-[80vw] md:max-w-[60vw] md:grid-cols-2 2xl:grid-cols-2 gap-[1.644rem]">
          {re.recapCardText.map((item, index) => (
            <div key={index}>
              <RecapCards
                title={re.recapCardText[index].title}
                subtext={re.recapCardText[index].subtext}
                img={re.recapCardText[index].img}
              />
            </div>
          ))}
        </div>
        <div className="flex justify-center pb-[15vh]">
          <ArrowButton link="#recap" />
        </div>
      </section>
    </div>
  );
}
