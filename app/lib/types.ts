export type NavLink = {
    name: string | React.ReactNode;
    ref: string;
  };
  
export type ArrayOfLinks = {
    title: string;
    links: NavLink[];
  };