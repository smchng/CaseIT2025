import { Metadata } from "next";
import { BgImgLeft } from "@/components/img";
import { RoundedButton } from "@/components/buttons";
import * as media from "@/content/media_content";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function Media() {
  return (
    <div>
      <section>
        <BgImgLeft>
          <div className="text-header1">{media.mediaText.header1}</div>{" "}
          <p className="pb-[4vh]">  
            <div className="text-paragraph">{media.mediaText.paragraph} </div>
          </p>
          <div className="flex space-x-[3vw]">
            <RoundedButton
              text={media.buttonText[0].text}
              link={media.buttonText[0].link}
              variant="red"
            />
            <RoundedButton
              text={media.buttonText[1].text}
              link={media.buttonText[1].link}
              variant="black"
            />
          </div>
        </BgImgLeft>
      </section>
    </div>
  );
}
