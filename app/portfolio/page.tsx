import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import {
  MotionDiv,
  MotionHeading,
  SkillIcon,
} from "@/components/animated-elements";

export default function PortfolioPage() {
  const skills = [
    { name: "GitHub" },
    { name: "Git" },
    { name: "TailwindCSS" },
    { name: "React.js" },
    { name: "Next.js" },
    { name: "Nest.js" },
    { name: "TypeScript" },
  ];

  return (
    <div className="container py-10 overflow-hidden">
      <div className="grid gap-8 md:grid-cols-2 items-center mb-16">
        <div>
          <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
            Nabin Chapagain
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Computer Science Engineering Student & Web Developer
          </p>
          <div>
            <p className="mb-4">
              I'm Nabin Chapagain, currently pursuing Computer Science
              Engineering in my 4th semester at Jain Global Campus, Kanakapura.
              Originally from Butwal, Nepal, I've developed a passion for
              creating web applications that solve real-world problems.
            </p>
            <p className="mb-6">
              My journey in technology has been driven by curiosity and a desire
              to build solutions that make a difference. I love working with
              modern web technologies and continuously expanding my knowledge in
              this ever-evolving field.
            </p>
          </div>
        </div>
        <div className="relative aspect-square p-1.5">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient-x"></div>
          <div className="relative h-full w-full rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/hero.jpeg"
              alt="Nabin Chapagain"
              fill
              className="object-cover scale-105 hover:scale-110 transition-transform duration-700 ease-in-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <Card className="hover:shadow-lg transition-all duration-300 hover:border-primary/50 overflow-hidden group">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center text-center">
                    <SkillIcon name={skill.name} />
                    <h3 className="text-xl font-medium group-hover:text-primary transition-colors duration-300">
                      {skill.name}
                    </h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mb-16 bg-gradient-to-br from-background to-primary/5 p-10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-6">
          Interested in Working Together?
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm always open to new opportunities, collaborations, and interesting
          projects. Let's connect and create something amazing together.
        </p>
        <div>
          <Button
            size="lg"
            asChild
            className="bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-700"
          >
            <Link href="/contact">
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
