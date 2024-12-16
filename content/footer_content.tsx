// import {NavLink, ArrayOfLinks} from "@/app/lib/types"
import { svgIcons } from "@/public/svgs/icons";

const competitionLinks = [
    { name: "About CaseIT", ref: "/about" },
    { name: "CaseIT 2025", ref: "/2025" },
  ];

  const sponsorshipLinks = [
    { name: "2025 Sponsors", ref: "/2025/Sponsor-Showcase" },
    { name: "Benefits", ref: "/sponsor/Sponsor-Overview" },
    { name: "Sponsorship Opportunities", ref: "/sponsor/Sponsorship-Opportunities" },
  ];

  const aboutLinks = [
    { name: "Chair's Welcome", ref: "/2025/chair" },
    { name: "CaseIT History", ref: "/history" },
    { name: "Our Team", ref: "/about/oc" },
    { name: "Join CaseIT Team", ref: "2025/Get-Involved" },
  ];

  const contactLinks = [
    { name: "Contact Information", ref: "/contact" },
    { name: "FAQ", ref: "/contact" },
  ];

  export const socialLinks = [
    { name: svgIcons["instagram"], ref: "https://www.instagram.com/caseitsfu/?hl=en" },
    { name: svgIcons["facebook"], ref: "https://www.facebook.com/CaseIT/" },
  ];

  export const allLinks = [
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
