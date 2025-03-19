"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // This would normally send an email to nabinchapagain001@gmail.com
    // For demo purposes, we'll just simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    }, 1500);
  };

  return (
    <div className="container py-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Connect With Me</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a question or want to work together? Send me a message and I'll
          get back to you as soon as possible.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-primary/10 via-primary/5 to-background">
          <CardHeader>
            <CardTitle>Contact Information</CardTitle>
            <CardDescription>
              Feel free to reach out through any of these channels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">
                  nabinchapagain001@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Phone</p>
                <p className="text-sm text-muted-foreground">+919793032581</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium">Location</p>
                <p className="text-sm text-muted-foreground">
                  Bengaluru, India
                </p>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-foreground mb-2">
                Nabin Chapagain
              </p>
              <p>Full Stack Developer</p>
              <p>
                Expert in JavaScript, TypeScript, React, Next.js, Node.js, and
                Tailwind CSS
              </p>
            </div>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Send Me a Message</CardTitle>
            <CardDescription>
              Your message will be sent directly to my email
            </CardDescription>
          </CardHeader>
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {isSubmitted ? (
                <div className="bg-green-50 p-4 rounded-md text-green-800 text-center">
                  <p className="font-medium">Message sent successfully!</p>
                  <p className="text-sm mt-1">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message here..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                    />
                  </div>
                </>
              )}
            </CardContent>
            <CardFooter>
              {!isSubmitted && (
                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              )}
            </CardFooter>
          </form>
        </Card>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Whether you have a project in mind or just want to say hello, I'm
          always open to new opportunities and connections.
        </p>
      </div>
      {/* Removing the duplicate contact information section */}
    </div>
  );
}
