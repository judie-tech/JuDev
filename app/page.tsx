import { Sidebar } from "@/components/sidebar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col md:flex-row">
      <Sidebar />
      <main className="flex-1 md:ml-64 px-4 md:px-8 max-w-screen-xl mx-auto w-full">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
