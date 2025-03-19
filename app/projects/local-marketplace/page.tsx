"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Github,
  ArrowLeft,
  ExternalLink,
  MapPin,
  ShoppingBag,
  Shield,
  Star,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

export default function LocalMarketplaceProject() {
  const [activeSection, setActiveSection] = useState("overview");

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "features", label: "Features" },
    { id: "tech", label: "Tech Stack" },
    { id: "impact", label: "Impact" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background/95 to-background/90 pb-20">
      {/* Header with floating navigation */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/30 py-4">
        <div className="container max-w-6xl flex justify-between items-center">
          <Link
            href="/#portfolio"
            className="flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
          </Link>

          <div className="flex gap-3">
            <Button
              asChild
              size="sm"
              variant="outline"
              className="border-primary/50 hover:border-primary"
            >
              <a
                href="https://github.com/nabin00012/local-marketplace"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="mr-2 h-4 w-4" /> GitHub
              </a>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90"
            >
              <a
                href="https://local-marketplace-demo.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="container max-w-6xl pt-10">
        {/* Hero Section with 3D Card Effect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative rounded-2xl overflow-hidden mb-16 shadow-2xl"
        >
          <div className="relative h-[500px] w-full">
            <Image
              src="/marketplace-preview.jpg"
              alt="Local Marketplace Preview"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute bottom-0 left-0 p-10 w-full"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                <div className="space-y-4 mb-6 md:mb-0">
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm font-medium border border-green-500/30">
                    <MapPin className="h-3.5 w-3.5 mr-1" /> Community
                    Marketplace
                  </div>
                  <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    Local{" "}
                    <span className="bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                      Marketplace
                    </span>
                  </h1>
                  <p className="text-xl text-white/80 max-w-2xl">
                    Connecting local vendors with customers to build stronger
                    communities and sustainable economies
                  </p>
                </div>

                <div className="flex gap-3">
                  <div className="flex flex-col items-center bg-card/30 backdrop-blur-md p-4 rounded-lg border border-border/30">
                    <span className="text-3xl font-bold text-white">200+</span>
                    <span className="text-xs text-white/70">Vendors</span>
                  </div>
                  <div className="flex flex-col items-center bg-card/30 backdrop-blur-md p-4 rounded-lg border border-border/30">
                    <span className="text-3xl font-bold text-white">5K+</span>
                    <span className="text-xs text-white/70">Customers</span>
                  </div>
                  <div className="flex flex-col items-center bg-card/30 backdrop-blur-md p-4 rounded-lg border border-border/30">
                    <span className="text-3xl font-bold text-white">15+</span>
                    <span className="text-xs text-white/70">Communities</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex overflow-x-auto space-x-2 pb-4 mb-8 scrollbar-hide">
          {tabs.map((tab) => (
            <Button
              key={tab.id}
              variant={activeSection === tab.id ? "default" : "outline"}
              className={`rounded-full ${
                activeSection === tab.id
                  ? "bg-primary hover:bg-primary/90"
                  : "hover:bg-primary/10"
              }`}
              onClick={() => setActiveSection(tab.id)}
            >
              {tab.label}
            </Button>
          ))}
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Overview Section */}
          {activeSection === "overview" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10"
            >
              <div className="space-y-6">
                <div className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    Project Overview
                  </h2>
                  <p className="text-muted-foreground">
                    Local Marketplace is a community-driven platform that
                    connects local vendors with customers in their area. The
                    platform aims to promote sustainable shopping practices by
                    reducing shipping distances and supporting small businesses
                    in local communities.
                  </p>
                </div>

                <div className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    Vision & Mission
                  </h2>
                  <p className="text-muted-foreground">
                    The vision for Local Marketplace is to revitalize local
                    economies by making it easier for small businesses to reach
                    customers in their area. We believe that by creating direct
                    connections between local vendors and consumers, we can
                    build more resilient communities and reduce the
                    environmental impact of e-commerce.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                    Challenges & Solutions
                  </h2>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="bg-primary/20 p-2 rounded-full mr-3 mt-1">
                        <MapPin className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground">
                          Accurate Geolocation
                        </span>
                        <p className="text-sm mt-1">
                          We implemented a hybrid approach using IP-based
                          location detection with optional GPS precision for
                          better accuracy.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/20 p-2 rounded-full mr-3 mt-1">
                        <Shield className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground">
                          Trust & Safety
                        </span>
                        <p className="text-sm mt-1">
                          We developed a comprehensive review system with
                          verification badges to ensure trust between vendors
                          and customers.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-primary/20 p-2 rounded-full mr-3 mt-1">
                        <Star className="h-4 w-4 text-primary" />
                      </div>
                      <div>
                        <span className="font-medium text-foreground">
                          Scalability
                        </span>
                        <p className="text-sm mt-1">
                          Our Firebase architecture was designed with sharding
                          and caching strategies to handle growth in different
                          geographic regions.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl border border-primary/30 p-6 shadow-lg">
                  <h2 className="text-2xl font-bold mb-4 text-foreground">
                    User Testimonials
                  </h2>
                  <div className="space-y-4">
                    <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg">
                      <p className="italic text-sm">
                        "Local Marketplace has transformed how I run my small
                        bakery. I've connected with so many customers in my
                        neighborhood who didn't even know my shop existed!"
                      </p>
                      <p className="font-medium text-sm mt-2">
                        — Sarah T., Small Business Owner
                      </p>
                    </div>
                    <div className="bg-background/50 backdrop-blur-sm p-4 rounded-lg">
                      <p className="italic text-sm">
                        "I love being able to support local artisans and
                        businesses. The platform is intuitive and I've
                        discovered amazing products just blocks from my home."
                      </p>
                      <p className="font-medium text-sm mt-2">
                        — Michael R., Customer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Features Section */}
          {activeSection === "features" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-8">
                Key Features
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: <MapPin className="h-6 w-6 text-green-400" />,
                    title: "Location-Based Discovery",
                    description:
                      "Find vendors and products near your location with precise geolocation",
                  },
                  {
                    icon: <ShoppingBag className="h-6 w-6 text-blue-400" />,
                    title: "Vendor Profiles",
                    description:
                      "Detailed profiles for local businesses with their story and offerings",
                  },
                  {
                    icon: <Shield className="h-6 w-6 text-purple-400" />,
                    title: "Secure Transactions",
                    description:
                      "Safe and transparent payment processing with multiple options",
                  },
                  {
                    icon: <Star className="h-6 w-6 text-yellow-400" />,
                    title: "Community Reviews",
                    description:
                      "Honest feedback from local customers with verification",
                  },
                  {
                    icon: <ExternalLink className="h-6 w-6 text-red-400" />,
                    title: "Event Calendar",
                    description:
                      "Local markets, pop-ups, and community events all in one place",
                  },
                  {
                    icon: <Github className="h-6 w-6 text-amber-400" />,
                    title: "Sustainable Badges",
                    description:
                      "Recognition for eco-friendly practices and products",
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-card/60 group"
                  >
                    <div className="bg-primary/20 p-3 rounded-full w-fit mb-4 group-hover:bg-primary/30 transition-colors duration-300">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 p-8 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-xl border border-primary/30 text-center">
                <h3 className="text-2xl font-bold mb-4">Future Roadmap</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
                  {[
                    "Mobile app for vendors",
                    "Enhanced analytics dashboard",
                    "Integrated delivery service",
                    "Loyalty program",
                    "Cryptocurrency payments",
                    "AI-powered recommendations",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-background/50 backdrop-blur-sm p-3 rounded-lg border border-border/30"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Tech Stack Section */}
          {activeSection === "tech" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-8">
                Technology Stack
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">
                    Frontend
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-background/50 rounded-lg">
                      <div className="w-10 h-10 mr-4 flex items-center justify-center bg-primary/10 rounded-full">
                        <span className="text-lg font-bold">N</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Next.js</h4>
                        <p className="text-xs text-muted-foreground">
                          React framework for production
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-background/50 rounded-lg">
                      <div className="w-10 h-10 mr-4 flex items-center justify-center bg-primary/10 rounded-full">
                        <span className="text-lg font-bold">T</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Tailwind CSS</h4>
                        <p className="text-xs text-muted-foreground">
                          Utility-first CSS framework
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-background/50 rounded-lg">
                      <div className="w-10 h-10 mr-4 flex items-center justify-center bg-primary/10 rounded-full">
                        <span className="text-lg font-bold">TS</span>
                      </div>
                      <div>
                        <h4 className="font-medium">TypeScript</h4>
                        <p className="text-xs text-muted-foreground">
                          Typed JavaScript at scale
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">
                    Backend
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-background/50 rounded-lg">
                      <div className="w-10 h-10 mr-4 flex items-center justify-center bg-primary/10 rounded-full">
                        <span className="text-lg font-bold">F</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Firebase</h4>
                        <p className="text-xs text-muted-foreground">
                          Backend-as-a-Service platform
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-background/50 rounded-lg">
                      <div className="w-10 h-10 mr-4 flex items-center justify-center bg-primary/10 rounded-full">
                        <span className="text-lg font-bold">FS</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Firestore</h4>
                        <p className="text-xs text-muted-foreground">
                          NoSQL cloud database
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-background/50 rounded-lg">
                      <div className="w-10 h-10 mr-4 flex items-center justify-center bg-primary/10 rounded-full">
                        <span className="text-lg font-bold">CF</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Cloud Functions</h4>
                        <p className="text-xs text-muted-foreground">
                          Serverless compute solution
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-center">
                    DevOps & Tools
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center p-3 bg-background/50 rounded-lg">
                      <div className="w-10 h-10 mr-4 flex items-center justify-center bg-primary/10 rounded-full">
                        <Github className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-medium">GitHub</h4>
                        <p className="text-xs text-muted-foreground">
                          Version control & CI/CD
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-background/50 rounded-lg">
                      <div className="w-10 h-10 mr-4 flex items-center justify-center bg-primary/10 rounded-full">
                        <span className="text-lg font-bold">V</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Vercel</h4>
                        <p className="text-xs text-muted-foreground">
                          Deployment & hosting platform
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center p-3 bg-background/50 rounded-lg">
                      <div className="w-10 h-10 mr-4 flex items-center justify-center bg-primary/10 rounded-full">
                        <span className="text-lg font-bold">J</span>
                      </div>
                      <div>
                        <h4 className="font-medium">Jest</h4>
                        <p className="text-xs text-muted-foreground">
                          JavaScript testing framework
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 shadow-lg">
                <h3 className="text-xl font-bold mb-4">
                  Architecture Overview
                </h3>
                <div className="relative h-[300px] w-full rounded-lg overflow-hidden border border-border/50 bg-card/30 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="mb-4 text-4xl">🏗️</div>
                    <p className="text-muted-foreground">
                      Architecture diagram visualization
                    </p>
                  </div>
                </div>
              </div>

              {/* Add video demo section */}
              <div className="mt-12 p-6 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl border border-primary/30 shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-center">
                  Live Demo Video
                </h3>
                <div className="relative w-full rounded-lg overflow-hidden border border-border/50 aspect-video">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source
                      src="/local-marketplace-demo.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  Watch a walkthrough of the Local Marketplace platform and its
                  key features
                </p>
              </div>
            </motion.div>
          )}

          {/* Impact Section */}
          {activeSection === "impact" && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent mb-8">
                Impact & Results
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Business Impact</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-green-500/20 p-2 rounded-full mr-3 mt-1">
                        <Star className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <span className="font-medium">Increased Revenue</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Small businesses reported an average 32% increase in
                          monthly revenue after joining the platform.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-500/20 p-2 rounded-full mr-3 mt-1">
                        <Star className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <span className="font-medium">Customer Growth</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Vendors gained an average of 45 new regular customers
                          within the first three months.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-green-500/20 p-2 rounded-full mr-3 mt-1">
                        <Star className="h-4 w-4 text-green-400" />
                      </div>
                      <div>
                        <span className="font-medium">Market Expansion</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Businesses were able to reach customers up to 15 miles
                          away, compared to their previous 5-mile radius.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/50 p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">
                    Environmental Impact
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                        <Star className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <span className="font-medium">
                          Reduced Carbon Footprint
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Estimated 45% reduction in delivery distances compared
                          to traditional e-commerce.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                        <Star className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <span className="font-medium">
                          Sustainable Practices
                        </span>
                        <p className="text-sm text-muted-foreground mt-1">
                          68% of vendors adopted more sustainable packaging
                          after joining the platform.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-500/20 p-2 rounded-full mr-3 mt-1">
                        <Star className="h-4 w-4 text-blue-400" />
                      </div>
                      <div>
                        <span className="font-medium">Local Sourcing</span>
                        <p className="text-sm text-muted-foreground mt-1">
                          Increased local sourcing of materials by 27% across
                          all participating businesses.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-8 p-8 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-xl border border-primary/30">
                <h3 className="text-2xl font-bold mb-6 text-center">
                  Growth Metrics
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border/30 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      200%
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Year-over-year growth
                    </p>
                  </div>
                  <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border/30 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      15
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Cities covered
                    </p>
                  </div>
                  <div className="bg-background/50 backdrop-blur-sm p-6 rounded-lg border border-border/30 text-center">
                    <div className="text-4xl font-bold bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
                      5K+
                    </div>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Active users
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12 p-6 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-xl border border-primary/30">
                <h3 className="text-2xl font-bold mb-4 text-center">
                  Ready to explore Local Marketplace?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Button
                    asChild
                    size="lg"
                    className="bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90"
                  >
                    <a
                      href="https://local-marketplace-demo.vercel.app"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-5 w-5" /> Visit Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="lg">
                    <a
                      href="https://github.com/nabin00012/local-marketplace"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-5 w-5" /> View Source Code
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}
