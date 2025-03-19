import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart } from "lucide-react";

export default function FeedPage() {
  console.log("Rendering FeedPage");

  const projects = [
    {
      id: 1,
      title: "LocalMarketplace",
      description:
        "A marketplace for local vendors and customers within the same pincode.",
      image: "/local.png",
      date: new Date().toLocaleDateString(),
      likes: 42,
      postLink: "/post/1",
      sourceLink: "https://github.com/nabin00012/local-mart",
      sourceAvailable: true,
    },
    {
      id: 2,
      title: "CodeCommons",
      description:
        "A coding platform for Jain University students to ask and answer coding questions.",
      image: "/codecommons.png",
      date: new Date().toLocaleDateString(),
      likes: 28,
      postLink: "/post/2",
      sourceAvailable: false,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Button variant="ghost" asChild className="mr-auto">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <h1 className="text-3xl font-bold mb-8">My Projects</h1>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <div key={project.id} className="rounded-lg border overflow-hidden">
              <div className="relative h-[250px] bg-muted">
                <Image
                  src={project.image}
                  alt={`${project.title} thumbnail`}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    Posted on {project.date}
                  </span>
                  <div className="flex items-center gap-1">
                    <Heart className="h-4 w-4 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">
                      {project.likes}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button asChild>
                    <Link href={project.postLink}>View Details</Link>
                  </Button>

                  {project.sourceAvailable ? (
                    <Button variant="outline" asChild>
                      <Link
                        href={project.sourceLink || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          className="mr-2 h-4 w-4"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Source Code
                      </Link>
                    </Button>
                  ) : (
                    <Button variant="outline" disabled>
                      <svg
                        className="mr-2 h-4 w-4"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                      Coming Soon
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} ShowOff. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
