import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Page() {
  return (
    <div className="container py-10">
      <Button variant="ghost" asChild className="mb-6">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </Button>

      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">CodeCommons</h1>
        <p className="text-muted-foreground mb-6">
          Posted on {new Date().toLocaleDateString()}
        </p>

        <div className="rounded-lg overflow-hidden mb-8 relative h-[400px]">
          <Image
            src="/codecommons.png"
            alt="CodeCommons project"
            fill
            sizes="(max-width: 768px) 100vw, 800px"
            className="object-cover object-center"
            priority
          />
        </div>

        <div className="prose max-w-none">
          <p className="text-lg">
            I am working on making a coding platform for Jain University
            students where students can ask coding related problems they face
            and can get help from students and professors.
          </p>

          <p>
            CodeCommons aims to create a collaborative environment where coding
            knowledge can be shared freely within the university community.
            Students struggling with programming assignments or personal
            projects can post their questions and receive guidance from peers
            and faculty members who have expertise in that area.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Question and answer forum specifically for code</li>
            <li>Code snippet sharing with syntax highlighting</li>
            <li>User profiles for students and professors</li>
            <li>Reputation system to recognize helpful contributors</li>
            <li>Integration with university course materials</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6 mb-3">Current Progress</h2>
          <p>
            The platform is currently in development with the basic forum
            functionality already implemented. I'm now working on the code
            editor integration and authentication system that will connect with
            university credentials.
          </p>

          <h2 className="text-xl font-semibold mt-6 mb-3">Technologies Used</h2>
          <p>
            This project is being built with React for the frontend, Express.js
            for the backend API, and MongoDB for the database. For the code
            editor component, I'm using Monaco Editor (the same editor that
            powers VS Code).
          </p>
        </div>
      </div>
    </div>
  );
}
