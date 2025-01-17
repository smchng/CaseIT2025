import { Metadata } from "next";
import { DiscoverITBanner } from "@/components/subpageBanner";
import { Bento } from "@/components/discoverITItems";
import { overviewText } from "@/content/discoverIT_content";

export const metadata: Metadata = {
  title: "DiscoverIT - Overview",
  description: "Learn more about our company and team.",
};

export default function Overview() {
  return (
    <div className="py-[15vh] px-16">
      <div className="pb-8">
        <DiscoverITBanner></DiscoverITBanner>
      </div>
      <section className="pb-5">
        <Bento title="About" text={overviewText.paragraph[0]}></Bento>
      </section>
      <section className="md:flex md:space-x-5">
        <Bento title="About" text={overviewText.paragraph[0]}></Bento>
        <Bento title="About" text={overviewText.paragraph[0]}></Bento>
      </section>
    </div>
  );
}
