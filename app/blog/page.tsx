"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { createClient } from "@supabase/supabase-js"
import { toast } from "sonner"

import {
  User,
  ArrowRight,
  Clock,
  Search,
  Trash2
} from "lucide-react"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AuthModal } from "@/components/auth/AuthModal"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Session = {
  user: any
} | null

type Profile = {
  full_name: string
}

type Post = {
  id: string
  title: string
  excerpt?: string
  content?: string
  cover_image?: string
  category?: string
  created_at: string
  read_time?: number
  user_id: string
  profiles?: Profile
}

export default function BlogPage() {
  const [session, setSession] = useState<Session>(null)
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false)
  const [authView, setAuthView] = useState<"sign_in" | "sign_up">("sign_in")
  const [searchQuery, setSearchQuery] = useState("")
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const init = async () => {
      // Get current session
      const { data: { session } } = await supabase.auth.getSession()
      setSession(session)
  
      // Always ensure a profile exists if a user is logged in
      if (session?.user) {
        const { error } = await supabase
          .from("profiles")
          .upsert([{ id: session.user.id, full_name: "New User" }], { onConflict: "id" })
  
        if (error) {
          console.error("Failed to upsert profile:", error)
        }
      }
  
      // Set up auth state listener
      const {
        data: { subscription },
      } = supabase.auth.onAuthStateChange((_event, session) => {
        setSession(session)
  
        if (_event === "SIGNED_IN") {
          toast.success("Signed in successfully!")
        }
      })
  
      // Fetch blog posts
      fetchPosts()
  
      // Cleanup subscription
      return () => {
        subscription.unsubscribe()
      }
    }
  
    init()
  }, [])
  
  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from("posts")
        .select("*, profiles(*)")
        .order("created_at", { ascending: false })

      if (error) throw error
      setPosts(data || [])
    } catch (error) {
      console.error("Error fetching posts:", error)
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (postId: string) => {
    const { error } = await supabase.from("posts").delete().eq("id", postId)
    if (error) {
      toast.error("Failed to delete post.")
    } else {
      toast.success("Post deleted.")
      setPosts((prev) => prev.filter((p) => p.id !== postId))
    }
  }

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.content?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50/50 to-white">
      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
        view={authView}
      />

      {/* Hero */}
      <section className="pt-20 pb-10">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Quanta Development Blog
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Insights on software development, AI, and digital transformation
            </p>
          </motion.div>

          {/* Search + Auth Buttons */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center mb-12">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="pl-10 w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {session ? (
              <div className="flex gap-2">
                <Link href="/blog/new">
                  <Button className="bg-blue-600 hover:bg-blue-700">
                    Write New Post <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  onClick={async () => {
                    await supabase.auth.signOut()
                    toast.success("Signed out successfully.")
                  }}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    setAuthView("sign_in")
                    setIsAuthModalOpen(true)
                  }}
                >
                  Sign In
                </Button>
                <Button
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => {
                    setAuthView("sign_up")
                    setIsAuthModalOpen(true)
                  }}
                >
                  Sign Up
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div className="col-span-full text-center text-gray-500">Loading...</div>
            ) : filteredPosts.length > 0 ? (
              filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${post.id}`}>
                    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                      {post.cover_image && (
                        <div className="relative h-48 w-full">
                          <Image
                            src={post.cover_image}
                            alt={post.title}
                            fill
                            className="object-cover rounded-t-lg"
                          />
                        </div>
                      )}
                      <CardHeader>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm text-blue-600 font-medium">
                            {post.category ?? "General"}
                          </span>
                          <span className="text-xs text-gray-500">
                            {new Date(post.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        <CardTitle className="text-xl line-clamp-2">
                          {post.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription className="line-clamp-3">
                          {post.excerpt ?? post.content?.slice(0, 100) + "..."}
                        </CardDescription>
                      </CardContent>
                      <CardFooter className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <User className="w-4 h-4 text-gray-500" />
                          <span className="text-sm text-gray-600">
                            {post.profiles?.full_name ?? "Anonymous"}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {session?.user?.id === post.user_id && (
                            <Button
                              size="icon"
                              variant="ghost"
                              onClick={(e) => {
                                e.preventDefault()
                                handleDelete(post.id)
                              }}
                            >
                              <Trash2 className="h-4 w-4 text-red-500" />
                            </Button>
                          )}
                          <div className="flex items-center text-sm text-gray-500">
                            <Clock className="w-4 h-4 mr-1" />
                            <span>{post.read_time ?? 2} min read</span>
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500">
                No posts found.
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
