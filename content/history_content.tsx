import { StaticImageData } from "next/image";
// import images here, also makes it easier for the next Image component 
import ph from "@/public/imgs/CaseIT_On3.png"
import img1 from "@/public/imgs/CaseIT_On3.png"
import img2 from "@/public/imgs/caseitChair.png"
import img3 from "@/public/imgs/about.png"

export const historyText = {
  header2: "Relive our best moments",
};

export const heroContent = {
  header:"CaseIT History",
  subtitle: "22 years of excellence & innovation",
  paragraph: "Started in 2004, CaseIT is back and better, stronger, and faster than ever. With our 22nd iteration, the Organizing Committee promises a competition full of fun, challenges, leaving you with double the memories! We are excited to welcome top business technology undergraduates and their faculty advisors from around the world to the beautify city of Vancouver from February 16 to 21, 2025."
}

export type CompetitionData = {
  title: string;
  description: string;
  winner: string;
  img:StaticImageData
};

export const competitionData: CompetitionData[] = [
  {
    img:img1,
    title: "CaseIT 2004",
    description:
      "Beginning of CaseIT as an undergraduate MIS-oriented business case competition exclusively for Simon Fraser University students.",
    winner: "Simon Fraser University",
  },
  {
    img:img2,
    title: "CaseIT 2005",
    description:
      "Expanded to include participants from other Canadian universities, increasing competition and networking opportunities.",
    winner: "Simon Fraser University",
  },
  {
    img:img3,
    title: "CaseIT 2006",
    description:
      "Introduced an international component, bringing in teams from Asia and establishing CaseIT as a global competition.",
    winner: "Simon Fraser University",
  },
  {
    img:ph,
    title: "CaseIT 2007",
    description:
      "Further expansion with more international participants and new sponsorships to enhance competition scope.",
    winner: "Simon Fraser University",
  },
  {
    img:ph,
    title: "CaseIT 2008",
    description:
      "Developed new event segments, including workshops and speaker sessions, creating a more comprehensive experience.",
    winner: "Simon Fraser University",
  },
  {
    img:ph,
    title: "CaseIT 2004",
    description:
      "Beginning of CaseIT as an undergraduate MIS-oriented business case competition exclusively for Simon Fraser University students.",
    winner: "Simon Fraser University",
  },
  {
    img:ph,
    title: "CaseIT 2005",
    description:
      "Expanded to include participants from other Canadian universities, increasing competition and networking opportunities.",
    winner: "Simon Fraser University",
  },
  {
    img:ph,
    title: "CaseIT 2006",
    description:
      "Introduced an international component, bringing in teams from Asia and establishing CaseIT as a global competition.",
    winner: "Simon Fraser University",
  },
  {
    img:ph,
    title: "CaseIT 2007",
    description:
      "Further expansion with more international participants and new sponsorships to enhance competition scope.",
    winner: "Simon Fraser University",
  },
  {
    img:ph,
    title: "CaseIT 2008",
    description:
      "Developed new event segments, including workshops and speaker sessions, creating a more comprehensive experience.",
    winner: "Simon Fraser University",
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
