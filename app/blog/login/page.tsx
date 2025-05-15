"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { createClient } from "@supabase/supabase-js"
import { toast } from "sonner"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      toast.success("Signed in successfully!")
      router.push("/blog")
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50/50 to-white p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Login</h1>
          <p className="text-gray-600 mt-2">Sign in to manage blog posts</p>
        </div>

        <form onSubmit={handleSignIn} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </main>
  )
} 