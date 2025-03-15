import { MotionDiv } from "@/components/motion-components";
import Image from "next/image";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const technologies = [
  {
    name: "React",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
  },
  {
    name: "Next.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
  },
  {
    name: "Nest.js",
    icon: "https://www.vectorlogo.zone/logos/nestjs/nestjs-icon.svg",
  },
  {
    name: "Git",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
  },
  {
    name: "MongoDB",
    icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
  },
];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background">
      <div className="container py-12 space-y-20 relative">
        {/* Hero Section with Animated Photo and Enhanced Bio */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center gap-12 bg-card/50 backdrop-blur-sm p-10 rounded-2xl border shadow-lg"
        >
          <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
            <Image
              src="/hero.jpeg"
              alt="Nabin Chapagain"
              fill
              className="object-cover"
            />
          </div>
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
              Nabin Chapagain
            </h1>
            <p className="text-xl text-muted-foreground">
              Computer Science Engineering Student & Developer
            </p>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                I'm a passionate developer with a love for creating intuitive
                and impactful web applications. My journey in tech is driven by
                curiosity and the desire to build solutions that make a
                difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies,
                contributing to open-source projects, and continuously expanding
                my knowledge in the ever-evolving world of software development.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center md:justify-start">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/nabin00012" target="_blank">
                  <Github className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="mailto:contact@example.com">
                  <Mail className="h-5 w-5" />
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link
                  href="https://linkedin.com/in/yourprofile"
                  target="_blank"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </MotionDiv>

        {/* Skills Section with Animation */}
        <MotionDiv
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <MotionDiv
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border hover:border-primary/50 transition-all hover:scale-105 group space-y-3"
              >
                <div className="relative h-12 w-12 mx-auto">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    fill
                    className="object-contain group-hover:scale-110 transition-transform"
                  />
                </div>
                <p className="text-center font-medium">{tech.name}</p>
              </MotionDiv>
            ))}
          </div>
        </MotionDiv>

        {/* Projects Section */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:scale-[1.02] group"
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/local.png"
                  alt="LocalMarketplace"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">LocalMarketplace</h3>
                <p className="text-muted-foreground">
                  A platform connecting local vendors with customers, built with
                  React and Node.js.
                </p>
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" asChild>
                    <Link
                      href="https://github.com/nabin00012/local-mart"
                      target="_blank"
                    >
                      <Github className="h-4 w-4 mr-2" /> View Project
                    </Link>
                  </Button>
                </div>
              </div>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="border rounded-xl overflow-hidden bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all hover:scale-[1.02] group"
            >
              <div className="relative h-48 w-full">
                <Image
                  src="/codecommons.png"
                  alt="CodeCommons"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold">CodeCommons</h3>
                <p className="text-muted-foreground">
                  A collaborative coding platform for developers to share and
                  review code snippets.
                </p>
                <div className="flex justify-end">
                  <Button variant="outline" size="sm" disabled>
                    <ExternalLink className="h-4 w-4 mr-2" /> Coming Soon
                  </Button>
                </div>
              </div>
            </MotionDiv>
          </div>
        </MotionDiv>

        {/* Education Section with enhanced styling */}
        <MotionDiv
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="space-y-8">
            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="border rounded-xl p-8 hover:border-primary/50 transition-all hover:scale-[1.02] bg-card/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold">
                Computer Science Engineering
              </h3>
              <p className="text-muted-foreground">
                Jain University, Bangalore
              </p>
              <p className="text-sm text-muted-foreground">2023 - Present</p>
              <p className="mt-2">
                Currently exploring advanced concepts in software development,
                data structures, and algorithms.
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="border rounded-xl p-8 hover:border-primary/50 transition-all hover:scale-[1.02] bg-card/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold">
                Higher Secondary Education
              </h3>
              <p className="text-muted-foreground">
                Deep Boarding High School, Butwal
              </p>
              <p className="text-sm text-muted-foreground">
                Grade 12 • GPA: 3.35/4
              </p>
              <p className="mt-2">
                Focused on science and mathematics, laying the foundation for my
                engineering career.
              </p>
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="border rounded-xl p-8 hover:border-primary/50 transition-all hover:scale-[1.02] bg-card/50 backdrop-blur-sm"
            >
              <h3 className="text-xl font-semibold">Secondary Education</h3>
              <p className="text-muted-foreground">
                Deep Boarding High School, Butwal
              </p>
              <p className="text-sm text-muted-foreground">
                Grade 10 • GPA: 3.5/4
              </p>
              <p className="mt-2">
                Developed a strong academic foundation with excellence in STEM
                subjects.
              </p>
            </MotionDiv>
          </div>
        </MotionDiv>
      </div>
    </div>
  );
}
