import { Metadata } from "next";
import Image from "next/image";
import { ImgLeft, IconImg } from "@/components/text&img/img";
import * as text from "@/components/text&img/text";
import { ImgButton } from "@/components/buttons";
import * as about from "@/content/about_content";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn more about our company and team.",
};

export default function About() {
  return (
    <div>
      <section className="py-[20vh]">
        <div className="grid grid-cols-2 gap-4">
          <ImgLeft img="/imgs/about.png" width={727} height={408} />
          <div className=" pr-[10vw] flex flex-col justify-center">
            <text.Header3 text={about.aboutText.header3} />
            <text.Paragraph text={about.aboutText.paragraph[0]} />
          </div>
        </div>
      </section>
      <section className="flex space-x-[5vw] bg-greyDark p-[5vw]">
        {about.icons.map((item, index) => (
          <IconImg
            img={item.img}
            width={75}
            height={75}
            title={item.title}
            text={item.text}
          />
        ))}
      </section>
      <section>
        <div className="w-full justify-center flex mt-[8vh] space-x-[5px]">
          {about.titles.map((item, index) => (
            <text.TextDot
              key={index}
              dotText={<text.Header2 text={item.title} />}
            />
          ))}
        </div>
        <div className="px-[5vw]">
          <Image
            src="/imgs/map.png"
            alt="map of schools"
            width="1218"
            height="637"
          />
          <text.Paragraph text={about.aboutText.disclaimer} />
        </div>
      </section>
      <section className="py-[5vh] relative">
        <Image
          src="/imgs/pivot.png"
          alt="map of schools"
          width="1436"
          height="698"
        />
        <div className="absolute h-full inset-0 flex justify-center items-center space-x-[10vw] p-[10vw]">
          <Image
            src="/svgs/pivot.svg"
            alt="pivot banner"
            width="229"
            height="10"
          />
          <div className="text-white w-[40vw]">
            <text.Header3 text="Our Location rendition" />
            <text.Paragraph text={about.aboutText.paragraph[1]} />
          </div>
        </div>
      </section>
      <section className="w-full flex flex-col items-center py-[8vh]">
        <text.Header2 text="Meet the Team" />
        <div className="flex space-x-[2vw] pt-[2vh]">
          {about.imgButtons.map((item, index) => (
            <ImgButton
              img={item.img}
              alt={item.alt}
              text={item.text}
              link={item.link}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
