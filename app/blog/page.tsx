"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Custom Software Development",
      excerpt:
        "Explore the emerging trends and technologies that are shaping the future of custom software development and how businesses can stay ahead of the curve.",
      image: "/placeholder.svg?height=600&width=800",
      date: "May 15, 2025",
      author: "Alex Johnson",
      readTime: "8 min read",
      category: "Software Development",
    },
    {
      id: 2,
      title: "How AI is Transforming Customer Service",
      excerpt:
        "Discover how artificial intelligence and chatbots are revolutionizing customer service and enhancing the customer experience across industries.",
      image: "/placeholder.svg?height=600&width=800",
      date: "May 10, 2025",
      author: "Sarah Chen",
      readTime: "6 min read",
      category: "AI & Chatbots",
    },
    {
      id: 3,
      title: "The Benefits of Digital Transformation for Small Businesses",
      excerpt:
        "Learn how small businesses can leverage digital transformation to streamline operations, enhance customer experiences, and drive growth.",
      image: "/placeholder.svg?height=600&width=800",
      date: "May 5, 2025",
      author: "Michael Rodriguez",
      readTime: "7 min read",
      category: "Digital Transformation",
    },
    {
      id: 4,
      title: "Best Practices for Mobile App Development",
      excerpt:
        "Explore the key considerations and best practices for developing high-quality, user-friendly mobile applications that deliver value to users.",
      image: "/placeholder.svg?height=600&width=800",
      date: "April 28, 2025",
      author: "Emily Taylor",
      readTime: "5 min read",
      category: "Mobile Development",
    },
    {
      id: 5,
      title: "The Role of UX Design in Software Development",
      excerpt:
        "Understand the critical role of user experience design in software development and how it impacts user adoption and business success.",
      image: "/placeholder.svg?height=600&width=800",
      date: "April 20, 2025",
      author: "Emily Taylor",
      readTime: "6 min read",
      category: "UX Design",
    },
    {
      id: 6,
      title: "Securing Your Custom Software: Best Practices",
      excerpt:
        "Learn about the essential security measures and best practices to protect your custom software applications from cyber threats.",
      image: "/placeholder.svg?height=600&width=800",
      date: "April 15, 2025",
      author: "Michael Rodriguez",
      readTime: "9 min read",
      category: "Security",
    },
  ]

  // Categories for filter
  const categories = [
    "All",
    "Software Development",
    "AI & Chatbots",
    "Digital Transformation",
    "Mobile Development",
    "UX Design",
    "Security",
  ]

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">Our Blog</h1>
              <p className="text-xl text-gray-600 mb-8">
                Insights, tips, and industry news from the Quanta Development team.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl font-bold mb-8">Featured Post</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-gray-50 rounded-xl overflow-hidden shadow-lg">
              <div className="relative h-[300px] lg:h-[400px] w-full">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="Featured blog post"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-8">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
                  AI & Chatbots
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  The Impact of Generative AI on Software Development
                </h3>
                <p className="text-gray-600 mb-6">
                  Explore how generative AI is revolutionizing the software development process, from code generation to
                  testing and beyond. Learn how developers can leverage these tools to enhance productivity and
                  innovation.
                </p>
                <div className="flex items-center text-sm text-gray-500 mb-6">
                  <div className="flex items-center mr-4">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>May 20, 2025</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <User className="w-4 h-4 mr-1" />
                    <span>Sarah Chen</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    <span>10 min read</span>
                  </div>
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Read Full Article
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category, index) => (
              <Button
                key={index}
                variant={index === 0 ? "default" : "outline"}
                className={index === 0 ? "bg-blue-600" : ""}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                  <div className="relative h-48 w-full">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                      <span className="text-xs text-gray-500">{post.date}</span>
                    </div>
                    <CardTitle className="text-xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600">{post.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter className="mt-auto pt-4 flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <User className="w-4 h-4 mr-1" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>{post.readTime}</span>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
              <p className="text-lg text-gray-600 mb-8">
                Stay updated with the latest insights, tips, and news from our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">Subscribe</Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  )
}
