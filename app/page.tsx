"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../components/sections/Header";
import Hero from "../components/sections/Hero";
import Portfolio from "../components/sections/Portfolio";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";

// Simple Badge component
const Badge = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="px-2 py-1 text-xs font-medium rounded-full bg-primary/20 text-primary">
      {children}
    </span>
  );
};

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sections = useRef<{ [key: string]: HTMLElement | null }>({});

  const registerSection = (id: string, element: HTMLElement | null) => {
    if (element) {
      sections.current[id] = element;
    }
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = sections.current[id];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      let currentSection = "home";

      Object.entries(sections.current).forEach(([id, element]) => {
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            currentSection = id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      <Header
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="container mx-auto px-4 pt-20">
        <Hero
          registerSection={registerSection}
          scrollToSection={scrollToSection}
        />

        <Portfolio registerSection={registerSection} />

        {/* Featured Projects Section */}
        <section
          id="projects"
          ref={(el) => registerSection("projects", el)}
          className="py-20"
        >
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Link href="/projects/codecommons" className="group">
                <div className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/60 h-full flex flex-col">
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/codecommons.png"
                      alt="CodeCommons"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">CodeCommons</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    A collaborative platform for developers to share and
                    discover code snippets, projects, and programming resources.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Node.js</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>GraphQL</Badge>
                  </div>
                </div>
              </Link>

              <Link href="/projects/local-marketplace" className="group">
                <div className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/60 h-full flex flex-col">
                  <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
                    <Image
                      src="/local.png"
                      alt="Local Marketplace"
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      unoptimized
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Local Marketplace</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    A platform connecting local vendors with customers in their
                    community, promoting sustainable shopping and small
                    businesses.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Next.js</Badge>
                    <Badge>Firebase</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>TypeScript</Badge>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>

        <About registerSection={registerSection} />
        <Contact registerSection={registerSection} />
        <Footer scrollToSection={scrollToSection} />
      </main>
    </div>
  );
}
