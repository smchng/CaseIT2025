import React from 'react'

type logoProps={
  className?:string
}

export default function CaseitLogoWhite({className}:logoProps) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2560 760">
      <defs>
        <clipPath id="a" clipPathUnits="userSpaceOnUse">
          <path d="M100 56.95h19010v5592.99H100z"></path>
        </clipPath>
      </defs>
      <g clipPath="url(#a)" transform="matrix(.13333 0 0 -.13333 0 760)">
        <path
          fill="#fff"
          d="M2714.72 1331.64c0-170.03-33.21-332.218-99.07-486.581-66.14-154.637-157.19-289.84-273.33-405.707-116.24-115.86-252.39-208.52-408.07-278.051-155.78-69.54-323.63-104.36-503.09-104.36-153.32 0-309 20.668-467.512 61.899-158.511 41.14-301.074 111.992-427.882 212.289-126.813 100.48-231.164 233.051-312.965 397.98-81.992 164.641-122.754 373.251-122.754 625.641v3028.32c0 180.3 31.609 347.68 95.012 502.14 63.406 154.55 153.132 288.34 269.375 401.75 116.148 113.13 254.843 202.1 415.996 266.54 161.15 64.35 339.38 96.52 534.88 96.52 184.84 0 356.56-32.17 514.97-96.52 158.42-64.44 295.8-154.64 412.04-270.41 116.14-115.86 207.19-254.94 273.33-417.13 65.86-162.38 99.07-338.82 99.07-529.12v-309.1H1906.6v262.58c0 154.64-44.91 288.43-134.73 401.75-89.83 113.13-211.35 169.93-364.48 169.93-200.88 0-334.2-60.57-400.15-181.44-66.142-121.15-99.068-274.28-99.068-459.68V1408.91c0-159.64 35.664-293.53 106.998-401.66 71.23-108.219 199.27-162.191 384.29-162.191 52.74 0 109.54 8.972 170.31 26.992 60.66 17.929 116.14 47.461 166.43 88.691 50.01 41.228 91.05 97.838 122.85 170.118 31.7 71.99 47.55 162.19 47.55 270.31v270.42h808.12m2269.51 2348.43h-15.56l-388.36-1993.09h792.37zm-334 1583.6h660.37L6545.94 103.289h-792.46L5520.44 1285.33H4440.48L4207.44 103.289h-792.56M9956.4 4020.02h-790.19v177.67c0 180.21-42.56 335.98-127.85 467.41-85.29 131.34-228.61 196.92-430.05 196.92-108.51 0-197.48-20.57-267.3-61.71-69.63-41.33-123.89-94.07-162.67-158.42-38.77-64.53-65.85-139.07-81.33-224.08-15.57-85.01-23.21-173.7-23.21-266.45 0-108.13 3.87-199.74 11.61-274.28 7.73-74.73 27.08-138.98 58.12-193.14 30.95-54.06 76.14-101.81 135.58-142.85 59.35-41.32 140.68-82.46 244-123.69l604.32-239.47c175.49-66.99 317.68-145.49 426.09-235.6 108.51-90.2 192.48-195.68 251.83-316.73 59.34-121.06 99.44-260.13 120.11-417.13 20.57-157.1 30.94-336.08 30.94-536.96 0-231.73-23.21-446.76-69.72-645.08-46.42-198.141-122.75-368.258-228.52-509.879-105.87-141.621-246.64-253.621-422.32-335.891-175.59-82.281-390.05-123.7-643.01-123.7-191.16 0-369.39 33.688-534.5 100.489-165.4 66.891-307.4 158.321-426.19 274.18-118.88 115.871-213.05 253.531-282.87 413.453-69.63 159.548-104.44 332.028-104.44 517.428v293.53h790.19v-247.11c0-144.26 42.65-274.28 127.76-390.24 85.29-115.858 228.61-173.608 430.05-173.608 134.26 0 238.9 19.25 313.82 57.75 74.82 38.68 131.71 92.84 170.49 162.378 38.68 69.44 63.12 155.58 73.59 258.8 10.19 102.94 15.48 216.26 15.48 339.76 0 144.17-5.29 262.77-15.48 355.43-10.47 92.65-32.36 167.28-65.85 224.08-33.69 56.61-80.2 102.94-139.55 138.98-59.44 35.95-138.23 74.64-236.35 115.87l-565.45 231.82c-340.99 138.98-569.51 323.06-685.66 552.33-116.33 229.09-174.36 516.2-174.36 861.44 0 205.78 28.4 401.65 85.2 587.05 56.8 185.41 140.59 344.95 251.83 478.93 111.05 133.89 251.82 240.6 422.22 320.61 170.4 79.82 369.29 119.64 596.59 119.64 196.15 0 375.71-35.95 538.46-108.04 162.67-72.27 302.12-167.56 418.36-285.88 116.24-118.51 205.21-251.16 267.3-397.79 61.99-146.9 92.93-297.58 92.93-451.94m1118.2 1197.34h2348.3v-741.6h-1560.3V3247.49h1359.5v-741.61h-1359.5V891.332h1560.3V103.309h-2348.3m3492.5-.028h749.398v3917.39H14567.1zM17363.917 4861.983h-936.74v741.607h2682.78v-741.607h-936.622V103.27h-809.418"
        ></path>
        <path
          fill="#d51e28"
          d="M15473.1 5094.66c0-302.68-245.4-548.09-548.1-548.09-302.6 0-548 245.41-548 548.09 0 302.68 245.4 548.09 548 548.09 302.7 0 548.1-245.41 548.1-548.09"
        ></path>
      </g>
    </svg>
  )
}
