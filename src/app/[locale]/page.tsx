"use client";

import { useTranslations } from "next-intl";
// import { Link } from "@/i18n/navigation";
// import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import ImageWrapper from "@/components/ImageWrapper";

const CARD =
  "bg-white border border-[#0F172A14] rounded-2xl p-6 shadow-[0_12px_28px_-18px_#0F172A5C]";
const CARD_TITLE =
  "flex items-center gap-2.5 text-xl font-semibold tracking-[-0.01em] text-[#0B1220]";
const RAIL =
  "border-l-2 border-[#0F172A1F] pl-4";
const YEAR =
  "font-mono text-[11px] font-medium uppercase tracking-[0.11em] text-[#7B8794]";
const BULLETS =
  "mt-2 list-disc pl-5 space-y-1 text-[15px] leading-relaxed text-gray-600 marker:text-gray-400";

const Rail = () => (
  <span
    aria-hidden="true"
    className="w-[3px] h-[19px] shrink-0 rounded-[2px] bg-[linear-gradient(180deg,#0F172A,#94A3B8)]"
  />
);

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
    "Savings Cooperative Back-office System": t("cooperativeBackOffice"),
    "Gas Distribution Company - Workflow System (PHP, Laravel)": t(
      "gasCompanyWorkflow"
    ),
    "HRM for Grit Consultant (Employee + Admin)": t("hrmForGritConsultant"),
    "Member Activity & Lucky Draw Platform": t("activityLuckyDraw"),
    "Cooperative HR Management System": t("cooperativeHrm"),
    "Cooperative Lending & Delinquency System": t("lendingAndDelinquency"),
    "Cooperative Member Web Portal": t("cooperativeMemberWeb"),
    "Cashier Counter POS Desktop App (Tauri)": t("cashierPos"),
    "Web Tournament Manager (Game)": t("webTournamentManager"),
    "ERP & HRM for Company User": t("erpAndHrmForCompanyUser"),
  };

  const gritProjects: string[] = Object.keys(projectDescriptions);

  return (
    <div>
      <div className="flex-1 relative z-10">
        <div className="max-w-6xl mx-auto pt-24 px-4 sm:px-8 space-y-12">
          <div className="flex flex-col items-center gap-5 text-center sm:flex-row sm:gap-7 sm:text-left">
            {/* Avatar: gradient ring + availability dot */}
            <div className="relative shrink-0 rounded-full p-[3px] bg-[conic-gradient(from_210deg,#0F172A,#475569_32%,#CBD5E1_55%,#64748B_78%,#0F172A)] shadow-[0_8px_24px_-10px_#0F172A8C]">
              <div className="rounded-full bg-white p-[3px]">
                <div className="relative w-23 h-23 rounded-full overflow-hidden">
                  <ImageWrapper
                    src="/profile.jpg"
                    alt="Panuwat Phetseekaew"
                    priority
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
              <span
                aria-hidden="true"
                className="absolute bottom-1 right-1 w-[18px] h-[18px] rounded-full bg-[#1C785A] border-[3px] border-white"
              />
            </div>

            <div>
              <h1 className="text-[clamp(25px,4vw,40px)] font-extrabold leading-[1.02] tracking-[-0.035em] text-[#0B1220]">
                PANUWAT
                <br />
                PHETSEEKEAW
              </h1>
              <p className="mt-3 flex items-center justify-center gap-2.5 font-mono text-[11.5px] font-medium uppercase tracking-[0.15em] text-[#37485A] sm:justify-start">
                <span
                  aria-hidden="true"
                  className="w-[18px] h-[2px] rounded-full bg-[#0F172A]"
                />
                Developer
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Sidebar */}
            <div className="space-y-6">
              <div className={CARD}>
                <h3 className={`${CARD_TITLE} mb-3`}>
                  <Rail /> {t("profileTitle")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  {t("introduction")}
                </p>
              </div>

              <div className={CARD}>
                <h3 className={`${CARD_TITLE} mb-3`}>
                  <Rail /> {t("educationTitle")}
                </h3>
                <p className="text-gray-600 leading-relaxed text-[15px]">
                  Bachelor of Computer Science, Khonkaen University (2018 -
                  2022)
                </p>
              </div>

              <div className={`${CARD} flex flex-wrap items-center justify-between gap-3`}>
                <h3 className={CARD_TITLE}>
                  <Rail /> Curriculum Vitae (CV)
                </h3>
                <a
                  href="/cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-[10px] bg-[#0F172A] px-4 py-2.5 text-[13px] font-semibold text-white transition-colors hover:bg-[#1E293B]"
                >
                  {t("viewCV")}
                </a>
              </div>

              <div className={CARD}>
                <h3 className={`${CARD_TITLE} mb-3`}>
                  <Rail /> CONTACT
                </h3>
                <div className="space-y-1.5 break-words text-[15px] text-gray-600">
                  <p>
                    Phone: <span className="text-[#0B1220]">095-2367130</span>
                  </p>
                  <p>
                    Email:{" "}
                    <span className="text-[#0B1220]">panuwat.vyse@gmail.com</span>
                  </p>
                  <p>
                    Github:{" "}
                    <a
                      href="https://github.com/panuwatPND"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0B1220] hover:underline"
                    >
                      panuwatPND
                    </a>
                  </p>
                  <p>
                    Website:{" "}
                    <a
                      href="https://panuwatdev.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0B1220] hover:underline"
                    >
                      https://panuwatdev.vercel.app
                    </a>
                  </p>
                  <p>
                    Line: <span className="text-[#0B1220]">panuwat.tp</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Main Content - one card per company */}
            <div className="lg:col-span-2 space-y-6">
              <div className={CARD}>
                <h3 className={`${CARD_TITLE} mb-4`}>
                  <Rail /> {t("experienceTitle")}
                </h3>
                <div className={RAIL}>
                  <p className={YEAR}>2024 - Present</p>
                  <h4 className="mt-0.5 font-bold text-[#0B1220]">
                    Grit Consultant Co., Ltd{" "}
                    <span className="font-normal text-gray-500">
                      (2024 - Present)
                    </span>
                  </h4>
                  <ul className={BULLETS}>
                    {[
                      "Built and maintained Nuxt 3 / Nuxt 4 front-ends across a family of eight web applications for a savings cooperative",
                      "Designed shared Nuxt layers, service layers and Pinia stores; form validation with valibot",
                      "Integrated REST APIs against a shared Bruno API contract, with Keycloak SSO and cookie-based JWT refresh",
                      "Packaged a Nuxt SPA as a desktop POS app with Tauri, and containerised every app with Docker",
                      "Added unit tests with Vitest, monitored production with Sentry, and reviewed teammates' code",
                    ].map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>

                  <h5 className="mt-4 mb-2 text-[11px] font-bold uppercase tracking-[0.13em] text-slate-500">
                    - Projects
                  </h5>
                  <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {gritProjects.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setModalContent(projectDescriptions[item])}
                        className="flex items-center gap-2 rounded-[10px] border border-[#0F172A1A] bg-white px-3 py-2.5 text-left text-[13.5px] text-gray-700 transition-colors hover:border-[#0F172A57] hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F172A]"
                      >
                        {item}
                        <span
                          aria-hidden="true"
                          className="ml-auto shrink-0 text-base leading-none text-slate-400"
                        >
                          &rsaquo;
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={CARD}>
                <div className={RAIL}>
                  <p className={YEAR}>2022 - 2023</p>
                  <h4 className="mt-0.5 font-bold text-[#0B1220]">
                    Khonkaen Softtech Co., Ltd{" "}
                    <span className="font-normal text-gray-500">
                      (2022 - 2023)
                    </span>
                  </h4>
                  <ul className={BULLETS}>
                    <li>Finance ERP Program For Company</li>
                    <li>SSRN ERP Suan Sunandha Rajabhat University</li>
                    <li>
                      IPST - Institute for the Promotion of Teaching Science and
                      Technology
                    </li>
                  </ul>
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
                  <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-lg w-52 text-black">
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
