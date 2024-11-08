import React from "react";

export type StatItem = {
  number: number;
  label: string;
  span?: string;
};

export default function StatCard({ number, label }: StatItem) {
  return (
    <div className="text-[4.5rem] xl:text-[152px] font-acid text-redDark flex flex-col items-center leading-none">
      {String(number).padStart(2, "0")}
      <span className="text-paragraph xl:text-[1.5rem] font-sans">{label}</span>
    </div>
  );
}
