import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';
import prisma from './prisma';

export async function getCurrentUser() {
  const token = cookies().get('accessToken')?.value;

  if (!token) {
    return null;
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    return user;
  } catch (error) {
    return null;
  }
}