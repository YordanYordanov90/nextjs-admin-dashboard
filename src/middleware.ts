import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


const MASTER_PASSWORD = process.env.MASTER_PASSWORD

export function middleware(request: NextRequest) {
  const authCookie = request.cookies.get('auth_token')
  
  // Allow access to login page
  if (request.nextUrl.pathname === '/login') {
    return NextResponse.next()
  }

  // Check if user is authenticated
  if (!authCookie || authCookie.value !== MASTER_PASSWORD) {
    // Redirect to login if not authenticated
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  return NextResponse.next()
}

// Configure which routes to protect
export const config = {
  matcher: [
    "/",
    '/((?!api|_next/static|_next/image|favicon.ico|login).*)',
  ],
}