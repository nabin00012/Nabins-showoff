"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AboutProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
}

export default function About({ registerSection }: AboutProps) {
  return (
    <section
      id="about"
      ref={(el) => registerSection("about", el)}
      className="min-h-screen py-20 scroll-mt-20 relative"
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
          About Showoff
        </motion.h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur-md opacity-50"></div>
            <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-border p-8">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-6">
                My Project Showcase
              </h3>
              <p className="text-muted-foreground mb-6">
                Showoff is my personal portfolio platform where I showcase all my projects and skills. It serves as a live demonstration of my capabilities as a web developer.
              </p>
              <p className="text-muted-foreground mb-6">
                I will be continuously updating this platform with new projects, skills, and achievements. It's a living portfolio that grows with my journey as a developer.
              </p>
              <div className="flex flex-wrap gap-3 mt-6">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Portfolio
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Project Showcase
                </span>
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  Web Development
                </span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">Why Showoff?</h3>
            <p className="text-muted-foreground">
              Showoff is more than just a portfolio—it's a demonstration of my skills, creativity, and passion for web development.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M12 2L2 7l10 5 10-5-10-5z" />
                    <path d="M2 17l10 5 10-5" />
                    <path d="M2 12l10 5 10-5" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Project Repository</h4>
                  <p className="text-muted-foreground text-sm">
                    A centralized location for all my projects, making it easy to browse through my work and see my development journey.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                    <polyline points="14 2 14 8 20 8" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Skill Documentation</h4>
                  <p className="text-muted-foreground text-sm">
                    A visual representation of my technical skills and capabilities, showcasing my expertise in various technologies.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <path d="M5 3v16h16" />
                    <path d="m5 19 6-6" />
                    <path d="m2 6 3-3 3 3" />
                    <path d="m18 16 3 3-3 3" />
                    <path d="m19 5-7 7" />
                    <path d="m9 15 2 2" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium">Growth Tracking</h4>
                  <p className="text-muted-foreground text-sm">
                    A way to track my progress and growth as a developer, showing how my skills and projects evolve over time.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}