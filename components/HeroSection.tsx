"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import hero1 from "@/public/imgs/hero/hero1.png"
import hero2 from "@/public/imgs/hero/hero2.png"
import hero3 from "@/public/imgs/hero/hero3.png"
import hero4 from "@/public/imgs/hero/hero4.png"
import hero5 from "@/public/imgs/hero/hero5.png"
import hero6 from "@/public/imgs/hero/hero6.png"
import mobilehero from "@/public/imgs/hero/mobilehero.png"

const HeroSection: React.FC = () => {
  // Define the type for the offset state
  type Offset = {
    x: number;
    y: number;
  };

  const [offset, setOffset] = useState<Offset>({ x: 0, y: 0 });

  // Handle mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    // Get the mouse position relative to the window
    const { clientX, clientY } = event;

    // Calculate the percentage of the mouse position
    const x = (clientX / window.innerWidth) * 2 - 1; // Normalize to [-1, 1]
    const y = (clientY / window.innerHeight) * 2 - 1; // Normalize to [-1, 1]

    // Set the offset with a slight easing effect
    setOffset({
      x: x * 50, // Change the multiplier for how far you want it to shift
      y: y * 50,
    });
  };

  useEffect(() => {
    // Add mousemove event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="flex w-full h-full">
    <div className="flex md:hidden w-full  items-center justify-center ">
      <Image src={mobilehero} className="w-full" alt="hero"/>
    </div>
    <div className="hidden md:grid grid-cols-[repeat(50,_2%)] grid-rows-[repeat(50,_2%)] w-full h-screen opacity-30 grayscale">
      <div
        className=" rounded-lg overflow-hidden col-start-[35] col-[15_/_span_15] row-start-[7] row-[15_/_span_15] bg-buttonBlack transition-transform duration-300 ease-out"
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        <Image
          src={hero1}
          alt="something"
          className="h-full object-cover "
        />
      </div>
      <div
        className=" rounded-xl overflow-hidden  bg-buttonBlack transition-transform duration-300 ease-out col-start-[2] col-[12_/_span_12] row-start-[27] row-[18_/_span_18]" 
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        <Image
          src={hero2}
          alt="something"
          className="h-full object-cover "
        />
      </div>

      <div
        className=" rounded-xl overflow-hidden  bg-buttonBlack transition-transform duration-300 ease-out col-start-[4] col-[11_/_span_11] row-start-[7] row-[16_/_span_16]" 
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        <Image
          src={hero4}
          alt="something"
          className="h-full object-cover "
        />
      </div>

      <div
        className=" rounded-xl overflow-hidden  bg-buttonBlack transition-transform duration-300 ease-out col-start-[24] col-[8_/_span_8] row-start-[3] row-[18_/_span_18]" 
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        <Image
          src={hero3}
          alt="something"
          className="h-full object-cover "
        />
      </div>

      <div
        className=" rounded-xl overflow-hidden  bg-buttonBlack transition-transform duration-300 ease-out col-start-[18] col-[15_/_span_15] row-start-[31] row-[18_/_span_18]" 
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        <Image
          src={hero5}
          alt="something"
          className="h-full object-cover "
        />
      </div>

      <div
        className=" rounded-xl overflow-hidden  bg-buttonBlack transition-transform duration-300 ease-out col-start-[36] col-[15_/_span_15] row-start-[27] row-[19_/_span_19]" 
        style={{
          transform: `translate(${offset.x}px, ${offset.y}px)`,
        }}
      >
        <Image
          src={hero6}
          alt="something"
          className="h-full object-cover "
        />
      </div>
    </div>
    </section>
  );
};

export default HeroSection;
