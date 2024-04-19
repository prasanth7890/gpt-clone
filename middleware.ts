import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
import * as jose from 'jose'

async function verify(token: string, secret: string) {
    try {
        const {payload} = await jose.jwtVerify(token, new TextEncoder().encode(secret));
        return payload;
    } catch (error: any) {
        console.log(error.message);
    }
}

 
const protectedRoutes = ['/chat']
const publicRoutes = ['/signin', '/signup']
 
export default async function middleware(req: NextRequest) {
  // 2. Check if the current route is protected or public
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  const isPublicRoute = publicRoutes.includes(path)
 
  // 3. Decrypt the session from the cookie
  const token = cookies().get('gpt-token')?.value || "";
  const session = await verify(token, process.env.JWT_SECRET as string);
  
  // 5. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !session?.email) {
    return NextResponse.redirect(new URL('/signin', req.nextUrl))
  }
 
  // 6. Redirect to /chat if the user is authenticated
  if (
    isPublicRoute &&
    session?.email &&
    !req.nextUrl.pathname.startsWith('/chat')
  ) {
    return NextResponse.redirect(new URL('/chat', req.nextUrl))
  }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|/|favicon.ico).*)']
}