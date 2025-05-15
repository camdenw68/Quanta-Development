import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const ADMIN_EMAILS = ['your.admin@email.com'] // Add your admin emails here

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Protect these routes
  const protectedPaths = ['/blog/new']
  const isProtectedPath = protectedPaths.some(path => 
    request.nextUrl.pathname.startsWith(path)
  )

  // Check if it's a protected path
  if (isProtectedPath) {
    // If not logged in, redirect to login
    if (!session) {
      return NextResponse.redirect(new URL('/blog/login', request.url))
    }

    // If logged in but not an admin, redirect to blog
    if (!ADMIN_EMAILS.includes(session.user.email)) {
      return NextResponse.redirect(new URL('/blog', request.url))
    }
  }

  // If already logged in and trying to access login page, redirect to blog
  if (request.nextUrl.pathname === '/blog/login' && session) {
    return NextResponse.redirect(new URL('/blog', request.url))
  }

  return res
}

export const config = {
  matcher: ['/blog/new', '/blog/login']
} 