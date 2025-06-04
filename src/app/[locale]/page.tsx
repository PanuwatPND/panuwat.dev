"use client";

import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/navigation";
// import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ImageWrapper from "@/components/ImageWrapper";

export default function HomePage() {
  const t = useTranslations("HomePage");
  type Skill = {
    name: string;
    icon: string;
  };

  const itemSkill: Skill[] = [
    { name: "Nuxt", icon: "nuxt.png" },
    { name: "Angular", icon: "angular.svg" },
    { name: "nextJs", icon: "nextjs.svg" },
    { name: "Vue", icon: "vue.svg" },
    { name: "TypeScript", icon: "typescript.svg" },
    { name: "javaScript", icon: "javaScript.svg" },
    { name: "HTML", icon: "html.svg" },
    { name: "Tailwind", icon: "tailwind.svg" },
    { name: "Bootstrap", icon: "bootstrap.svg" },
    { name: "CSS", icon: "css.svg" },
    { name: "SCSS", icon: "scss.svg" },

    { name: "PHP", icon: "php.svg" },
    { name: "Laravel", icon: "laravel.svg" },
    { name: "Github", icon: "github-mark.png" },
    { name: "PostgreSQL", icon: "postgresSQL.svg" },
    { name: "SQL", icon: "sql.svg" },
    { name: "Postman", icon: "postman.svg" },
    { name: "Sourcetree", icon: "sourcetree.svg" },
    { name: "Docker", icon: "docker.svg" },
    { name: "VSCode", icon: "vscode.svg" },
  ];

  const [filteredSkill, setFilteredSkill] = useState<string>("All");
  const categories = ["All", "Frontend", "Backend", "DevTools"];

  const skillCategoryMap: { [key: string]: string[] } = {
    Frontend: [
      "Nuxt",
      "Angular",
      "nextJs",
      "Vue",
      "TypeScript",
      "JavaScript",
      "HTML",
      "Tailwind",
      "CSS",
      "SCSS",
      "Bootstrap",
    ],
    Backend: ["PostgreSQL", "SQL", "PHP", "Laravel"],
    DevTools: ["VSCode", "Postman", "Sourcetree", "Vercel", "Docker"],
  };

  const filteredItems =
    filteredSkill === "All"
      ? itemSkill
      : itemSkill.filter((skill) =>
          skillCategoryMap[filteredSkill]?.includes(skill.name)
        );

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div className="flex-1 relative z-10">
        <div className="max-w-6xl mx-auto pt-24 px-4 sm:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between text-center lg:text-left space-y-4 lg:space-y-0">
            <div>
              <h1 className="text-5xl font-extrabold text-gray-800 tracking-tight">
                PANUWAT PHETSEEKAEW
              </h1>
              <h2 className="text-lg text-gray-500 font-medium">DEVELOPER</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar - Contact */}
            <div className="space-y-6">
              <div className="relative w-28 h-28 mx-auto lg:mx-0 rounded-full bg-cover overflow-hidden border-4 border-gray-300">
                <ImageWrapper src="/profile.png" alt="Profile picture" />
              </div>
              <div className="bg-white/95 shadow-xl rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">
                  <span>|</span> {t("profileTitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed ">
                  {t("introduction")}
                </p>
              </div>

              <div className="bg-white/95 shadow-xl rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">
                  <span>|</span> {t("educationTitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Bachelor of Computer Science, Khonkaen University (2018 -
                  2022)
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/95 shadow-xl rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-4">
                  <span>|</span> {t("experienceTitle")}
                </h3>
                <div className="mb-6">
                  <h4 className="font-bold">
                    Grit Consultant (2023 - Present)
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm leading-relaxed">
                    <li>
                      Developed and maintained front-end components using
                      Nuxt.js
                    </li>
                    <li>
                      Collaborated closely with back-end developers and
                      designers
                    </li>
                    <li>
                      Optimized web applications for speed and scalability
                    </li>
                    <li>Conducted code reviews and gave feedback</li>
                    <li>Projects: Web Tournament Manager (Game)</li>
                    <li>
                      Web app & Web manager for Gas Company (PHP, Laravel)
                    </li>
                    <li>HRM for Grit Consultant</li>
                    <li>ERP & HRM for Company User</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold">
                    Khonkaen Softtech Co., Ltd (2022 - 2023)
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1 text-sm leading-relaxed">
                    <li>Finance ERP Program For Company</li>
                    <li>SSRN ERP Suan Sunandha Rajabhat University</li>
                    <li>
                      IPST - Institute for the Promotion of Teaching Science and
                      Technology
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/95 shadow-xl rounded-lg p-6">
                <h3 className="font-semibold text-lg mb-3">
                  <span>|</span> CONTACT
                </h3>
                <div className="text-gray-700 space-y-2 break-words text-sm grid grid-cols-2">
                  <p className="flex items-center space-x-2">
                    <span>📞</span> <span>095-2367130</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>✉️</span> <span>panuwat.vyse@gmail.com</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>💻</span> <span>github: panuwatPND</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>🌐</span> <span>www.pnw.pp</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Animated Skill Section */}
        <div className="max-sm:px-6">
          <section
            className="mt-20"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <h2 className="text-3xl font-bold text-center mb-6">TECH STACK</h2>
            <div className="flex justify-center mb-6 gap-4 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full border text-sm sm:text-base cursor-pointer ${
                    filteredSkill === cat
                      ? "bg-gray-800 text-white"
                      : "bg-white text-gray-800 border-gray-300"
                  } transition-all duration-300 hover:bg-gray-800 hover:text-white`}
                  onClick={() => setFilteredSkill(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-items-center w-full max-w-5xl mx-auto">
              {filteredItems.map((skill, index) => (
                <div
                  key={skill.name}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="shadow-lg rounded-xl p-6 flex flex-col items-center bg-white w-full transform transition duration-500 ease-in-out hover:scale-110 hover:shadow-2xl"
                >
                  <div className="relative w-20 h-20 mb-4">
                    <ImageWrapper
                      src={`/skills/${skill.icon}`}
                      alt={skill.name}
                    />
                  </div>
                  <span className="text-sm text-center text-gray-700">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
