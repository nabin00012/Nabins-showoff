"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ProjectsProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
}

export default function Projects({ registerSection }: ProjectsProps) {
  const projects = [
    {
      id: "codecommons",
      title: "CodeCommons",
      description:
        "A collaborative platform for developers to share code snippets, collaborate on projects, and learn from each other.",
      image: "/codecommons-preview.jpg",
      demoLink: "https://codecommons-demo.vercel.app",
      githubLink: "https://github.com/nabin00012/codecommons",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "local-marketplace",
      title: "Local Marketplace",
      description:
        "A community-driven marketplace connecting local vendors with customers, promoting sustainable shopping and supporting small businesses.",
      image: "/marketplace-preview.jpg",
      demoLink: "https://local-marketplace-demo.vercel.app",
      githubLink: "https://github.com/nabin00012/local-marketplace",
      technologies: ["Next.js", "Tailwind CSS", "Firebase"],
    },
  ];

  return (
    <section
      id="projects"
      ref={(el) => registerSection("projects", el)}
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
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-card/50 rounded-xl border border-border/50 overflow-hidden shadow-lg backdrop-blur-sm hover:shadow-xl transition-all duration-300 group"
            >
              <div className="relative h-60 w-full">
                <Image
                  src={project.image}
                  alt={`${project.title} Preview`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-muted-foreground line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/20 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center pt-4">
                  <Button asChild variant="outline" size="sm">
                    <Link href={`/projects/${project.id}`}>
                      <ExternalLink className="mr-2 h-4 w-4" /> View Details
                    </Link>
                  </Button>
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <a
                        href={project.demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button
                      asChild
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <Button asChild variant="outline" size="lg" className="group">
            <a
              href="https://github.com/nabin00012"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
