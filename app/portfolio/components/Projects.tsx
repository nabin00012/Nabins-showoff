"use client";

import { motion } from "@/app/components/motion-wrapper";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8"
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl font-bold text-center bg-gradient-to-r from-primary via-teal-500 to-cyan-500 bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Project 1 with 3D hover effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          className="group rounded-xl overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 relative"
          whileHover={{
            scale: 1.02,
            rotateY: 5,
            rotateX: 5,
            z: 10,
          }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute -inset-[1px] rounded-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              background: [
                "linear-gradient(90deg, rgba(0,180,216,0.3) 0%, rgba(56,189,248,0.3) 25%, rgba(0,180,216,0.3) 50%, rgba(56,189,248,0.3) 75%, rgba(0,180,216,0.3) 100%)",
              ],
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="relative z-10">
            <div className="relative h-48 overflow-hidden">
              <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                  alt="Project 1"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 left-4 z-20"
              >
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded-full backdrop-blur-sm">
                    React
                  </span>
                  <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded-full backdrop-blur-sm">
                    Next.js
                  </span>
                  <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded-full backdrop-blur-sm">
                    Tailwind
                  </span>
                </div>
              </motion.div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                DevConnect
              </h3>
              <p className="text-muted-foreground">
                A social platform for developers to connect, share projects, and
                collaborate on coding challenges.
              </p>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group-hover:border-primary/50 group-hover:text-primary transition-all duration-300"
                >
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-4 w-4 mr-2" /> View Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project 2 with 3D hover effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, margin: "-50px" }}
          className="group rounded-xl overflow-hidden border border-primary/10 bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-500 relative"
          whileHover={{
            scale: 1.02,
            rotateY: -5,
            rotateX: 5,
            z: 10,
          }}
        >
          {/* Animated gradient border */}
          <motion.div
            className="absolute -inset-[1px] rounded-xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            animate={{
              background: [
                "linear-gradient(90deg, rgba(0,180,216,0.3) 0%, rgba(56,189,248,0.3) 25%, rgba(0,180,216,0.3) 50%, rgba(56,189,248,0.3) 75%, rgba(0,180,216,0.3) 100%)",
              ],
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          <div className="relative z-10">
            <div className="relative h-48 overflow-hidden">
              <motion.div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                <Image
                  src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop"
                  alt="Project 2"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute bottom-4 left-4 z-20"
              >
                <div className="flex gap-2">
                  <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded-full backdrop-blur-sm">
                    Node.js
                  </span>
                  <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded-full backdrop-blur-sm">
                    Express
                  </span>
                  <span className="px-2 py-1 bg-primary/80 text-white text-xs rounded-full backdrop-blur-sm">
                    MongoDB
                  </span>
                </div>
              </motion.div>
            </div>
            <div className="p-6 space-y-3">
              <h3 className="text-xl font-semibold group-hover:text-primary transition-colors duration-300">
                TaskMaster API
              </h3>
              <p className="text-muted-foreground">
                A robust REST API for task management with authentication,
                real-time updates, and comprehensive documentation.
              </p>
              <div className="flex justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="group-hover:border-primary/50 group-hover:text-primary transition-all duration-300"
                >
                  <Link href="https://github.com" target="_blank">
                    <Github className="h-4 w-4 mr-2" /> View Project
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
