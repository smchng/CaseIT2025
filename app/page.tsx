import Image from "next/image";
import { TitleList } from "@/content/home_content";
import { TextDot, Header1 } from "@/components/text&img/text";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen items-center justify-center flex ">
        <div>
          {TitleList.map((item, index) => (
            <TextDot key={index} dotText={<Header1 text={item.title} />} />
          ))}
        </div>
      </div>
    </main>
  );
}
