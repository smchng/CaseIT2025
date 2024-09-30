import {NavLink, ArrayOfLinks} from "@/app/lib/types"
import { svgIcons } from "@/public/svgs/icons";

const competitionLinks: NavLink[] = [
    { name: "About CaseIT", ref: "/" },
    { name: "CaseIT 2025", ref: "/" },
    { name: "Registration", ref: "/" },
  ];

  const sponsorshipLinks: NavLink[] = [
    { name: "2025 Sponsors", ref: "/" },
    { name: "Benefits", ref: "/" },
    { name: "Sponsorship Opportunities", ref: "/" },
  ];

  const aboutLinks: NavLink[] = [
    { name: "Chair's Welcome", ref: "/" },
    { name: "CaseIT History", ref: "/" },
    { name: "Our Team", ref: "/" },
    { name: "Join CaseIT Team", ref: "/" },
  ];

  const contactLinks: NavLink[] = [
    { name: "Contact Information", ref: "/" },
    { name: "FAQ", ref: "/" },
  ];

  export const socialLinks: NavLink[] = [
    { name: svgIcons["instagram"], ref: "/" },
    { name: svgIcons["facebook"], ref: "/" },
  ];

  export const allLinks: ArrayOfLinks[] = [
    {
      title: "Competition",
      links: competitionLinks,
    },
    {
      title: "Sponsorships",
      links: sponsorshipLinks,
    },
    {
      title: "About",
      links: aboutLinks,
    },
    {
      title: "Contact",
      links: contactLinks,
    },
  ];
