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
    { name: "Cursor", icon: "cursor.png" },
    { name: "VSCode", icon: "vscode.svg" },
    { name: "Postman", icon: "postman.svg" },
    { name: "Sourcetree", icon: "sourcetree.svg" },
    { name: "Docker", icon: "docker.svg" },
  ];

  const [filteredSkill, setFilteredSkill] = useState<string>("All");
  const [open, setOpen] = useState(false);
  const [modalContent, setModalContent] = useState<string | null>(null);
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
    DevTools: ["Cursor", "VSCode", "Postman", "Sourcetree", "Vercel", "Docker"],
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

  // Project descriptions for modal
  const projectDescriptions: { [key: string]: string } = {
    "Web Tournament Manager (Game)": t("webTournamentManager"),
    "Web app & Web manager for Gas Company (PHP, Laravel)": t(
      "webAppAndWebManagerForGasCompany"
    ),
    "HRM for Grit Consultant": t("hrmForGritConsultant"),
    "ERP & HRM for Company User": t("erpAndHrmForCompanyUser"),
  };

  return (
    <div>
      <div className="flex-1 relative z-10">
        <div className="max-w-6xl mx-auto pt-24 px-4 sm:px-8 space-y-12">
          <div className="flex flex-col lg:flex-row lg:items-center text-center lg:gap-8 lg:text-left space-y-6 lg:space-y-0">
            <div>
              <div className="relative w-36 h-36 mx-auto lg:mx-0 rounded-full bg-cover overflow-hidden ring-4 ring-offset-4 ring-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                <ImageWrapper
                  src="/profile.jpg"
                  alt="Profile picture"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div>
              <h1 className="text-5xl font-extrabold text-black">
                PANUWAT PHETSEEKEAW
              </h1>
              <div className="inline-block mt-2 px-4 py-1 bg-gray-800 text-white rounded-full text-lg">
                DEVELOPER
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sidebar - Contact */}
            <div className="space-y-6">
              <div className="bg-white/95 shadow-2xl rounded-2xl p-8 transition-transform transform hover:scale-[1.01]">
                <h3 className="font-semibold text-2xl mb-4">
                  <span>|</span> {t("profileTitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  {t("introduction")}
                </p>
              </div>

              <div className="bg-white/95 shadow-2xl rounded-2xl p-8 transition-transform transform hover:scale-[1.01]">
                <h3 className="font-semibold text-2xl mb-4">
                  <span>|</span> {t("educationTitle")}
                </h3>
                <p className="text-gray-700 leading-relaxed text-base">
                  Bachelor of Computer Science, Khonkaen University (2018 -
                  2022)
                </p>
              </div>
              <div className="bg-white/95 shadow-2xl rounded-2xl p-8 transition-transform transform hover:scale-[1.01]">
                <h3 className="font-semibold text-2xl mb-4">
                  <span>|</span> Curriculum Vitae (CV)
                </h3>
                <div className="flex justify-center">
                  <a
                    href="/cv.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-full shadow hover:bg-gray-700 transition duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                    {t("viewCV")}
                  </a>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white/95 shadow-2xl rounded-2xl p-8 transition-transform transform hover:scale-[1.01]">
                <h3 className="font-semibold text-2xl mb-4">
                  <span>|</span> {t("experienceTitle")}
                </h3>
                <h4 className="font-bold">
                  Grit Consultant Co., Ltd (2022 - 2023)
                </h4>
                <ul className="list-disc ml-6 text-gray-700 space-y-1 text-base leading-relaxed">
                  {[
                    "Developed and maintained front-end components using Nuxt.js",
                    "Collaborated closely with back-end developers and designers",
                    "Optimized web applications for speed and scalability",
                    "Conducted code reviews and gave feedback",
                  ].map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
                <div className="mt-2">
                  <h5 className="font-semibold mb-2 ml-2">- Projects</h5>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1 text-base leading-relaxed">
                    {[
                      "Web Tournament Manager (Game)",
                      "Web app & Web manager for Gas Company (PHP, Laravel)",
                      "HRM for Grit Consultant",
                      "ERP & HRM for Company User",
                    ].map((item, idx) => (
                      <li
                        key={idx}
                        className="cursor-pointer hover:underline"
                        onClick={() =>
                          setModalContent(projectDescriptions[item])
                        }
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mt-4">
                    Khonkaen Softtech Co., Ltd (2022 - 2023)
                  </h4>
                  <ul className="list-disc ml-6 text-gray-700 space-y-1 text-base leading-relaxed">
                    <li>Finance ERP Program For Company</li>
                    <li>SSRN ERP Suan Sunandha Rajabhat University</li>
                    <li>
                      IPST - Institute for the Promotion of Teaching Science and
                      Technology
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-white/95 shadow-2xl rounded-2xl p-8 transition-transform transform hover:scale-[1.01]">
                <h3 className="font-semibold text-2xl mb-3">
                  <span>|</span> CONTACT
                </h3>
                <div className="text-gray-700 space-y-2 break-words text-base grid grid-cols-1 sm:grid-cols-2">
                  <p className="flex items-center space-x-2">
                    <span>Phone:</span> <span>095-2367130</span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>Email:</span> <span>panuwat.vyse@gmail.com</span>
                  </p>
                  <p className="flex items-center space-x-2 ">
                    <span>Github: </span>
                    <span>
                      <a
                        href="https://github.com/panuwatPND"
                        target="_blank"
                        className="hover:underline"
                      >
                        panuwatPND
                      </a>
                    </span>
                  </p>
                  <p className="flex items-center space-x-2 ">
                    <span>Website:</span>
                    <span>
                      <a
                        href="https://panuwatdev.vercel.app/"
                        target="_blank"
                        className="hover:underline"
                      >
                        https://panuwatdev.vercel.app
                      </a>
                    </span>
                  </p>
                  <p className="flex items-center space-x-2">
                    <span>Line:</span>

                    <span>panuwat.tp</span>
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
            <h2 className="text-3xl font-bold text-center mb-6 text-white">
              TECH STACK
            </h2>
            <div className="flex justify-center mb-6 sm:relative">
              {/* Mobile custom dropdown */}
              <div className="relative block sm:hidden mb-6">
                <button
                  onClick={() => setOpen(!open)}
                  className=" flex items-center justify-between w-28 px-4 py-2 bg-white border border-gray-300 rounded-full shadow hover:bg-gray-100 transition"
                >
                  {filteredSkill}
                  <svg
                    className={`w-5 h-5 ml-2 transition-transform ${
                      open ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {open && (
                  <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg w-52">
                    {categories.map((cat) => (
                      <div
                        key={cat}
                        onClick={() => {
                          setFilteredSkill(cat);
                          setOpen(false);
                        }}
                        className={`px-4 py-2 cursor-pointer hover:bg-gray-100  rounded-lg  ${
                          filteredSkill === cat
                            ? "bg-gray-100 font-semibold"
                            : ""
                        }`}
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {/* Desktop button group */}
              <div className="hidden sm:flex gap-4 flex-wrap ">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    className={`px-4 py-2 rounded-full border text-sm sm:text-base cursor-pointer  ${
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
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 justify-items-center w-full max-w-5xl mx-auto">
              {filteredItems.map((skill, index) => (
                <div
                  key={skill.name}
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                  className="shadow-2xl rounded-2xl p-4 flex flex-col items-center bg-white w-full transform transition duration-500 ease-in-out hover:scale-110 hover:shadow-2xl"
                >
                  <div className="relative w-16 h-16 mb-4">
                    <ImageWrapper
                      src={`/skills/${skill.icon}`}
                      alt={skill.name}
                      className={` object-contain w-full h-full`}
                    />
                  </div>
                  <span className="text-base text-center text-gray-700">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
      {modalContent && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl p-6 max-w-md w-full shadow-xl">
            <h4 className="text-xl font-bold mb-4">{t("detail")}</h4>
            <p className="text-gray-700">{modalContent}</p>
            <div className="mt-6 text-right">
              <button
                onClick={() => setModalContent(null)}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              >
                {t("close")}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
