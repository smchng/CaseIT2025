import { StaticImageData } from "next/image";
// import images here, also makes it easier for the next Image component

import ph from "@/public/imgs/history/2018.png";
import _2024 from "@/public/imgs/history/2024.png";
import _2023 from "@/public/imgs/history/2023.png";
import _2020 from "@/public/imgs/history/2020.png";
import _2018 from "@/public/imgs/history/2018.png";
import _2016 from "@/public/imgs/history/2016.png";

export const historyText = {
  header2: "Relive our best moments",
};

export const heroContent = {
  header: "CaseIT History",
  subtitle: "22 years of excellence & innovation",
  paragraph:
    "Since 2004, CaseIT aims to foster innovation amongst generations of business and technology student leaders by facilitating powerful networking and learning opportunities. We have welcomed over 1,700 competitors and faculty coaches globally to the Beedie School of Business in Vancouver, British Columbia. ",
};

export type CompetitionData = {
  title: string;
  description: string;
  winner: string;
  img: StaticImageData;
};

export const competitionData: CompetitionData[] = [
  {
    img: _2024,
    title: "CaseIT 2024",
    description:
      "CaseIT further expands its connections featuring schools from Asia, North America, South America, Australia, and Europe.",
    winner: "HEC Montreal",
  },
  {
    img: _2023,
    title: "CaseIT 2023",
    description:
      "CaseIT celebrates its 20th Year Anniversary.",
    winner: "Winner: Queen's University",
  },
  {
    img: _2020,
    title: "CaseIT 2020",
    description:
      "CaseIT furthers the competition experience by introducing Coaches Hockey Night and a competitor networking event, ExchangeIT.",
    winner: "Indiana University",
  },
  {
    img: _2018,
    title: "CaseIT 2018",
    description:
      "To celebrate its 15 Years of CaseIT, a new multi-case structure was introduced to further challenge our international competitors.",
    winner: "Université libre de Bruxelles",
  },
  {
    img: _2016,
    title: "CaseIT 2016",
    description:
      "Embracing technology, CaseIT launches the Competition Portal, allowing competitors to engage with the competition like never before.",
    winner: "Queen's University",
  },
  {
    img: _2024,
    title: "CaseIT 2024",
    description:
      "CaseIT further expands its connections featuring schools from Asia, North America, South America, Australia, and Europe.",
    winner: "HEC Montreal",
  },
  {
    img: _2023,
    title: "CaseIT 2023",
    description:
      "CaseIT celebrates its 20th Year Anniversary.",
    winner: "Winner: Queen's University",
  },
  {
    img: _2020,
    title: "CaseIT 2020",
    description:
      "CaseIT furthers the competition experience by introducing Coaches Hockey Night and a competitor networking event, ExchangeIT.",
    winner: "Indiana University",
  },
  {
    img: _2018,
    title: "CaseIT 2018",
    description:
      "To celebrate its 15 Years of CaseIT, a new multi-case structure was introduced to further challenge our international competitors.",
    winner: "Université libre de Bruxelles",
  },
  {
    img: _2016,
    title: "CaseIT 2016",
    description:
      "Embracing technology, CaseIT launches the Competition Portal, allowing competitors to engage with the competition like never before.",
    winner: "Queen's University",
  },
];

export const imgButtons = [
  {
    img: "/imgs/2024_OC.PNG",
    alt: "2024 OC team pic",
    text: "2024 RECAP",
    link: "/history/recap/",
  },
  {
    img: "/imgs/CaseIT_On3.PNG",
    alt: "2024 OC team pic",
    text: "2024 MEDIA GALLERY",
    link: "/history/media/",
  },
];
