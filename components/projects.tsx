"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Home Service App",
    description:
      "A full-stack platform built with Next.js, Node.js, Express, and MongoDB that connects service providers with clients. Users can log in, browse businesses, view details (contact info, availability, images), and book appointments. Features include a booking system to prevent double bookings, confirmation messages, an intuitive interface, and responsive design.",
    image: "/images/nk.svg",
    github: "https://github.com/judie-tech/service-app",
    
  },
  {
    title: "FitSafari",
    description:
      "I created the Fitness and Diet Tracker because of my love for fitness. This full-stack platform allows users to log workouts, manage diet plans, and track their progress. Built with React.js, Node.js, Express.js, and MongoDB, it offers personalized workout and meal suggestions, progress tracking, and community features to keep users motivated and on track with their fitness goals.",
    image: "/images/ok.jpg",
    github: "https://github.com/judie-tech/FitSafari",
    
  },
  {
    title: "Ongoing Project",
    description:
      "An exciting project currently in development. A real-time data analysis dashboard powered by Next.js, Node.js, Express, and MongoDB. This platform will feature live updates, intuitive data visualizations, and robust user authentication, all designed to deliver actionable insights in an interactive and secure environment.",
    image: "/images/hh.jpg",
    github: "https://github.com/judie-tech/Data-Analysis-Dashboard",
    live: null,
    ongoing: true,
  },
];

export function Projects() {
  const [currentProject, setCurrentProject] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center bg-background p-8"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center font-playfair animate-slideInTop">
          Projects
        </h2>
        <div className="relative h-[400px] overflow-hidden rounded-lg shadow-lg">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-1000 ease-in-out ${
                index === currentProject
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="100vw"
                className="object-cover"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-2xl font-bold">{project.title}</h3>
                  {project.ongoing && (
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full animate-pulse">
                      Ongoing
                    </span>
                  )}
                </div>
                <p className="mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-primary hover:text-primary/80 transition-colors"
                  >
                    <FaGithub className="mr-2" /> GitHub
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-primary hover:text-primary/80 transition-colors"
                    >
                      <FaExternalLinkAlt className="mr-2" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
