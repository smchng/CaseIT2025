import { Metadata } from "next";
import { DiscoverITBanner } from "@/components/subpageBanner";

export const metadata: Metadata = {
  title: "DiscoverIT - Tour",
  description: "Learn more about our company and team.",
};

export default function Overview() {
  return (
    <div>
      <DiscoverITBanner />
    </div>
  );
}
