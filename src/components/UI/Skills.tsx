import { useState } from "react";
import ImageWrapper from "../ImageWrapper";

const Skills = () => {
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

  return (
    <div>
      <section className="mt-20" data-aos="fade-up" data-aos-duration="1000">
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
                <ImageWrapper src={`/skills/${skill.icon}`} alt={skill.name} />
              </div>
              <span className="text-sm text-center text-gray-700">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Skills;
