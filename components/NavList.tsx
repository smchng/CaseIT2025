"use client";
// THIS COMPONENT RENDERS A LIST OF NAV LINKS. IT TAKES AN ARRAY OF TYPE NAVLINK AS PARAMETERS


import { NavLink, ArrayOfLinks } from "@/app/lib/types";
import Link from "next/link";



type NavListProps = {
  linkArray: NavLink[];
  listClassName?:string;
  linkClassName?:string;
};

const pivotStyle = "bg-pivotBlue text-white px-6 py-1 rounded-full hover:text-white hover:bg-pivotBlueDark cursor-pointer max-w-[6rem]"

export const NavList = ({ linkArray, listClassName, linkClassName }: NavListProps) => {
  return (
    <ul className={listClassName}>
      {linkArray.map((item: NavLink, index) => (
        <li key={index} className={`${linkClassName} ${item.name === "Pivot" && pivotStyle }`}>
          <Link href={item.ref}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
