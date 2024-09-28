import Link from "next/link";
import Image from "next/image";
import { NavList } from "@/content/nav_content";

type NavItems = {
  link: string;
  name: string;
};

const NavLinks = ({ link, name }: NavItems) => {
  return (
    <li className=" text-greyLight hover:text-black font-medium">
      <Link href={link}>{name}</Link>
    </li>
  );
};

export const NavBar = () => {
  return (
    <div className="flex w-full pt-[3vh] absolute z-10 fixed px-[5vw]">
      <a href="/" className="w-[10vw]">
        <Image
          src="/svgs/CaseIT_Black.svg"
          alt="CaseIt Logo Black"
          width="100"
          height="100"
        />
      </a>
      <div className="w-full">
        <ul className="flex space-x-[5vw] justify-end">
          {NavList.map((item, index) => (
            <NavLinks key={index} link={item.link} name={item.name} />
          ))}
        </ul>
      </div>
    </div>
  );
};
