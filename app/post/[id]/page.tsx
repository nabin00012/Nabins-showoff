import Link from "next/link"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Heart, MessageSquare, Share2, ArrowLeft } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function PostPage({ params }: { params: { id: string } }) {
  const postId = params.id

  // This would normally come from a database lookup using the ID
  const post = {
    id: postId,
    title: `Learning Experience #${postId}`,
    description:
      "Today I learned about building interactive UIs with React and Next.js. The component-based architecture makes it easy to create reusable pieces of UI that maintain their own state.",
    date: new Date().toLocaleDateString(),
    likes: 24,
    comments: [
      {
        id: 1,
        user: "Sarah Johnson",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "This is really insightful! I've been working on something similar.",
        date: "2 hours ago",
      },
      {
        id: 2,
        user: "Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
        content: "Great work! Have you considered using the Context API for state management?",
        date: "5 hours ago",
      },
    ],
  }

  return (
    <div className="container py-10">
      <Link href="/feed" className="flex items-center gap-2 text-sm mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4" />
        Back to feed
      </Link>

      <Card className="overflow-hidden">
        <CardHeader className="p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-lg">{post.title}</h3>
              <p className="text-xs text-muted-foreground">{post.date}</p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Image
            src={`/placeholder.svg?height=600&width=1200&text=${encodeURIComponent(post.title)}`}
            alt={post.title}
            width={1200}
            height={600}
            className="w-full object-cover aspect-video"
          />
          <div className="p-6">
            <p className="text-base">{post.description}</p>
          </div>
        </CardContent>
        <CardFooter className="p-4 flex flex-col gap-4">
          <div className="flex justify-between w-full">
            <div className="flex gap-4">
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <Heart className="h-4 w-4" />
                <span>{post.likes}</span>
              </Button>
              <Button variant="ghost" size="sm" className="flex items-center gap-1">
                <MessageSquare className="h-4 w-4" />
                <span>{post.comments.length}</span>
              </Button>
            </div>
            <Button variant="ghost" size="sm" className="flex items-center gap-1">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </Button>
          </div>

          <div className="border-t pt-4 w-full">
            <h4 className="font-medium mb-4">Comments</h4>
            <div className="space-y-4">
              {post.comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={comment.avatar} alt={comment.user} />
                    <AvatarFallback>{comment.user.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-baseline gap-2">
                      <h5 className="font-medium text-sm">{comment.user}</h5>
                      <span className="text-xs text-muted-foreground">{comment.date}</span>
                    </div>
                    <p className="text-sm mt-1">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-6">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Your avatar" />
                <AvatarFallback>YA</AvatarFallback>
              </Avatar>
              <div className="flex-1 flex gap-2">
                <Input placeholder="Add a comment..." className="flex-1" />
                <Button>Post</Button>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

