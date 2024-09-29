export const svgIcons: { [key: string]: JSX.Element } = {
  instagram: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="white"
      stroke="white"
      viewBox="0 0 256 256"
      width={24}
      height={24}
    >
      <path d="M160 128a32 32 0 11-32-32 32.037 32.037 0 0132 32zm68-44v88a56.064 56.064 0 01-56 56H84a56.064 56.064 0 01-56-56V84a56.064 56.064 0 0156-56h88a56.064 56.064 0 0156 56zm-52 44a48 48 0 10-48 48 48.054 48.054 0 0048-48zm16-52a12 12 0 10-12 12 12 12 0 0012-12z"></path>
    </svg>
  ),
  facebook: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="white"
      viewBox="-5.5 0 32 32"
    >
      <path d="M1.188 5.594h18.438c.625 0 1.188.563 1.188 1.188V25.22c0 .625-.563 1.188-1.188 1.188H1.188C.563 26.408 0 25.845 0 25.22V6.782c0-.625.563-1.188 1.188-1.188zm13.593 11.687h2.875l.125-2.75h-3V12.5c0-.781.156-1.219 1.156-1.219h1.75l.063-2.563s-.781-.125-1.906-.125c-2.75 0-3.969 1.719-3.969 3.563v2.375H9.844v2.75h2.031v7.625h2.906v-7.625z"></path>
    </svg>
  ),
  hamburger: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="black"
      className="size-8 fill-black stroke-black"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    </svg>
  ),
};
