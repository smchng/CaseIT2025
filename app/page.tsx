import Image from "next/image";
import { TitleList } from "@/content/home_content";
import { SquareButton } from "@/components/buttons";
import { TextDot } from "@/components/text&img/text";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen items-center justify-center flex ">
        <div>
          {TitleList.map((item, index) => (
            <TextDot
              key={index}
              dotText={<div className="text-header1">{item.title} </div>}
            />
          ))}
        </div>
      </div>
      {/* Example of the 3 buttons. edit it when you get to it*/}
      <SquareButton
        variant="black"
        text="CASEIT History"
        subtext="Learn about the CaseIT evolution"
        link="/history"
      />
    </main>
  );
}
