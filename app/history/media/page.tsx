import { Metadata } from "next";
import { BgImgLeft } from "@/components/img";
import { RoundedButton } from "@/components/buttons";
import { Gallery } from "@/components/mediaItems";
import * as media from "@/content/media_content";
import {
  SponsorBanner,
  MobileButtons,
} from "@/components/sponsorItems";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function Media() {
  return (
    <div>
      <section>
        <BgImgLeft>
        <SponsorBanner
            title={media.mediaText.header1}
            text={media.mediaText.paragraph}
          />
          {/* { <div className="text-header1">{media.mediaText.header1}</div>{" "}
          <p className="pb-[4vh]">
            <div className="text-paragraph">{media.mediaText.paragraph} </div>
          </p> */}
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
      <section>
      <div className="grid mx-auto max-w-[80%] md:grid-cols-2 md:grid-rows-6 gap-[1.644rem]">
          {media.galleryText.map((item, index) => (
            <div key={index}>
              <Gallery
                title={media.galleryText[index].title}
                subtext={media.galleryText[index].subtext}
                img={media.galleryText[index].img}
              />
            </div>
          ))}
        </div>
        
      </section>
    </div>
  );
}
