import { Metadata } from "next";
import * as re from "@/content/recap_content";
import { ImgRibbonLeft, ImgRibbonRight } from "@/components/imgRibbons";
import { BgImgCenter } from "@/components/img";
import { RecapText } from "@/components/text";
import { RoundedButton } from "@/components/buttons";

export const metadata: Metadata = {
  title: "2024 Recap",
  description: "Learn more about our company and team.",
};

export default function Recap2024() {
  return (
    <div>
      <section>
        <BgImgCenter>
          <div className="text-header1 pb-[5vh]">{re.recapText.header1}</div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center md:space-x-[20px] ">
            <div>
              <RoundedButton
                text="2024 Media Gallery"
                link="/contact"
                variant="red"
              />
            </div>
            <div className="mb-4 md:mb-0">
              <RoundedButton
                text="View CaseIT 2024 Recap Video"
                link="/contact"
                variant="black"
              />
            </div>
          </div>
        </BgImgCenter>
      </section>
      <section className="flex flex-col space-y-[10vh] md:space-y-[20vh]">
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
      </section>
    </div>
  );
}
