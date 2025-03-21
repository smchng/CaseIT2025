import type { Metadata } from "next";
import { NavBar } from "@/components/navigation/nav";
import { Footer } from "@/components/footer";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "CaseIT 2025 is here!",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/imgs/favicon-32x32.png" sizes="32x32" />
      </head>
      <body className="font-dinProRegular ">
        <NavBar />
        <div
          className="transition-all duration-[700ms] origin-[center_458px] ease-[cubic-bezier(.16,1,.3,1)] "
          id="nav-animation"
        >
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
