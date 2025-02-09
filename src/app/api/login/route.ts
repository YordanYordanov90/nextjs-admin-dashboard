// app/api/login/route.ts
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

// Add type assertion or proper type checking
const MASTER_PASSWORD = process.env.MASTER_PASSWORD as string

// Optional: Additional runtime check
if (!MASTER_PASSWORD) {
  throw new Error('MASTER_PASSWORD is not defined in environment variables')
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (password === MASTER_PASSWORD) {
      const cookieStore = await cookies()
      
      // Since we've asserted MASTER_PASSWORD as string, this will work
      cookieStore.set('auth_token', MASTER_PASSWORD, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        path: '/',
      })

      return NextResponse.json({ success: true })
    }

    return NextResponse.json(
      { success: false, message: 'Invalid password' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    )
  }
}