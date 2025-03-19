"use client";

import Link from "next/link";
import { Github, Mail, Linkedin } from "lucide-react";
import { projects } from "@/data/projects";

interface FooterProps {
  scrollToSection: (id: string) => void;
}

export default function Footer({ scrollToSection }: FooterProps) {
  return (
    <footer className="py-12 border-t border-border/40 mt-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Showoff
            </h3>
            <p className="text-muted-foreground text-sm">
              A showcase of my projects and skills, demonstrating my expertise
              in web development and design.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Projects
            </h3>
            <ul className="space-y-2">
              {projects.map((project) => (
                <li key={project.title}>
                  <Link
                    href={project.demo}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Links
            </h3>
            <ul className="space-y-2">
              {["home", "portfolio", "projects", "about", "contact"].map(
                (section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nabin00012"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-card flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-8 h-8 rounded-full bg-card flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-card flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Showoff. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted-foreground">Made with</span>
            <span className="text-red-500">❤</span>
            <span className="text-xs text-muted-foreground">
              by Nabin Chapagain
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
