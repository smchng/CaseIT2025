
type statsProps = {
  title: string;
};

export const Stats = ({ title }: statsProps) => {
  return (
    <div className="flex flex-row gap-2 md:flex-col md:items-center">
      <div className="text-lg font-bold md:text-2xl  lg:text-[10.5rem] leading-none">2x</div>
      <div className="w-fit mt-auto font-medium text-[1.25rem] md:">{title}</div>
    </div>
  );
};
