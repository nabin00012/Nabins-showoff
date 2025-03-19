import { Code, ShoppingBag } from "lucide-react";

export type ProjectType = {
  title: string;
  description: string;
  image: string;
  iconType: "code" | "shopping";
  tags: string[];
  github: string;
  demo: string;
  color: string;
  status: "completed" | "ongoing";
};

export const projects: ProjectType[] = [
  {
    title: "CodeCommons",
    description:
      "A code solving platform for Jain University students where they can ask coding-related questions and get answers from knowledgeable teachers and professors.",
    image: "/codecommons.png",
    iconType: "code",
    tags: ["TypeScript", "JavaScript", "Tailwind CSS", "React"],
    github: "#", // Will be provided after completion
    demo: "/codecommons",
    color: "from-blue-500 to-cyan-400",
    status: "ongoing"
  },
  {
    title: "LocalMarketplace",
    description:
      "A platform that connects users within the same pincode to sell products to their neighbors, encouraging local production and community engagement.",
    image: "/local.png",
    iconType: "shopping",
    tags: ["Next.js", "React", "Node.js", "MongoDB"],
    github: "https://github.com/nabin00012/local-mart",
    demo: "/localmarketplace",
    color: "from-green-500 to-emerald-400",
    status: "completed"
  },
];
