"use client";
// THIS COMPONENT RENDERS A LIST OF NAV LINKS. IT TAKES AN ARRAY OF TYPE NAVLINK AS PARAMETERS
import clsx from "clsx";
import {twMerge} from "tailwind-merge"
import Link from "next/link";

// " text-xs hover:text-black transition-all duration-300" default styling

type NavListProps = {
  linkArray: {name:string | React.ReactNode, ref:string, className?:string}[];
  listClassName?:string;
  linkClassName?:string
  activePathname?:string;
};

const pivotStyle = "bg-pivotBlue text-white px-6 py-1 rounded-full hover:text-white hover:bg-pivotBlueDark cursor-pointer max-w-[6rem]"

export const NavList = ({ linkArray, listClassName,linkClassName, activePathname, }: NavListProps) => {
  return (
    <ul className={listClassName}>
      {linkArray.map((item, index) => (
        <li key={index} className={twMerge(`${linkClassName} ${activePathname === item.ref && "text-black"}`, item?.className)}>
          <Link href={item.ref}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
