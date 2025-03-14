import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Camera, Heart, MessageSquare } from "lucide-react";
import Image from "next/image";
import { Mail } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-10 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <Camera className="h-5 w-5" />
            <span>ShowOff</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="/about"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              About
            </Link>
            <Link
              href="/portfolio"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Portfolio
            </Link>
            {/* Removing the login link */}
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-primary/10 via-background to-purple-500/10">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl gradient-text">
                  Nabin Chapagain's ShowOff
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  A visual diary of my daily discoveries, projects, and growth.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild className="button-glow">
                  <Link href="/feed">
                    Browse Me <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="button-glow">
                  <Link href="/contact">
                    Connect With Me <Mail className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              {/* Remove the phone number and location div from here */}
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Recent Updates
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Check out my latest learning experiences and project updates.
                </p>
              </div>
            </div>
            {/* Recent updates section with project cards */}
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-2 mt-8">
              {[1, 2].map((i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border flex flex-col"
                >
                  <Link href={`/post/${i}`} className="absolute inset-0 z-10">
                    <span className="sr-only">View Post</span>
                  </Link>
                  <div className="relative h-[220px] w-full">
                    <Image
                      src={i === 1 ? "/local.png" : "/codecommons.png"}
                      alt={
                        i === 1
                          ? "LocalMarketplace thumbnail"
                          : "CodeCommons thumbnail"
                      }
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Project details moved to a separate section below the image */}
                  <div className="p-4 flex-1 flex flex-col">
                    <h3 className="font-medium text-lg mb-1">
                      {i === 1 ? "LocalMarketplace" : "CodeCommons"}
                    </h3>

                    <div className="mt-auto flex items-center justify-between pt-3 border-t mt-3">
                      <p className="text-sm text-muted-foreground">
                        {new Date().toLocaleDateString()}
                      </p>

                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                          <Heart className="h-4 w-4 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">
                            {Math.floor(Math.random() * 50) + 5}
                          </span>
                        </div>

                        {i === 1 ? (
                          <Link
                            href="https://github.com/nabin00012/local-mart"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs flex items-center gap-1 text-muted-foreground hover:text-primary z-20"
                          >
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            GitHub
                          </Link>
                        ) : (
                          <span className="text-xs flex items-center gap-1 text-muted-foreground">
                            <svg
                              className="h-4 w-4"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                            Coming Soon
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} ShowOff. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {/* Button removed from here */}
          </div>
        </div>
      </footer>
    </div>
  );
}
