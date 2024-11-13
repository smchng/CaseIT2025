import { caseItEvents } from "@/content/2025_content";




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
