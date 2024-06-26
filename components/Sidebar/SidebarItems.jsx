"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { data } from "./data";
import { useDashboardContext } from "../Dashboard/Provider";

export function SidebarItems() {
  const { asPath } = useRouter();
  const { closeSidebar, sidebarOpen } = useDashboardContext();
  const [currentSection, setCurrentSection] = useState("");

  const updateCurrentSection = (section) => {
    setCurrentSection(section);
    if (window.innerWidth > 1024) {
      if (closeSidebar) {
        closeSidebar();
      }
    }
  };

  useEffect(() => {
    const sidebarData = data.flatMap((section) => {
      return section.content.map((content) => ({
        title: content.title,
        link: content.link,
        section: section.section,
      }));
    });

    setCurrentSection(
      sidebarData.find((item) => item.link === asPath)?.section
    );
  }, [asPath]);

  return (
    <div className="flex h-full w-full">
      <div className="h-full bg-dashbg pt-10">
        {data.map(({ section, icon }) => (
          <div
            key={section}
            className="mx-4 my-1 flex w-full items-center justify-start p-3 text-white"
          >
            <div onClick={() => updateCurrentSection(section)}>
              <div>
                <div
                  className={`flex h-8 w-8 items-center justify-center 
                    ${section === currentSection && "rounded-full bg-dashfix"}`}
                >
                  <span>{icon}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {(!sidebarOpen || window.innerWidth < 1024) && (
        <div className="h-full w-full bg-dashfix pt-5">
          {data.map(({ section, content }) => (
            <div hidden={section !== currentSection} key={section}>
              <div>
                <div className="pl-3 text-lg font-medium text-white">
                  {section}
                </div>
                <ul className="list-disc px-8 pt-6">
                  {content.map((item) => (
                    <Link href={item.link} key={item.title}>
                      <li
                        className={`py-3 pl-3 text-sm font-normal text-white 
                            ${
                              item.link === asPath &&
                              "rounded-md bg-fuchsia-800"
                            }`}
                      >
                        {item.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
