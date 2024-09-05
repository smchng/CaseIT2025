import Image from "next/image";
import { TextDot } from "@/components/text&img/text";

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen items-center justify-center flex ">
        <div>
          {" "}
          <TextDot text="Unparallelled" />
          <TextDot text="Rigorous" />
          <TextDot text="Engaged" />
        </div>
      </div>
    </main>
  );
}
