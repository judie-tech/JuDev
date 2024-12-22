import { Sidebar } from "@/components/sidebar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen flex">
      <Sidebar />
      <main className="flex-1 ml-16 md:ml-64 scroll-smooth">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
