
type statsProps = {
  title: string;
};

export const Stats = ({ title }: statsProps) => {
  return (
    <div className="flex flex-row gap-2 md:flex-col md:items-center">
      <div className="font-bold text-4xl md:text-[8rem] lg:text-[10.5rem] leading-none">2x</div>
      <div className="w-fit mt-auto font-medium text-[1.25rem] md:">{title}</div>
    </div>
  );
};
