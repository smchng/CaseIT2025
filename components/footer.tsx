import { NavList } from "./NavList";
import { svgIcons } from "@/public/svgs/icons";
import CaseitLogoWhite from "@/public/svgs/CaseitLogoWhite";

type navLink = {
  name: string | React.ReactNode;
  ref: string;
};

type link = {
  title: string;
  links: navLink[];
};

export const Footer = () => {
  const competitionLinks: navLink[] = [
    { name: "About CaseIT", ref: "/" },
    { name: "CaseIT 2025", ref: "/" },
    { name: "Registration", ref: "/" },
  ];

  const sponsorshipLinks: navLink[] = [
    { name: "2025 Sponsors", ref: "/" },
    { name: "Benefits", ref: "/" },
    { name: "Sponsorship Opportunities", ref: "/" },
  ];

  const aboutLinks: navLink[] = [
    { name: "Chair's Welcome", ref: "/" },
    { name: "CaseIT History", ref: "/" },
    { name: "Our Team", ref: "/" },
    { name: "Join CaseIT Team", ref: "/" },
  ];

  const contactLinks: navLink[] = [
    { name: "Contact Information", ref: "/" },
    { name: "FAQ", ref: "/" },
  ];

  const socialLinks: navLink[] = [
    { name: svgIcons["instagram"], ref: "/" },
    { name: svgIcons["facebook"], ref: "/" },
  ];

  const allLinks: link[] = [
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

  return (
    <div className="bg-footerRed px-9 md:px-12 xl:px-20 py-14 lg:pt-24 mt-[10vh] flex flex-col gap-8 lg:gap-36 md:flex-row text-white text-[0.5rem] lg:text-[1.125rem] ">
      <div className=" max-w-[87px] lg:max-w-[165px]">
        <CaseitLogoWhite className="w-full" />
      </div>
      <nav className="flex flex-col w-full">
        <div className="flex flex-col md:flex-row lg:flex-col gap-12 ">
          <div className="grid grid-cols-2 gap-y-12 sm:flex max-w-[210px] sm:max-w-none  justify-between w-full ">
            {allLinks.map((link, index) => (
              <div key={index}>
                <p className="font-bold mb-6">{link.title}</p>
                <NavList linkArray={link.links} />
              </div>
            ))}
          </div>
          <div>
            <p className="font-bold mb-6">Follow us!</p>
            <NavList classname="flex opacity-60" linkArray={socialLinks} />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4  mt-24 border-t pt-4 border-t-white text-white/60">
          <p>CaseIT © 2020-2025 </p>
          <p className="hidden sm:flex">| </p>
          <p>Privacy Policy </p>
          <p className="hidden sm:flex">| </p>
          <p>Traditional Territories Acknowledgement</p>
        </div>
      </nav>
    </div>
  );
};
