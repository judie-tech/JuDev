import { FaGithub, FaLinkedin, FaInstagram, FaDribbble } from "react-icons/fa";

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-background p-8"
    >
      <div className="text-center">
        <div className="mb-8 animate-fadeIn">
          <img
            src="/images/n.jpeg"
            alt="Your Name"
            className="w-48 h-48 rounded-full mx-auto border-4 border-primary"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 font-playfair animate-slideInTop">
          Hi, I'm <span className="text-primary">Judy Kagia</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-montserrat animate-slideInBottom">
          Software Developer | Problem Solver | Tech Enthusiast
        </p>
        <div className="flex justify-center space-x-4 mb-8">
          <a
            href="https://github.com/judie-tech"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <FaGithub
              size={24}
              className="animate-bounce"
              style={{ animationDelay: "0s" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/judy-kagia-27884b200/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <FaLinkedin
              size={24}
              className="animate-bounce"
              style={{ animationDelay: "0.1s" }}
            />
          </a>
          <a
            href="https://www.instagram.com/jn_kagia/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <FaInstagram
              size={24}
              className="animate-bounce"
              style={{ animationDelay: "0.2s" }}
            />
          </a>
          <a
            href="https://dribbble.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary transition-colors"
          >
            <FaDribbble
              size={24}
              className="animate-bounce"
              style={{ animationDelay: "0.3s" }}
            />
          </a>
        </div>
        <div className="flex justify-center space-x-4 animate-slideInBottom">
          <a
            href="#about"
            className="inline-block bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
          >
            Learn More
          </a>
          <a
            href="/Judy Kagia CV 2024.pdf"
            download
            className="inline-block bg-secondary text-secondary-foreground px-6 py-3 rounded-full hover:bg-secondary/90 transition-colors"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
