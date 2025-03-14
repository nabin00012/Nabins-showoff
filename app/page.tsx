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
            <Link
              href="/login"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Login
            </Link>
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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-lg border"
                >
                  <Link href={`/post/${i}`} className="absolute inset-0 z-10">
                    <span className="sr-only">View Post</span>
                  </Link>
                  <Image
                    src={`/placeholder.svg?height=400&width=400`}
                    alt="Post thumbnail"
                    width={400}
                    height={400}
                    className="object-cover w-full aspect-square transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 w-full bg-gradient-to-t from-background to-transparent p-4">
                    <div className="space-y-1">
                      <h3 className="font-medium leading-none">
                        Learning Experience #{i}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Posted on {new Date().toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center gap-1">
                        <Heart className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {Math.floor(Math.random() * 50) + 5}
                        </span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MessageSquare className="h-4 w-4 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">
                          {Math.floor(Math.random() * 10) + 1}
                        </span>
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
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
