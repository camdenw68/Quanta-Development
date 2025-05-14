"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function NewPostPage() {
  const router = useRouter()
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      toast.error("You must be signed in to create a post.")
      return
    }

    const { error } = await supabase.from("posts").insert({
      title,
      content,
      user_id: user.id,
    })

    if (error) {
      console.error(error)
      toast.error("Error creating post")
    } else {
      toast.success("Post created!")
      router.push("/blog")
    }
  }

  return (
    <div className="max-w-2xl mx-auto mt-20 px-4">
      <h1 className="text-3xl font-bold mb-6">Write a New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Post Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Textarea
          placeholder="Post Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={8}
          required
        />
        <Button type="submit">Publish</Button>
      </form>
    </div>
  )
}
