"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
}

export default function Portfolio({ registerSection }: PortfolioProps) {
  const technologies = [
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "Node.js",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "MongoDB",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "TypeScript",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    },
    {
      name: "Git",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    },
    {
      name: "GitHub",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    },
    {
      name: "HTML5",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Firebase",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
    },
  ];

  return (
    <section
      id="portfolio"
      ref={(el) => registerSection("portfolio", el)}
      className="min-h-screen py-20 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="space-y-16"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent"
        >
          My Portfolio
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Nabin Chapagain
            </h3>
            <p className="text-xl text-muted-foreground">
              Web Developer & Designer
            </p>

            <div className="space-y-4 mt-6">
              <p className="text-muted-foreground">
                I'm a passionate web developer with expertise in modern web
                technologies. I love creating beautiful, functional, and
                user-friendly applications.
              </p>
              <h4 className="text-xl font-semibold mt-6">Technical Skills</h4>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
                {technologies.slice(0, 12).map((tech) => (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center p-3 bg-card rounded-lg hover:shadow-md transition-all duration-300 hover:scale-105 hover:bg-primary/5"
                  >
                    <div className="w-10 h-10 relative mb-2">
                      <Image
                        src={tech.icon}
                        alt={tech.name}
                        width={40}
                        height={40}
                      />
                    </div>
                    <span className="text-xs font-medium text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-card/30 p-6 rounded-xl border border-border/50 shadow-lg backdrop-blur-sm"
          >
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary">
                <Image
                  src="/hero.jpeg"
                  alt="Nabin Chapagain"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex gap-4">
                <Button
                  asChild
                  className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90"
                >
                  <a
                    href="https://github.com/nabin00012"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" /> GitHub
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="mailto:nabbuchapagain11@gmail.com">
                    <Mail className="mr-2 h-4 w-4" /> Contact Me
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
