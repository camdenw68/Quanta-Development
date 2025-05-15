"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import { motion } from "framer-motion"
import Image from "next/image"
import { User, Clock, Calendar } from "lucide-react"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

type Post = {
  id: string
  title: string
  content: string
  excerpt?: string
  cover_image?: string
  category?: string
  created_at: string
  read_time?: number
  user_id: string
  profiles?: {
    full_name: string
  }
}

export default function BlogPostPage() {
  const params = useParams()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from("posts")
          .select("*, profiles(*)")
          .eq("id", params.id)
          .single()

        if (error) throw error
        setPost(data)
      } catch (error) {
        console.error("Error fetching post:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Loading...</div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-500">Post not found</div>
      </div>
    )
  }

  return (
    <motion.article 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-4 py-12"
    >
      {post.cover_image && (
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image
            src={post.cover_image}
            alt={post.title}
            fill
            className="object-cover"
          />
        </div>
      )}

      <div className="space-y-4">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            {new Date(post.created_at).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.read_time ?? 2} min read
          </span>
          <span className="flex items-center gap-1">
            <User className="w-4 h-4" />
            {post.profiles?.full_name ?? "Anonymous"}
          </span>
        </div>

        <h1 className="text-4xl font-bold text-gray-900">{post.title}</h1>
        
        {post.category && (
          <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
            {post.category}
          </span>
        )}

        <div className="prose prose-lg max-w-none mt-8">
          {post.content}
        </div>
      </div>
    </motion.article>
  )
} 