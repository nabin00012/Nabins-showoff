import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Camera, Code, Lightbulb, Pencil } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="container py-10">
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          What This Platform Is About
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Camera className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Visual Learning</h3>
                <p className="text-muted-foreground">
                  Capturing moments of insight and progress through photography,
                  creating a visual diary of growth.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Daily Discoveries</h3>
                <p className="text-muted-foreground">
                  Sharing new insights, techniques, and knowledge gained through
                  continuous learning and experimentation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <div className="p-3 rounded-full bg-primary/10 mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Project Updates</h3>
                <p className="text-muted-foreground">
                  Documenting the evolution of personal and professional
                  projects, from concept to completion.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-6">
          My Learning Philosophy
        </h2>
        <p className="text-center text-lg text-muted-foreground max-w-3xl mx-auto mb-10">
          I believe that learning is a lifelong journey, best experienced
          through practice, reflection, and sharing with others.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-medium flex items-center gap-2">
              <Pencil className="h-5 w-5 text-primary" />
              Learn by Doing
            </h3>
            <p>
              The most effective way to learn is through hands-on experience. I
              challenge myself to apply new concepts through practical projects,
              experiments, and real-world applications.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium flex items-center gap-2">
              <Camera className="h-5 w-5 text-primary" />
              Document the Journey
            </h3>
            <p>
              By capturing and sharing my learning experiences, I create a
              valuable record of growth and insights that can benefit both
              myself and others on similar paths.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium flex items-center gap-2">
              <Lightbulb className="h-5 w-5 text-primary" />
              Embrace Challenges
            </h3>
            <p>
              The most significant growth happens outside of comfort zones. I
              actively seek challenges that push my boundaries and develop new
              skills and perspectives.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-medium flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              Share Knowledge
            </h3>
            <p>
              Knowledge grows when shared. By documenting and explaining what
              I've learned, I deepen my own understanding while potentially
              helping others on their learning journeys.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Join Me On This Journey</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
          I'd love for you to follow along, engage with my posts, and share your
          own insights and experiences.
        </p>
        <Button size="lg" asChild>
          <Link href="/feed">
            Explore My ShowOff <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
