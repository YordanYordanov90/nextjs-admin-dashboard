
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'


const MASTER_PASSWORD = process.env.MASTER_PASSWORD as string


if (!MASTER_PASSWORD) {
  throw new Error('MASTER_PASSWORD is not defined in environment variables')
}

export async function POST(request: Request) {
  try {
    const { password } = await request.json()

    if (password === MASTER_PASSWORD) {
      const cookieStore = await cookies()
      
      
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