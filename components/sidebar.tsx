"use client";

import { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaEnvelope,
  FaBars,
} from "react-icons/fa";

const menuItems = [
  { icon: FaHome, label: "Home", href: "#home" },
  { icon: FaUser, label: "About", href: "#about" },
  { icon: FaCode, label: "Skills", href: "#skills" },
  { icon: FaProjectDiagram, label: "Projects", href: "#projects" },
  { icon: FaEnvelope, label: "Contact", href: "#contact" },
];

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      const active = menuItems.find((item) => {
        const element = document.querySelector(item.href);
        if (element) {
          const { offsetTop, offsetHeight } = element as HTMLElement;
          return (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          );
        }
        return false;
      });

      if (active) {
        setActiveItem(active.href);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <button
        className="fixed top-4 left-4 z-50 md:hidden bg-primary text-primary-foreground p-2 rounded-full shadow-lg animate-pulse"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <FaBars size={24} />
      </button>
      <aside
        className={`fixed left-0 top-0 h-screen w-64 bg-secondary text-secondary-foreground transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 z-40`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <img
              src="/images/n.jpeg"
              alt="Logo"
              className="w-16 h-16 mx-auto rounded-full animate-spin-slow"
            />
          </div>
          <nav className="flex-1">
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className={`flex items-center px-6 py-3 text-lg transition-all duration-300 ease-in-out transform hover:translate-x-2 ${
                      activeItem === item.href
                        ? "text-primary font-bold"
                        : "text-secondary-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <item.icon className="mr-4" />
                    <span className="relative">
                      {item.label}
                      {activeItem === item.href && (
                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-width-grow"></span>
                      )}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="p-6">
            <p className="text-sm text-center animate-pulse">
              © 2023 Judy Kagia
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
