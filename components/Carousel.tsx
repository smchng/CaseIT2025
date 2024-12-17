"use client";
import React from "react";
import { motion } from "framer-motion";
import { memberData } from "@/content/GetInvolved_content";
import { GetInvolvedCard } from "./GetInvolvedCard";
import { useEffect, useState, useRef } from "react";

export type CarouselProps = {
  className?: string;
};

export default function StatCard({ className }: CarouselProps) {
  const [width, setWidth] = useState<number>(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log();
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
  }, []);
  return (
    <div ref={carousel} className="relative  flex  overflow-hidden">
      {/* progressive blue for styling purposes */}
      <div className="w-[200px] z-20 h-full hidden lg:block absolute top-0 left-0 bg-white/100  [mask-image:linear-gradient(90deg,_rgba(0,0,0,1)_10%,_rgba(255,255,255,0)_60%)]  backdrop-blur-[10px]"></div>

      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width -64 }}
        className="cursor-grab pl-8 lg:pl-32 flex flex-row gap-8 p-3 "
      >
        {memberData.map((member, index) => (
          <>
            <GetInvolvedCard
              key={index}
              image={member.img}
              name={member.name}
              quote={member.quote}
              position={member.position}
            />
          </>
        ))}
      </motion.div>
    </div>
  );
}
