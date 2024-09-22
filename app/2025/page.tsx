import { Metadata } from "next";
import { BgImg } from "@/components/text&img/img";
import * as caseitText from "@/content/2025_content";

export const metadata: Metadata = {
  title: "Media Gallery",
  description: "Learn more about our company and team.",
};

export default function CaseIt2025() {
  return (
    <div>
      <section>
        <BgImg>
          <div className="text-header1">
            {caseitText.caseit2025Text.header1}
          </div>
        </BgImg>
      </section>
    </div>
  );
}
