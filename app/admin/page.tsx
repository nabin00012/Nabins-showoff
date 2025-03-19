"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ImagePlus, Loader2, Upload } from "lucide-react"

export default function AdminPage() {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [recentPosts, setRecentPosts] = useState([
    { id: 1, title: "Learning React Hooks", date: "2023-05-15" },
    { id: 2, title: "Building with Next.js", date: "2023-05-12" },
    { id: 3, title: "CSS Grid Mastery", date: "2023-05-10" },
  ])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      const imageUrl = URL.createObjectURL(file)
      setSelectedImage(imageUrl)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsUploading(true)

    // This would normally upload to a backend
    // For demo purposes, we'll just simulate an upload
    setTimeout(() => {
      setIsUploading(false)
      setTitle("")
      setDescription("")
      setSelectedImage(null)

      // Add the new post to recent posts
      setRecentPosts([{ id: Date.now(), title, date: new Date().toLocaleDateString() }, ...recentPosts.slice(0, 2)])

      alert("Post uploaded successfully!")
    }, 2000)
  }

  return (
    <div className="container py-10">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Link href="/feed">
          <Button variant="outline">View Public Feed</Button>
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Upload New Photo</CardTitle>
              <CardDescription>Share your latest learning experience or project update.</CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    placeholder="What did you learn today?"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    placeholder="Share the details of your learning experience..."
                    rows={4}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="image">Photo</Label>
                  <div className="border rounded-md p-4">
                    {selectedImage ? (
                      <div className="relative aspect-video">
                        <Image
                          src={selectedImage || "/placeholder.svg"}
                          alt="Selected image preview"
                          fill
                          className="object-cover rounded-md"
                        />
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute top-2 right-2"
                          onClick={() => setSelectedImage(null)}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center py-8 text-center">
                        <ImagePlus className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Drag and drop your image here or click to browse
                        </p>
                        <Input
                          id="image"
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={handleImageChange}
                          required
                        />
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => document.getElementById("image")?.click()}
                        >
                          Select Image
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button type="submit" disabled={isUploading} className="w-full">
                  {isUploading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Uploading...
                    </>
                  ) : (
                    <>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Post
                    </>
                  )}
                </Button>
              </CardFooter>
            </form>
          </Card>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Recent Posts</CardTitle>
              <CardDescription>Your latest uploaded content</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex items-center gap-3 border-b pb-3 last:border-0">
                    <div className="h-12 w-12 rounded-md overflow-hidden relative flex-shrink-0">
                      <Image
                        src={`/placeholder.svg?height=48&width=48&text=${encodeURIComponent(post.title.charAt(0))}`}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-medium text-sm truncate">{post.title}</h4>
                      <p className="text-xs text-muted-foreground">{post.date}</p>
                    </div>
                    <Link href={`/post/${post.id}`}>
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                    </Link>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full" asChild>
                <Link href="/admin/posts">Manage All Posts</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}

