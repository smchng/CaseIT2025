import Image from "next/image";
import { TitleList } from "@/content/home_content";
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
    </main>
  );
}
