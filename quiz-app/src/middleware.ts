import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
// import jwt from 'jsonwebtoken';

export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('accessToken')?.value

  if (currentUser && request.nextUrl.pathname === '/signin') {
    return NextResponse.redirect(new URL('/teste', request.url))
  }

  if (!currentUser && request.nextUrl.pathname.startsWith('/teste')) {
    return NextResponse.redirect(new URL('/signin', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};
