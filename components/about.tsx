"use client";

import { useState } from "react";
import {
  FaLightbulb,
  FaCode,
  FaBook,
  FaMusic,
  FaRunning,
} from "react-icons/fa";

const interests = [
  {
    name: "Problem Solving",
    icon: FaLightbulb,
    description:
      "I love tackling complex problems and finding elegant solutions.",
  },
  {
    name: "Coding",
    icon: FaCode,
    description:
      "Writing clean, efficient code is not just my job, it's my passion.",
  },
  {
    name: "Learning",
    icon: FaBook,
    description:
      "I'm always eager to learn new technologies and improve my skills.",
  },
  {
    name: "Music",
    icon: FaMusic,
    description:
      "When I'm not coding, you can find me listening to my favorite tunes.",
  },
  {
    name: "Hiking/Working Out",
    icon: FaRunning,
    description:
      "I enjoy staying active, whether it's hitting the trails or working out at the gym—it keeps my mind fresh for coding.",
  },
];

export function About() {
  const [activeInterest, setActiveInterest] = useState(interests[0]);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-background p-8"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center font-playfair animate-slideInTop">
          About Me
        </h2>
        <div className="bg-secondary rounded-lg p-8 shadow-lg animate-fadeIn">
          <p className="text-lg mb-8 font-montserrat">
            Hey! I am a developer who loves to get my hands dirty with code. I
            am always up for a good challenge and enjoy building things that
            make life easier. The best part? Constantly learning and growing
            along the way.
          </p>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-4">My Interests</h3>
            <div className="flex justify-center space-x-4 mb-4">
              {interests.map((interest) => (
                <button
                  key={interest.name}
                  onClick={() => setActiveInterest(interest)}
                  className={`p-2 rounded-full transition-colors ${
                    activeInterest.name === interest.name
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  <interest.icon size={24} />
                </button>
              ))}
            </div>
            <div className="text-center animate-fadeIn">
              <h4 className="text-xl font-semibold mb-2">
                {activeInterest.name}
              </h4>
              <p>{activeInterest.description}</p>
            </div>
          </div>
          <p className="text-lg font-montserrat">
            Let us collaborate and bring your ideas to life!
          </p>
        </div>
      </div>
    </section>
  );
}
