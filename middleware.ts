import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })
  
  const {
    data: { session },
  } = await supabase.auth.getSession()

  // Only protect the login page from logged-in users
  if (request.nextUrl.pathname === '/blog/login' && session) {
    return NextResponse.redirect(new URL('/blog', request.url))
  }

  return res
}

export const config = {
  matcher: ['/blog/login']
} 