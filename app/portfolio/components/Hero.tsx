"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex flex-col md:flex-row items-center gap-12 bg-card/50 backdrop-blur-sm p-10 rounded-2xl border shadow-lg dark:border-primary/10 dark:shadow-primary/5 relative overflow-hidden"
    >
      {/* Add animated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div 
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-cyan-500/5 opacity-50"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: "easeInOut",
          }}
        />
        
        {/* Add animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            boxShadow: [
              "inset 0 0 0px rgba(0,180,216,0)",
              "inset 0 0 10px rgba(0,180,216,0.3)",
              "inset 0 0 0px rgba(0,180,216,0)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      
      {/* Profile image with glow effect */}
      <motion.div
        className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-primary/20 shadow-xl group"
        whileHover={{ scale: 1.05, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute -inset-1 bg-gradient-to-r from-primary to-cyan-500 rounded-full opacity-70 blur-md z-0"
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Add pulsing effect */}
        <motion.div
          className="absolute -inset-4 rounded-full z-0"
          animate={{
            boxShadow: [
              "0 0 0px rgba(0,180,216,0)",
              "0 0 20px rgba(0,180,216,0.5)",
              "0 0 0px rgba(0,180,216,0)"
            ],
            scale: [0.8, 1.1, 0.8]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        
        <div className="relative z-10 w-full h-full rounded-full overflow-hidden">
          <Image
            src="/hero.jpeg"
            alt="Nabin Chapagain"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>
      
      {/* Bio content with enhanced animations */}
      <div className="space-y-6 text-center md:text-left">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold bg-gradient-to-r from-primary via-teal-500 to-cyan-500 bg-clip-text text-transparent"
        >
          Nabin Chapagain
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-xl text-muted-foreground"
        >
          Computer Science Engineering Student & Developer
        </motion.p>
        
        {/* Bio paragraphs with staggered animations */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="prose dark:prose-invert max-w-none"
        >
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="absolute -left-4 top-0 text-primary text-xl">›</span>
            I'm a passionate developer with a love for creating intuitive
            and impactful web applications. My journey in tech is driven by
            curiosity and the desire to build solutions that make a
            difference.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <span className="absolute -left-4 top-0 text-primary text-xl">›</span>
            When I'm not coding, you'll find me exploring new technologies,
            contributing to open-source projects, and continuously expanding
            my knowledge in the ever-evolving world of software development.
          </motion.p>
        </motion.div>
      
        {/* Social Links with hover effects */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex gap-4 justify-center md:justify-start"
        >
          <Button
            variant="outline"
            size="icon"
            asChild
            className="hover-lift hover:border-primary/50 hover:bg-primary/5 relative overflow-hidden group"
          >
            <Link href="https://github.com/nabin00012" target="_blank">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Github className="h-5 w-5 relative z-10" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="hover-lift hover:border-primary/50 hover:bg-primary/5 relative overflow-hidden group"
          >
            <Link href="mailto:contact@example.com">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Mail className="h-5 w-5 relative z-10" />
            </Link>
          </Button>
          <Button
            variant="outline"
            size="icon"
            asChild
            className="hover-lift hover:border-primary/50 hover:bg-primary/5 relative overflow-hidden group"
          >
            <Link href="https://linkedin.com/in/yourprofile" target="_blank">
              <span className="absolute inset-0 bg-gradient-to-r from-primary/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <Linkedin className="h-5 w-5 relative z-10" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}