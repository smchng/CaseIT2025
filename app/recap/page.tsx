import { Metadata } from "next";
import * as re from "@/content/recap_content";
import { RecapRibbonLeft, RecapRibbonRight } from "@/components/imgRibbons";
import { BgImgCenter } from "@/components/text&img/img";

export const metadata: Metadata = {
  title: "2024 Recap",
  description: "Learn more about our company and team.",
};

export default function Recap2024() {
  return (
    <div>
      <section>
        <BgImgCenter>
          <div className="text-header1">{re.recapText.header1}</div>{" "}
          <p className="text-red font-bold pb-[4vh]">
            <div className="text-paragraph">{re.recapText.paragraph} </div>
          </p>
        </BgImgCenter>
      </section>
      <section className="flex flex-col space-x-[2vw] space-y-[20vh]">
        {re.recapText.positions.map((item, index) => (
          <div key={index}>
            {index % 2 === 0 ? (
              <RecapRibbonRight
                day={re.recapText.positions[index].day}
                img={re.recapText.positions[index].img}
                title={re.recapText.positions[index].title}
                text={re.recapText.positions[index].desc}
                subtext={re.recapText.positions[index].names}
                alt={re.recapText.positions[index].alt}
              />
            ) : (
              <RecapRibbonLeft
                day={re.recapText.positions[index].day}
                img={re.recapText.positions[index].img}
                title={re.recapText.positions[index].title}
                text={re.recapText.positions[index].desc}
                subtext={re.recapText.positions[index].names}
                alt={re.recapText.positions[index].alt}
              />
            )}
          </div>
        ))}
      </section>
    </div>
  );
}
