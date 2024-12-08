import { Metadata } from "next";
import Image from "next/image";
import * as text from "@/components/text";
import { ImgButton } from "@/components/buttons";
import * as history from "@/content/history_content";
import { CompetitionCard } from "@/components/HistoryCard";
import { competitionData } from "@/content/history_content";
import mypic from "@/public/imgs/2024_OC.png";

export const metadata: Metadata = {
  title: "History",
  description: "Learn more about our company and team.",
};

export default function History() {
  return (
    <div>
      <section className=" flex flex-col pb-10 overflow-hidden">
        <div className="px-4 md:pl-32 pt-24">
          <h2 className="text-header2  font-semibold">
            {history.heroContent.header}
          </h2>
          <h3 className="font-medium">{history.heroContent.subtitle}</h3>
          <p className="mt-6 max-w-[65ch]">{history.heroContent.paragraph} </p>
        </div>

        <div className="mt-8 flex-col flex md:justify-start md:items-start justify-center items-center px-7 space-y-8 md:space-y-0 md:px-0 md:flex-row md:gap-4 md:pl-4 md:flex-nowrap md:w-fit  md:py-6 md:animate-marquee md:hover:pause md:animation-delay ">
          {competitionData.map((competition, index) => (
            <CompetitionCard
              key={index}
              image={competition.img}
              title={competition.title}
              description={competition.description}
              winner={competition.winner}
            />
          ))}
        </div>
      </section>

      <section className="w-full flex flex-col items-center p-7">
        <div className="text-header4 pb-3 md:text-header2">
          {history.historyText.header2}
        </div>
        <div className="flex flex-col space-y-[2vw] md:space-y-[0] md:flex-row md:space-x-[2vw] md:pt-[2vh]">
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
