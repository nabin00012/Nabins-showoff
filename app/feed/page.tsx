import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, MessageSquare, Share2, Mail } from "lucide-react"

export default function FeedPage() {
  // This would normally come from a database
  const posts = [
    {
      id: 1,
      title: "Learning React Hooks",
      description: "Today I learned about useEffect and how it can be used for side effects in functional components.",
      date: "2023-05-15",
      likes: 24,
      comments: 3,
    },
    {
      id: 2,
      title: "Building with Next.js",
      description: "Exploring the App Router and Server Components in Next.js 13. The developer experience is amazing!",
      date: "2023-05-12",
      likes: 42,
      comments: 7,
    },
    {
      id: 3,
      title: "CSS Grid Mastery",
      description:
        "Finally understanding the power of CSS Grid for complex layouts. Created a responsive photo gallery.",
      date: "2023-05-10",
      likes: 18,
      comments: 2,
    },
    {
      id: 4,
      title: "TypeScript Generics",
      description: "Deep diving into TypeScript generics today. They're powerful for creating reusable components.",
      date: "2023-05-08",
      likes: 31,
      comments: 5,
    },
    {
      id: 5,
      title: "API Authentication",
      description: "Implemented JWT authentication for a REST API. Secure and stateless authentication is crucial.",
      date: "2023-05-05",
      likes: 27,
      comments: 4,
    },
  ]

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">ShowOff Feed</h1>
        <div className="flex items-center gap-4">
          <Button asChild variant="outline" size="sm">
            <Link href="/contact">
              Connect With Me <Mail className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
            <AvatarFallback>NC</AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.id} className="overflow-hidden">
            <CardHeader className="p-4">
              <div className="flex items-center gap-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Profile" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-xs text-muted-foreground">{post.date}</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Link href={`/post/${post.id}`}>
                <Image
                  src={`/placeholder.svg?height=500&width=800&text=${encodeURIComponent(post.title)}`}
                  alt={post.title}
                  width={800}
                  height={500}
                  className="w-full object-cover aspect-video"
                />
              </Link>
              <div className="p-4">
                <p className="text-sm">{post.description}</p>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0 flex justify-between">
              <div className="flex gap-4">
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <Heart className="h-4 w-4" />
                  <span>{post.likes}</span>
                </Button>
                <Button variant="ghost" size="sm" className="flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  <span>{post.comments}</span>
                </Button>
              </div>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Share2 className="h-4 w-4" />
                <span>Share</span>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

