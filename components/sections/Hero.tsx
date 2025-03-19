"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
  scrollToSection: (id: string) => void;
}

export default function Hero({ registerSection, scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      ref={(el) => registerSection("home", el)}
      className="min-h-screen flex items-center py-20 scroll-mt-20"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block"
          >
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
              Web Developer
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-4xl md:text-6xl font-bold"
          >
            Showcasing my{" "}
            <span className="bg-gradient-to-r from-primary via-purple-500 to-blue-500 bg-clip-text text-transparent">
              projects
            </span>{" "}
            and skills
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-xl text-muted-foreground"
          >
            Welcome to my portfolio! I'm passionate about creating beautiful,
            functional, and user-friendly web applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90"
              size="lg"
            >
              View My Projects
            </Button>
            <Button
              onClick={() => scrollToSection("contact")}
              variant="outline"
              size="lg"
            >
              Contact Me
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-500 rounded-2xl blur-md opacity-50"></div>
          <div className="relative bg-card/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-border p-6">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-1 space-y-4">
                <div className="bg-primary/10 p-4 rounded-xl flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary mb-2"
                  >
                    <path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path>
                  </svg>
                  <h4 className="font-medium text-sm">Frontend</h4>
                  <p className="text-xs text-center text-muted-foreground">
                    React, Next.js
                  </p>
                </div>
              </div>

              <div className="col-span-2 row-span-2 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl p-4 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-center mb-2">Education</h3>
                <ul className="space-y-3">
                  <li className="bg-card/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm">Jain University, Bangalore</h4>
                    <p className="text-xs text-muted-foreground">B.Tech Computer Science</p>
                    <p className="text-xs text-muted-foreground">2nd Semester (Current)</p>
                  </li>
                  <li className="bg-card/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm">Deep Boarding High School</h4>
                    <p className="text-xs text-muted-foreground">Grade 12th (Science) - GPA: 3.35/4</p>
                  </li>
                  <li className="bg-card/50 p-3 rounded-lg">
                    <h4 className="font-medium text-sm">Deep Boarding High School</h4>
                    <p className="text-xs text-muted-foreground">Grade 10th - GPA: 3.5/4</p>
                  </li>
                </ul>
              </div>

              <div className="col-span-1 space-y-4">
                <div className="bg-purple-500/10 p-4 rounded-xl flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-purple-500 mb-2"
                  >
                    <path d="M20 17.58A5 5 0 0 0 18 8h-1.26A8 8 0 1 0 4 16.25"></path>
                    <line x1="8" y1="16" x2="8.01" y2="16"></line>
                    <line x1="8" y1="20" x2="8.01" y2="20"></line>
                    <line x1="12" y1="18" x2="12.01" y2="18"></line>
                    <line x1="12" y1="22" x2="12.01" y2="22"></line>
                    <line x1="16" y1="16" x2="16.01" y2="16"></line>
                    <line x1="16" y1="20" x2="16.01" y2="20"></line>
                  </svg>
                  <h4 className="font-medium text-sm">Backend</h4>
                  <p className="text-xs text-center text-muted-foreground">
                    Node.js, Express
                  </p>
                </div>
              </div>

              <div className="col-span-2 space-y-4">
                <div className="bg-blue-500/10 p-4 rounded-xl flex flex-col items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-500 mb-2"
                  >
                    <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                    <path d="M2 17l10 5 10-5"></path>
                    <path d="M2 12l10 5 10-5"></path>
                  </svg>
                  <h4 className="font-medium text-sm">Database</h4>
                  <p className="text-xs text-center text-muted-foreground">
                    MongoDB, Firebase
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold">Nabin Chapagain</h3>
                  <p className="text-sm text-muted-foreground">
                    Full Stack Developer
                  </p>
                </div>
                <div className="flex gap-2">
                  <a
                    href="https://github.com/nabin00012"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-card flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/nabin-chapagain-a9791525b/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-card flex items-center justify-center hover:bg-primary/10 transition-colors duration-200"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
