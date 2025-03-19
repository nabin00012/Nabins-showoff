"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CodeCommonsProject() {
  return (
    <div className="container max-w-4xl py-20">
      <Link href="/#portfolio" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-8"
      >
        <div className="relative h-80 w-full rounded-xl overflow-hidden">
          <Image
            src="/codecommons-preview.jpg"
            alt="CodeCommons Preview"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-8">
            <h1 className="text-4xl font-bold text-white">CodeCommons</h1>
            <p className="text-white/80 mt-2">Collaborative Platform for Developers</p>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <div className="flex gap-4">
            <Button asChild variant="default">
              <a href="https://codecommons-demo.vercel.app" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            </Button>
            <Button asChild variant="outline">
              <a href="https://github.com/nabin00012/codecommons" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> Source Code
              </a>
            </Button>
          </div>
          
          <div className="flex gap-2">
            <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">Node.js</span>
            <span className="px-3 py-1 bg-primary/20 rounded-full text-sm">MongoDB</span>
          </div>
        </div>
        
        <div className="space-y-6 prose prose-invert max-w-none">
          <h2>Project Overview</h2>
          <p>
            CodeCommons is a collaborative platform designed to bring developers together to share code snippets, collaborate on projects, and learn from each other. The platform aims to create a community-driven ecosystem where knowledge sharing is seamless and accessible.
          </p>
          
          <h2>Vision & Mission</h2>
          <p>
            The vision behind CodeCommons is to democratize coding knowledge and make collaboration easier for developers of all skill levels. We believe that by creating an open platform for sharing code and ideas, we can accelerate innovation and help developers grow their skills faster.
          </p>
          
          <h2>Key Features</h2>
          <ul>
            <li><strong>Code Snippet Repository:</strong> Share, discover, and fork code snippets across multiple programming languages</li>
            <li><strong>Collaborative Editing:</strong> Real-time collaborative code editing with syntax highlighting</li>
            <li><strong>Community Discussions:</strong> Ask questions, provide answers, and engage in technical discussions</li>
            <li><strong>Project Showcase:</strong> Showcase your projects and get feedback from the community</li>
            <li><strong>Learning Paths:</strong> Curated learning resources and tutorials for various technologies</li>
          </ul>
          
          <h2>Technical Implementation</h2>
          <p>
            CodeCommons is built using a modern tech stack including React for the frontend, Node.js for the backend API, and MongoDB for data storage. The platform implements real-time collaboration using WebSockets and features a microservices architecture for scalability.
          </p>
          
          <h2>Impact & Results</h2>
          <p>
            Since its launch, CodeCommons has helped thousands of developers share their knowledge and collaborate on projects. The platform has fostered a vibrant community of coders who actively contribute to open-source projects and help each other grow their skills.
          </p>
          
          <h2>Future Roadmap</h2>
          <p>
            We're continuously improving CodeCommons with new features and enhancements. Our roadmap includes:
          </p>
          <ul>
            <li>Advanced code review tools</li>
            <li>AI-powered code suggestions</li>
            <li>Expanded learning resources</li>
            <li>Integration with popular development tools</li>
            <li>Mobile application for on-the-go coding</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}