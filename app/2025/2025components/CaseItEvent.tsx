type CaseItEventProps = {};

type CaseItEvent = {
  day: number;
  title: string;
  subtitle?: string;
  description: string;
};

const caseItEvents: CaseItEvent[] = [
  {
    day: 1,
    title: "REGISTRATION",
    description:
      "A collaborative icebreaking event where competitors can meet their peers as well as the CaseIT Organizing Committee. Light snacks are served, fun activities, and a “swag swap” serve as an introduction to a challenging yet memorable week ahead.",
  },
  {
    day: 2,
    title: "WELCOME EVENT",
    description:
      "The welcome ceremony greets our industry professionals and CaseIT 2025 stakeholders, meeting for the very first time to host an official start to CaseIT 2025. Sponsors will have the exclusive opportunity to set up a booth and attend the Welcome Day Brunch with competitors, providing a prime platform to showcase their brand and interact with attendees.",
  },
  {
    day: 3,
    title: "CASE DELIBERATION (5 HR)",
    description:
      "Competitors showcase their depth of business knowledge by demonstrating their case analysis abilities, critical thinking skills, and innovative recommendations during our 5-hour case challenge.",
  },
  {
    day: 4,
    title: "CASE DELIBERATION (24 HR)",
    description:
      "Competitors complete a 24-hour case study provided by a real-life challenge where students demonstrate their case analysis abilities, and critical thinking skills, and innovative recommendations that showcase the depth of their business knowledge. Professionals from sponsor companies are invited to attend presentations as judges and offer their industry knowledge through team evaluations and Q&A sessions.",
  },
  {
    day: 5,
    title: "SPONSOR EVENT",
    description:
      "An opportunity for sponsors to showcase their company, products, and services. During the sponsorship event, professionals are invited to network with attendees to learn more about the industry and career prospects.",
  },
  {
    day: 6,
    title: "FINALS PRESENTATIONS & AWARDS BANQUET",
    description:
      "Finalists are invited to present, followed by the Awards Banquet which concludes CaseIT 2025. Keynote speakers from the case organization, the Beedie School of Business, and Title sponsors will be in attendance, culminating in the highly anticipated announcement of the CaseIT 2025 champions.",
  },
];

export const CaseItEvent = () => {
  return (
    <div className=" px-6 md:px-12 lg:px-12">


    <div className="grid grid-cols-1 xl:grid-cols-6 gap-[2px] md:grid-cols-2 lg:grid-cols-3 bg-greyLight/30   p-[2px] max-w-[1596px] lg:mx-auto ">
      
      {caseItEvents.map((event) => (
        <div key={event.day} className="flex flex-col  bg-white">
          <div className="  pl-6 py-4 ">
          <h2 className="font-medium text-greyLight/60 text-[1.5rem]" >Day</h2>
          <h2 className="leading-[140%] text-red font-bold text-xl md:text-[5rem]">
             0{event.day}
          </h2>
          <h2 className="font-bold text-pretty">{event.title}</h2>
          </div>
          <p className="  h-full mx-6 pt-4 pb-12 border-greyLight/30 border-t-2">{event.description}</p>
        </div>
      ))}
    </div>
    </div>
  );
};
