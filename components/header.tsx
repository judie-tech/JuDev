"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold font-playfair">
          Judy Kagia
        </a>
        <nav className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-primary transition-colors">
            About
          </a>
          <a href="#skills" className="hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#projects" className="hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary transition-colors">
            Contact
          </a>
        </nav>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden bg-background p-4">
          <div className="flex flex-col space-y-4">
            <a
              href="#about"
              className="hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <a
              href="#skills"
              className="hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="hover:text-primary transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
