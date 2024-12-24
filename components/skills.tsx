import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaAws,
  FaHtml5,
  FaCss3,
  FaJs,
  FaGit,
  FaServer,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiBootstrap,
  SiSvelte,
  SiMysql,
  SiPostgresql,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    techs: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Svelte", icon: SiSvelte },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3 },
      { name: "JavaScript", icon: FaJs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "RESTful APIs", icon: FaServer },
    ],
  },
  {
    category: "Database & DevOps",
    techs: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Databases", icon: FaDatabase },
      { name: "AWS", icon: FaAws },
      { name: "Git", icon: FaGit },
    ],
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-background p-8"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center font-playfair animate-slideInTop">
          Tech Playground
        </h2>
        <div className="space-y-12">
          {skills.map((skillCategory, categoryIndex) => (
            <div
              key={skillCategory.category}
              className="animate-fadeIn"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-2xl font-semibold mb-4 text-primary">
                {skillCategory.category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {skillCategory.techs.map((skill, skillIndex) => (
                  <div key={skill.name} className="flex flex-col items-center">
                    <skill.icon
                      className="text-5xl text-primary mb-2 animate-pulse"
                      style={{ animationDelay: `${skillIndex * 0.1}s` }}
                    />
                    <span className="text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
