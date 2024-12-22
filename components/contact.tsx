"use client"; // Mark this as a Client Component

import React, { useState } from "react";
import { IconType } from "react-icons"; // Import IconType for proper typing
import {
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";

// Define the types for the props
interface ContactItemProps {
  icon: IconType; // React-icons exports a type for icons
  label: string;
  value: string;
  link?: string; // Optional because not all items have a link
}

const ContactItem: React.FC<ContactItemProps> = ({
  icon: Icon,
  label,
  value,
  link,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex items-center space-x-4 p-4 bg-secondary/50 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`text-primary text-2xl transition-all duration-300 ${
          isHovered ? "rotate-12 scale-110" : ""
        }`}
      >
        <Icon />
      </div>
      <div>
        <h4 className="text-sm text-muted-foreground">{label}</h4>
        {link ? (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            {value}
          </a>
        ) : (
          <p className="text-foreground">{value}</p>
        )}
      </div>
    </div>
  );
};

export function Contact() {
  const [activeSection, setActiveSection] = useState("info");

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center bg-background p-8"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-4xl font-bold mb-8 text-center font-playfair animate-slideInTop">
          Get in Touch
        </h2>
        <div className="bg-secondary/30 backdrop-blur-sm rounded-lg p-8 shadow-lg animate-fadeIn">
          <div className="flex justify-center mb-8">
            <button
              className={`px-4 py-2 rounded-l-lg ${
                activeSection === "info"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              } transition-colors`}
              onClick={() => setActiveSection("info")}
            >
              Contact Info
            </button>
            <button
              className={`px-4 py-2 rounded-r-lg ${
                activeSection === "social"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground"
              } transition-colors`}
              onClick={() => setActiveSection("social")}
            >
              Social Media
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeSection === "info" ? (
              <>
                <ContactItem
                  icon={FaEnvelope}
                  label="Email"
                  value="jnyokabi53@gmail.com"
                  link="mailto:youremail@example.com"
                />
                <ContactItem
                  icon={FaPhone}
                  label="Phone"
                  value="0713 793 895"
                  link="tel:+11234567890"
                />
                <ContactItem
                  icon={FaMapMarkerAlt}
                  label="Location"
                  value="Nairobi, Kenya"
                />
              </>
            ) : (
              <>
                <ContactItem
                  icon={FaLinkedin}
                  label="LinkedIn"
                  value="LinkedIn Profile"
                  link="https://www.linkedin.com/in/judy-kagia-27884b200/"
                />
                <ContactItem
                  icon={FaGithub}
                  label="GitHub"
                  value="GitHub Profile"
                  link="https://github.com/judie-tech"
                />
                <ContactItem
                  icon={FaInstagram}
                  label="Instagram"
                  value="Instagram Profile"
                  link="https://www.instagram.com/jn_kagia/"
                />
              </>
            )}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg animate-pulse">
              I am always open to new opportunities and collaborations. Feel
              free to reach out!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
