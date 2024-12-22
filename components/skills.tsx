import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDatabase,
  FaDocker,
  FaAws,
  FaHtml5,
  FaCss3,
  FaJs,
  FaPhp,
  FaJava,
  FaGit,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiVuedotjs,
  SiExpress,
  SiMongodb,
  SiAngular,
} from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    techs: [
      { name: "React", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: SiVuedotjs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3 },
      { name: "JavaScript", icon: FaJs },
    ],
  },
  {
    category: "Backend",
    techs: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "Python", icon: FaPython },
      { name: "PHP", icon: FaPhp },
    ],
  },
  {
    category: "Database & DevOps",
    techs: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "Databases", icon: FaDatabase },
      { name: "Docker", icon: FaDocker },
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
