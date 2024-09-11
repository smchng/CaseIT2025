import { Metadata } from "next";
import Image from "next/image";
import * as text from "@/components/text&img/text";
import { ImgButton, GreyButton } from "@/components/buttons";
import * as history from "@/content/history_content";

export const metadata: Metadata = {
  title: "History",
  description: "Learn more about our company and team.",
};

export default function History() {
  return (
    <div>
      <section className="w-full flex flex-col items-center py-[8vh]">
        <text.Header2 text={history.historyText.header2} />
        <div className="flex space-x-[2vw] pt-[2vh]">
          {history.imgButtons.map((item, index) => (
            <ImgButton
              key={index}
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
