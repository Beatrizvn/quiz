import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const privatePages = ['/home', '/my-quizzes']

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('accessToken')?.value

  if (currentUser && request.nextUrl.pathname === '/signin') {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  if (currentUser && request.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/home', request.url))
  }

  if (!currentUser && privatePages.some(page => request.nextUrl.pathname.startsWith(page))) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
