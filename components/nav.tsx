"use client";
import Link from "next/link";
import Image from "next/image";
import { NavList } from "./NavList";
import { NavLinks } from "@/content/nav_content";
import { useState, useEffect } from "react";
import { svgIcons } from "@/public/svgs/icons";


export const NavBar = () => {
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollingDown, setScrollingDown] = useState(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const navWrapper = document.getElementById("nav-animation");
    isOpen
      ? navWrapper?.classList.add("menu-open")
      : navWrapper?.classList.remove("menu-open");
    isOpen
      ? document.body.classList.add("overflow-y-hidden")
      : document.body.classList.remove("overflow-y-hidden");

    return () => {
      navWrapper?.classList.remove("menu-open");
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        // scrolling down
        setScrollingDown(true);
      } else {
        // scrolling up
        setScrollingDown(false);
      }

      setLastScrollTop(scrollTop <= 0 ? 0 : scrollTop); // Ensure scroll position is non-negative
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollTop]);

  return (
    <nav
      className={`
    ${scrollingDown && lastScrollTop > 50 && "translate-y-[-100%]"}
    ${lastScrollTop === 0 ? "bg-white/0" : "bg-white"}
    transition-all flex justify-between  w-full py-5 top-0 z-10 fixed px-[5vw] drop-shadow-lg`}
    >
      <a href="/" className="w-[10vw]">
        <Image
          src="/svgs/CaseIT_Black.svg"
          alt="CaseIt Logo Black"
          width="100"
          height="100"
        />
      </a>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-black size-8 z-50">
        {svgIcons["hamburger"]}{" "}
      </div>
      {/* MOBILE NAV */}
      <div className={`w- transition-transform ease-[cubic-bezier(.16,1,.3,1)] max-w-[25rem] duration-500 ${!isOpen&&"translate-x-[100%]"} bg-white w-[70vw]  drop-shadow-lg p-16 h-screen absolute top-0 right-0 `}>
      <NavList linkClassName=" text-xs  hover:text-black transition-all duration-300" listClassName="flex  flex-col text-black/50 gap-8 font-medium" linkArray={NavLinks}/>
      </div>
      {/* DESKTOP NAV */}
      <div className="hidden md:block ">
        <NavList linkClassName=" hover:text-black transition-all duration-300" listClassName="flex items-center text-black/60 gap-8 font-medium" linkArray={NavLinks}/>
      </div>
    </nav>
  );
};
