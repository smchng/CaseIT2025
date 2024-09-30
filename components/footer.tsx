import { NavList } from "./NavList";
import CaseitLogoWhite from "@/public/svgs/CaseitLogoWhite";
import {allLinks, socialLinks} from "@/content/footer_content"


export const Footer = () => {


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
                <NavList listClassName="flex flex-col gap-2" linkClassName="text-white/60 hover:text-white duration-200 " linkArray={link.links} />
              </div>
            ))}
          </div>
          <div>
            <p className="font-bold mb-6">Follow us!</p>
            <NavList listClassName="flex flex-col gap-2" linkClassName="flex opacity-60 " linkArray={socialLinks} />
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
