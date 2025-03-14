import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      id: 1,
      title: "LocalMart",
      description: "A hyperlocal marketplace full stack app built with Next.js, Node.js, and MongoDB.",
      image: "/placeholder.svg?height=400&width=600&text=LocalMart",
      category: "web",
      link: "#",
    },
    {
      id: 2,
      title: "E-Learning Platform",
      description: "Full stack application for online courses using React, Express, and PostgreSQL.",
      image: "/placeholder.svg?height=400&width=600&text=E-Learning",
      category: "web",
      link: "#",
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description: "Full stack messaging platform with Socket.io, React, and Node.js.",
      image: "/placeholder.svg?height=400&width=600&text=Chat+App",
      category: "web",
      link: "#",
    },
    {
      id: 4,
      title: "Task Management System",
      description: "Full stack project management tool with React, Redux, and Firebase.",
      image: "/placeholder.svg?height=400&width=600&text=Task+Management",
      category: "web",
      link: "#",
    },
    {
      id: 5,
      title: "Fitness Tracking App",
      description: "Mobile application for tracking workouts and nutrition with progress analytics.",
      image: "/placeholder.svg?height=400&width=600&text=Fitness+App",
      category: "mobile",
      link: "#",
    },
    {
      id: 6,
      title: "Content Management System",
      description: "Custom CMS built with Next.js, Prisma, and PostgreSQL for content creators.",
      image: "/placeholder.svg?height=400&width=600&text=CMS+Project",
      category: "web",
      link: "#",
    },
  ]

  return (
    <div className="container py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">My Portfolio</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A showcase of my projects, skills, and professional work across various domains.
        </p>
      </div>

      <Tabs defaultValue="all" className="mb-8">
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="all">All Projects</TabsTrigger>
            <TabsTrigger value="web">Web Development</TabsTrigger>
            <TabsTrigger value="mobile">Mobile Apps</TabsTrigger>
            <TabsTrigger value="other">Other Projects</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </TabsContent>

        <TabsContent value="web" className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "web")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="mobile" className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "mobile")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>

        <TabsContent value="other" className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter((project) => project.category === "other")
              .map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Skills & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "JavaScript",
            "TypeScript",
            "React",
            "Next.js",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "React Native",
            "Tailwind CSS",
            "GraphQL",
            "AWS",
            "Docker",
            "Git",
            "Figma",
            "Responsive Design",
          ].map((skill) => (
            <div key={skill} className="bg-muted rounded-lg p-4 text-center">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Interested in Working Together?</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">
            Get in Touch <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video relative">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-medium mb-2">{project.title}</h3>
        <p className="text-muted-foreground">{project.description}</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline" asChild className="w-full">
          <Link href={project.link}>
            View Project <ExternalLink className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

