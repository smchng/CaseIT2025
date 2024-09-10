"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import React, { useState } from "react";
import * as text from "@/components/text&img/text";

type textItems = {
  question: string;
  answer: string;
};

export const FAQ = ({ question, answer }: textItems) => {
  const [isToggleOpen, setToggleOpen] = useState(false);

  const handleToggleClick = () => {
    setToggleOpen(!isToggleOpen);
  };

  if (!answer) return;
  return (
    <motion.div>
      <motion.div
        className="pointer select-none flex items-center mt-[5vh] mb-[1vh] px-1 py-1 "
        onClick={handleToggleClick}
      >
        <text.Header3 text={question} />
        <motion.p className="flex-end">
          {isToggleOpen ? (
            <Image
              src="/svgs/tabArrowUp.svg"
              alt="Arrow Up"
              width={15}
              height={15}
            />
          ) : (
            <Image
              src="/svgs/tabArrowDown.svg"
              alt="Arrow Down"
              width={15}
              height={15}
            />
          )}
        </motion.p>
      </motion.div>
      <div className="border-t border-black"></div>

      {isToggleOpen && (
        <motion.p className="font-normal text-left">{answer}</motion.p>
      )}
    </motion.div>
  );
};
