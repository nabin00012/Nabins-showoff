import Image from "next/image";
import { motion } from "framer-motion";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

interface PortfolioProps {
  registerSection: (id: string, element: HTMLElement | null) => void;
}

export default function Portfolio({ registerSection }: PortfolioProps) {
  // Updated technology objects with React icons
  const technologies = [
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#007ACC",
    },
    {
      name: "React",
      icon: SiReact,
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      icon: SiNextdotjs,
      color: "#000000",
    },
    {
      name: "Node.js",
      icon: SiNodedotjs,
      color: "#68A063",
    },
    {
      name: "TailwindCSS",
      icon: SiTailwindcss,
      color: "#38BDF8",
    },
    {
      name: "Firebase",
      icon: SiFirebase,
      color: "#FFCB2C",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "#4CAF50",
    },
    {
      name: "Express",
      icon: SiExpress,
      color: "#000000",
    },
  ];

  return (
    <section
      id="portfolio"
      ref={(el) => registerSection("portfolio", el)}
      className="py-20 relative overflow-hidden"
    >
      {/* Background animation elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            My Portfolio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate full-stack developer with expertise in creating
            beautiful, functional, and user-friendly web applications. I love
            turning complex problems into elegant solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Profile Image - Enhanced with better effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              {/* Multiple animated gradient rings */}
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-secondary rounded-full blur-xl opacity-70 group-hover:opacity-100 animate-pulse transition-opacity duration-700"></div>
              <div
                className="absolute -inset-2 bg-gradient-to-r from-secondary to-primary rounded-full blur-xl opacity-50 group-hover:opacity-80 animate-pulse"
                style={{ animationDelay: "300ms" }}
              ></div>
              <div
                className="absolute -inset-3 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur-xl opacity-30 group-hover:opacity-60 animate-pulse"
                style={{ animationDelay: "600ms" }}
              ></div>

              {/* Image container with enhanced styling */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-background/80 shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 z-10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <Image
                  src="/hero.jpeg"
                  alt="Nabin Chapagain"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>
            </div>
          </motion.div>

          {/* About Me - Enhanced with better styling and animations */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative elements */}
            <div className="absolute -top-6 -left-6 w-12 h-12 border-t-2 border-l-2 border-primary/30 rounded-tl-lg"></div>
            <div className="absolute -bottom-6 -right-6 w-12 h-12 border-b-2 border-r-2 border-secondary/30 rounded-br-lg"></div>

            <h3 className="text-4xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
              About Me
            </h3>

            <div className="space-y-6 relative">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm{" "}
                <span className="font-semibold text-foreground">
                  Nabin Chapagain
                </span>
                , a Full Stack Developer with a passion for creating innovative
                web solutions. With expertise in modern frameworks and
                technologies, I build applications that are not only functional
                but also provide exceptional user experiences.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines technical excellence with creative
                problem-solving, ensuring that every project I work on exceeds
                expectations and delivers real value.
              </p>

              {/* Skills badges */}
              <div className="pt-4">
                <h4 className="text-lg font-medium mb-3 text-foreground/90">
                  My Expertise:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "UI/UX Design",
                    "Frontend Development",
                    "Backend Systems",
                    "Database Design",
                    "API Integration",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Technologies - Fixed implementation with dark mode support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col items-center"
              >
                <div className="relative">
                  {/* Glow effect */}
                  <div
                    className="absolute -inset-4 rounded-xl blur-xl opacity-30 group-hover:opacity-70 transition-opacity duration-500"
                    style={{ backgroundColor: tech.color }}
                  ></div>

                  {/* Technology card with React icon */}
                  <div className="relative w-24 h-24 rounded-xl overflow-hidden bg-card/40 backdrop-blur-sm border border-border/50 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                    {/* Background color */}
                    <div
                      className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-300"
                      style={{ backgroundColor: tech.color }}
                    ></div>

                    {/* Technology icon with React icons */}
                    {tech.name === "Next.js" || tech.name === "Express" ? (
                      <div className="relative z-10 w-12 h-12 flex items-center justify-center">
                        <tech.icon className="w-full h-full transition-transform duration-300 group-hover:scale-110 text-white" />
                      </div>
                    ) : (
                      <tech.icon
                        className="relative z-10 w-12 h-12 transition-transform duration-300 group-hover:scale-110"
                        style={{ color: tech.color }}
                      />
                    )}
                  </div>
                </div>
                <span className="mt-3 font-medium">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
