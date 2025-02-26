import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function POST(request: Request) {
  const refreshToken = await cookies().get('refreshToken')?.value;
  
  if (!refreshToken) {
    return NextResponse.json({ message: 'Refresh token not found' }, { status: 401 });
  }

  try {
    const decoded = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET!) as { userId: string };

    const accessToken = jwt.sign({ userId: decoded.userId }, process.env.JWT_SECRET!, {
      expiresIn: '15m', 
    });

    return NextResponse.json({ accessToken }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Invalid refresh token' }, { status: 401 });
  }
}