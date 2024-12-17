import { StaticImageData } from "next/image";
// import images here, also makes it easier for the next Image component
import ph from "@/public/imgs/CaseIT_On3.png";
import andrew from "@/public/imgs/getinvolved/andrew.png";
import suki from "@/public/imgs/getinvolved/suki.png";
import shirley from "@/public/imgs/getinvolved/shirley.png";
import cameron from "@/public/imgs/getinvolved/cameron.png";
import stephanie from "@/public/imgs/getinvolved/stephanie.png";
import troy from "@/public/imgs/getinvolved/troy.png";

export const historyText = {
  header2: "Relive our best moments",
};

export const heroContent = {

};

export type MemberTypes = {
  name: string;
  quote: string;
  position: string;
  img: StaticImageData;
};

export const memberData: MemberTypes[] = [
  {
    img: andrew,
    name: "Andrew Lee",
    quote:
      "“Working as the Director of University Relations was truly one of the most rewarding experiences throughout my undergraduate career. My time at CaselT significantly enhanced my professional skill set, allowed me to meet other like-minded individuals, and helped me build life-long connections.”",
    position: "CaseIT 2024, Director of University Relations",
  },
  {
    img: suki,
    name: "Suki Leung",
    quote:
      "“As the Director of Hospitality, I had the privilege of crafting an exceptional competition experience for our global competitors. I witnessed firsthand the vibrant enthusiasm everyone brought to the event.Their SpirlT made CaselT an immensely rewarding experience for all involved”",
    position: "CaseIT 2024, Director of Hospitality",
  },
  {
    img: shirley,
    name: "Shirley Wen",
    quote:
      "“As a University Relations Associate, I had the incredible opportunity to engage with universities worldwide and gain a global perspective. CaseIT was truly one of my most memorable and unique experiences at Beedie, creating lasting friendships and cherished memories.”",
    position: "CaseIT 2024, University Relations Associate",
  },
  {
    img: troy,
    name: "Troy Cheah",
    quote:
      "“CaseIT was an unforgettable, extremely rewarding experience; I greatly strengthened my professional skill set, met so many amazing students, and learned from incredibly hardworking, dedicated leaders. The passionate, devoted community that CaseIT creates is inspiring and truly special.”",
    position: "CaseIT 2024, Logistics Associate",
  },
  {
    img: stephanie,
    name: "Stephanie Lim",
    quote:
      "“If there is one thing that I would recommend anyone do in their undergraduate degree is to be a Team Host. My time at CaseIT was truly a unique and meaningful experience that I will never forget. This is an excellent opportunity for anyone looking to enhance their interpersonal skills, make new connections, and have lots of fun!”",
    position: "CaseIT 2024, Team Host",
  },
  {
    img: cameron,
    name: "Cameron Miranda",
    quote:
      "“Being a Team Host for CaseIT was one of the highlights of my semester.  Through this  experience, I built meaningful and lasting friendships that extended far beyond the competition. I highly recommend this role to anyone—it's an amazing way to connect and make lasting memories during your undergrad.”",
    position: "CaseIT 2024, Team Host",
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
