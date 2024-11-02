import { Metadata } from "next";
import { BgImgLeft } from "@/components/img";
import { RoundedButton } from "@/components/buttons";
import { GalleryCards } from "@/components/mediaItems";
import * as media from "@/content/media_content";
import { SponsorBanner, MobileButtons } from "@/components/sponsorItems";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function Media() {
  return (
    <div>
      <section id="MediaTop" className="relative w-full py-[15vh]">
        <div className="w-full flex items-center justify-center md:justify-start pb-[3vh] md:pb-[2vh]">
          <div className="flex flex-col space-y-[2vh] max-w-[85vw] md:max-w-[50vw] xl:max-w-[40vw] mx-[8vw] md:mx-[15vw] xl:mx-[15vw] text-left">
            <div className="text-header2">{media.mediaText.header1}</div>
            <p className="text-paragraph">{media.mediaText.paragraph}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row pt-4 pl-[8vw] max-w-[85vw] md:pl-0 md:max-w-[50vw] xl:max-w-[40vw] md:mx-[15vw] xl:mx-[15vw] text-left">
          <RoundedButton
            text={media.buttonText[0].text}
            link={media.buttonText[0].link}
            variant="red"
          />
          <div className="pt-2 md:pl-2 md:pt-0">
            <RoundedButton
              text={media.buttonText[1].text}
              link={media.buttonText[1].link}
              variant="black"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="grid mx-auto max-w-[80%] md:grid-cols-2 2xl:grid-cols-3 gap-[1.644rem]">
          {media.galleryText.map((item, index) => (
            <div key={index}>
              <GalleryCards
                title={media.galleryText[index].title}
                subtext={media.galleryText[index].subtext}
                img={media.galleryText[index].img}
              />
            </div>
          ))}
        </div>
      </section>
      <section className="md:hidden flex justify-center mx-auto scroll-smooth pt-[7vh]">
        <RoundedButton text="Back to top" link="#MediaTop" variant="red" />
      </section>
    </div>
  );
}
