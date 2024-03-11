"use client";
import Link from "next/link";
import { Label } from "./ui/label";
import ThemeSwitch from "./ui/themeSwitch";
import { Button } from "./ui/button";

export const SubNavbar = () => {
  const sections = [
    { name: "Personal Details", route: "personal-details" },
    { name: "Education", route: "education" },
    { name: "Experience", route: "experience" },
    { name: "Projects", route: "projects" },
    { name: "Achievements", route: "achievements" },
    { name: "Skills", route: "skills" },
  ];
  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <div className=" md:block">
            <ul className="flex space-x-4">
              {sections.map((section) => {
                return (
                  <li key={section.route}>
                    <Link href={`/dashboard/${section.route}`}>
                      {section.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center font-bold text-2xl">
            <Link href="/">ResumeCraft</Link>
          </div>
          <div className="hidden md:block">
            <ul className="flex  items-center space-x-10">
              <li>
                <div
                  className="flex items-center space-x-2"
                  suppressHydrationWarning={true}
                >
                  <ThemeSwitch />
                </div>
              </li>
              <li>
              <Button className="rounded-none" onClick={() => window.open("./feedback", "_blank")}>Drop Review</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
