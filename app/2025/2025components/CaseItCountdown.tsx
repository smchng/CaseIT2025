"use client";
import { useState, useEffect } from "react";

type CaseItCountdownProps = {};

export const CaseItCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Target date: Jan 9, 2025
    const targetDate = new Date("2025-04-19T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };
    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <fieldset className="border-redDark border-4 rounded-xl lg:rounded-[30px] px-12 py-2 md:py-12 font-bold">
      <legend className="uppercase text-redDark text-[1.5rem]">
        CaseIT 2025
      </legend>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-[2.5rem] text-redDark justify-center">
        <div className="flex flex-col items-center">
          <div className="text-[4rem] lg:text-[8rem] leading-[110%]">{timeLeft.days}</div>
          <div className="text-[24px] font-normal">Days</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-[4rem] lg:text-[8rem] leading-[110%]">{timeLeft.hours}</div>
          <div className="text-[24px] font-normal">Hours</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-[4rem] lg:text-[8rem] leading-[110%]">{timeLeft.minutes}</div>
          <div className="text-[24px] font-normal">Minutes</div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-[4rem] lg:text-[8rem] leading-[110%]">{timeLeft.seconds}</div>
          <div className="text-[24px] font-normal">Seconds</div>
        </div>
      </div>
    </fieldset>
  );
};
