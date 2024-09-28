"use client";
// THIS COMPONENT RENDERS A LIST OF NAV LINKS. IT TAKES AN ARRAY OF TYPE NAVLINK AS PARAMETERS

import Image from "next/image";
import React, { useState } from "react";
import * as text from "@/components/text";
import Link from "next/link";

type navLink = {
  name: string | React.ReactNode;
  ref: string;
};

type NavListProps = {
  linkArray: navLink[];
  classname?:string;
};

export const NavList = ({ linkArray, classname }: NavListProps) => {
  return (
    <ul className={classname}>
      {linkArray.map((item: navLink, index) => (
        <li key={index} className="mt-2">
          <Link  className="text-white/60 font-normal " href={item.ref}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
};
