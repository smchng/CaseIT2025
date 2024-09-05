import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Learn more about our company and team.",
};

export default function About() {
  return (
    <div className="h-screen">
      <section className="relative">
        <Image
          src="/imgs/Downtown-Vancouver.png"
          alt="Downtown Vancouver"
          className="h-auto w-screen object-cover"
          width="1441"
          height="550"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="font-dinProBold leading-none text-[40px] md:text-[50px]">
            Contact Us!
          </h1>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center h-[50vh]">
        <div className=" text-center md:max-w-[55vw] border rounded-xl pt-[2vw] border-redLight">
          <h1 className="text-redLight font-dinProMedium leading-none text-[20px] md:text-[30px]">
            Questions
          </h1>
          <p className="py-[2vh] px-[5vw]">
            Have a question about CaseIT? Please do not hesITate to contact our
            team and we will get back to you as soon as we can.
          </p>
          <hr className="border-redLight" />
          <div className="py-[1vw] font-dinProMedium text-[15px] md:text-[18px]">
            <Link href="mailto:s.chng02@gmail.com">caseit@sfu.ca</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
